package com.aloeda.service.api

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.web.servlet.MockMvc
import spock.lang.Specification

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status

@SpringBootTest
@AutoConfigureMockMvc(secure=false)
@ActiveProfiles(profiles = ["no_datasource", "no_kafka"])
class WelcomeControllerTest extends Specification {

    @Autowired(required = false)
    WelcomeController controller

    @Autowired
    private MockMvc mvc

    def "confirm controller is initialized"() {
        expect: "controller component is loaded"
        controller
    }

    def "call endpoint" () {
        expect: "Status is 200 and the response is json with 'simple test request'"
        mvc.perform(get("/api/v1/welcome/1"))
                .andExpect(status().isOk())
                .andReturn()
                .response
                .contentAsString == "{\"id\":\"1\",\"name\":\"instance-0\",\"description\":\"simple test request\"}"
    }
}
