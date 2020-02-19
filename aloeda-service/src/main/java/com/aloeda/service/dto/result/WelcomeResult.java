package com.aloeda.service.dto.result;

import lombok.Builder;
import lombok.Data;

@Data
@Builder(builderMethodName = "aWelcomeResult")
public class WelcomeResult {
    private final String id;
    private final String name;
    private final String description;
}
