'use client';
import * as use from '@tensorflow-models/universal-sentence-encoder';
import * as tf from '@tensorflow/tfjs';
import { useEffect, useMemo, useState } from 'react';

export default function useAIRecommendations(items: { id: string|number; text: string }[], seed: string) {
    const [model, setModel] = useState<use.UniversalSentenceEncoder|null>(null);
    const [scores, setScores] = useState<{id:string|number; score:number}[]>([]);
    useEffect(() => { use.load().then(setModel); }, []);
    useEffect(() => {
        if (!model || !items.length || !seed) return;
        (async () => {
            const qTensor = await model.embed([seed]);  // Await the tensor
            const q = await qTensor.array();             // Then get array

            const embsTensor = await model.embed(items.map(i => i.text));
            const embs = await embsTensor.array();

            const sims = embs.map((e: number[], i: number) => {
                const dot = e.reduce((s: number, v: number, idx: number) => s + v * q[0][idx], 0);
                const nq = Math.sqrt(q[0].reduce((s: number, v: number) => s + v * v, 0));
                const ne = Math.sqrt(e.reduce((s: number, v: number) => s + v * v, 0));
                return { id: items[i].id, score: dot / (nq * ne) };
            });

            setScores(sims.sort((a, b) => b.score - a.score).slice(0, 12));
        })();
    }, [model, items, seed]);
    return scores; // ids sorted by semantic similarity (use to pull products)
}
