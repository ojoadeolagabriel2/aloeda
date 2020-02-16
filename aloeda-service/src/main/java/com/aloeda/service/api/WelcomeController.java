package com.aloeda.service.api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/welcome")
public class WelcomeController {
    @GetMapping("/{id}")
    public ResponseEntity<String> get(@PathVariable String id) {
        return ResponseEntity.ok(id);
    }
}
