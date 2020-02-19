package com.aloeda.service;

import com.aloeda.service.configuration.EnableMessagingApplication;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
@EnableMessagingApplication
public class App {
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
}
