package com.aloeda.service.dto.result

import spock.lang.Specification

class WelcomeResultTest extends Specification {

    def "Can build a new welcome result"() {
        when:
        def result = new WelcomeResult("1", "adeola.ojo", "xxx")
        then:
        result.getName() == "adeola.ojo"
        result.getDescription() == "xxx"
    }
}
