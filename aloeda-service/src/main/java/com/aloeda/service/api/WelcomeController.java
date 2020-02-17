package com.aloeda.service.api;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static java.lang.String.format;
import static org.springframework.http.ResponseEntity.ok;

@Slf4j
@RestController
@RequestMapping("/api/v1/welcome")
public class WelcomeController {

    @GetMapping("/{id}")
    public ResponseEntity<String> get(@PathVariable String id) {
        log.info("processing welcome::get ->" + id);
        return ok(format("found: %s", id));
    }
}
