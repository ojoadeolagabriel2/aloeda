package com.aloeda.service.dto.result;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
@Builder(builderMethodName = "aCharacter")
public class CharacterDto {
    private final String name;
    private final String jobs;
}
