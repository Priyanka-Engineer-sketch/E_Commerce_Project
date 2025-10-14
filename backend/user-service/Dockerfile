FROM eclipse-temurin:17-jre
WORKDIR /app
ARG JAR=target/discovery-*.jar
COPY ${JAR} app.jar
EXPOSE 8081
ENTRYPOINT ["java","-jar","/app/app.jar"]