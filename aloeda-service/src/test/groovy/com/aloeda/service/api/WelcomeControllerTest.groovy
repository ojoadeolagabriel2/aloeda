package com.aloeda.service.api

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import spock.lang.Specification

@SpringBootTest
class WelcomeControllerTest extends Specification {

    @Autowired(required = false)
    WelcomeController controller

    def "confirm controller is initialized"() {
        expect: "controller component is loaded"
        controller
    }
}
