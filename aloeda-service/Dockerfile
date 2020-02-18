FROM openjdk:8-jdk-alpine as app-service
MAINTAINER adeola.ojo
RUN mkdir /opt/app
VOLUME /tmp

COPY build/libs/*.jar app.jar
COPY installer/entrypoint.sh /entry-point.sh

RUN chmod +x /entry-point.sh
ENTRYPOINT ["java", "-jar", "app.jar"]