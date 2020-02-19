package com.aloeda.service.dto.result

import spock.lang.Specification

class WelcomeResultTest extends Specification {

    def "Can build a new welcome result"() {
        when:
        def result = WelcomeResult
                .aWelcomeResult()
                .name("adeola.ojo")
                .description("description")
                .build()
        then:
        result.getName() == "adeola.ojo"
        result.getDescription() == "description"
    }
}
