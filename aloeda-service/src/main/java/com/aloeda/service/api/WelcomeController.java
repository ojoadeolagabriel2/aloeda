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

import java.util.Optional;
import java.util.Set;

import static java.lang.String.format;
import static java.util.Optional.ofNullable;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.http.ResponseEntity.ok;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/welcome")
public class WelcomeController {

    private static final String APPLICATION_NAME = "spring.application.name";
    private final Environment environment;

    @GetMapping(value = "/{id:^[a-zA-Z0-9_]*$}", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<WelcomeResult> get(@PathVariable String id) {
        Optional<String> applicationName = ofNullable(environment.getProperty(APPLICATION_NAME));
        return ok(
                new WelcomeResult(id, applicationName.orElse("not-defined"), "a simple welcome!")
        );
    }

    @GetMapping(produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<String> get() {
        return ok(format("found: %s", "default"));
    }

    @GetMapping(value = "/characters", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<Set<CharacterDto>> getCharacters() {
        Set<CharacterDto> list = Set.of(
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
