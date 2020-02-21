package com.aloeda.service.api;

import com.aloeda.service.dto.result.CharacterDto;
import com.aloeda.service.dto.result.WelcomeResult;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.env.Environment;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static java.lang.String.format;
import static java.util.Arrays.asList;
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
                new WelcomeResult(id, environment.getProperty("spring.application.name"), "a simple welcome!")
        );
    }

    @GetMapping(produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<String> get() {
        return ok(format("found: %s", "default"));
    }

    @GetMapping(value = "/characters", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<List<CharacterDto>> getCharacters() {
        List<CharacterDto> list = asList(
                new CharacterDto("adeola.ojo", "developer"),
                new CharacterDto("blake.lively", "actor"),
                new CharacterDto("action.mike", "singer"),
                new CharacterDto("fisher.price", "toy maker in school"),
                new CharacterDto("montero.black", "actor"),
                new CharacterDto("renee.bob", "writer")
        );
        return ok(list);
    }
}
