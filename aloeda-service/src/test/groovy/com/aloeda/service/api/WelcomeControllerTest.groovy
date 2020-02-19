package com.aloeda.service.api

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.web.servlet.MockMvc
import spock.lang.Specification
import spock.lang.Unroll

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status

@SpringBootTest
@AutoConfigureMockMvc(secure = false)
@ActiveProfiles(profiles = ["integration_test_no_kafka_and_datasource"])
class WelcomeControllerTest extends Specification {

    @Autowired
    WelcomeController controller

    @Autowired
    private MockMvc mvc

    def "confirm controller is initialized"() {
        expect: "controller component is loaded"
        controller
    }

    @Unroll
    def "call endpoint for id: #input"() {
        expect: "Status is 200 and the response is json with 'simple test request'"
        mvc.perform(get("/api/v1/welcome/" + input))
                .andExpect(status().isOk())
                .andReturn()
                .response
                .contentAsString == String.format("{\"id\":\"%s\",\"name\":\"instance-0\",\"description\":\"simple test request\"}", output)
        where:
        input || output
        1     || 1
        2     || 2
        3     || 3
        "ID3" || "ID3"
    }
}
