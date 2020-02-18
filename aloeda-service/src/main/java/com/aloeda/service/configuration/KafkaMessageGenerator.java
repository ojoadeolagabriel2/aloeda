package com.aloeda.service.configuration;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.env.Environment;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import static java.lang.String.format;

@Component
@Slf4j
@EnableScheduling
@RequiredArgsConstructor
public class KafkaMessageGenerator {
    private static final String TOPIC = "TOPIC3";
    private final Environment environment;
    private final KafkaTemplate<String, String> kafkaTemplate;

    @Scheduled(fixedRate = 2000)
    public void run() {
        try {
            String message = format("%s-%s"
                    , environment.getProperty("spring.application.name")
                    , "message_" + System.currentTimeMillis());
            log.info(format("#### -> Producing message -> %s", message));
            this.kafkaTemplate.send(TOPIC, message);
        } catch (Exception exc) {
            log.error(exc.getMessage(), exc);
        }
    }

    @KafkaListener(topics = TOPIC)
    public void consume(String message) {
        log.info(format("#### -> Consumed message on %s-> %s", environment.getProperty("spring.application.name"), message));
    }
}
