package com.aloeda.service.configuration;

import com.aloeda.service.configuration.types.MessageGeneratorConfiguration;
import org.springframework.context.annotation.Import;

import java.lang.annotation.*;

@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@Import(MessageGeneratorConfiguration.class)
public @interface EnableMessagingApplication {

}
