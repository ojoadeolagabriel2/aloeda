package com.aloeda.service.configuration;

import com.aloeda.service.service.KafkaMessageGeneratorService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.kafka.core.KafkaTemplate;

@Configuration
@RequiredArgsConstructor
@ConditionalOnProperty(name="app.message-generator.enabled", havingValue = "true")
public class MessageGeneratorConfiguration {
    KafkaTemplate<String, String> kafkaTemplate;

    @Bean
    public KafkaMessageGeneratorService kafkaMessageGeneratorService(Environment environment) {
        return new KafkaMessageGeneratorService(environment, kafkaTemplate);
    }
}
