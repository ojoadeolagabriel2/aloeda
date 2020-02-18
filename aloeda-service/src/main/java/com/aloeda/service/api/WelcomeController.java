package com.aloeda.service.api;

import com.aloeda.service.dto.result.WelcomeResult;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.env.Environment;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static java.lang.String.format;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.http.ResponseEntity.ok;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/welcome")
public class WelcomeController {

    private final Environment environment;

    @GetMapping(value = "/{id:^[a-zA-Z0-9_]*$}", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<WelcomeResult> get(@PathVariable String id) {
        return ok(
                WelcomeResult
                        .builder()
                        .id(id)
                        .name(environment.getProperty("spring.application.name"))
                        .description("simple test request")
                        .build()
        );
    }

    @GetMapping(produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<String> get() {
        return ok(format("found: %s", "default"));
    }
}
