FROM openjdk:8-jdk-alpine as app-service
MAINTAINER adeola.ojo
VOLUME /tmp
COPY build/libs/*.jar app.jar

ENTRYPOINT ["java","-jar","/app.jar", "-Djava.security.egd=file:/dev/./urandom"]