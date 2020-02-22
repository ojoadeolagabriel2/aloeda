package com.aloeda.service.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.env.Environment;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.scheduling.annotation.Scheduled;

import java.util.concurrent.atomic.AtomicLong;

import static java.lang.String.format;

@Slf4j
@RequiredArgsConstructor
public class KafkaMessageGeneratorService {
    private static final String TOPIC = "TOPIC3";

    private final Environment environment;
    private final KafkaTemplate<String, String> kafkaTemplate;
    private AtomicLong counter = new AtomicLong();

    @Scheduled(fixedRate = 3000L)
    public void run() {
        try {
            String message = format("%s-%s", environment.getProperty("spring.application.name"), "message_" + counter.addAndGet(1L));
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
