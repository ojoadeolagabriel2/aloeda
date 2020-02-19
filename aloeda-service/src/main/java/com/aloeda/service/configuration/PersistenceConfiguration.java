package com.aloeda.service.configuration;

import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import javax.sql.DataSource;

@EnableJpaRepositories
@ConditionalOnBean(DataSource.class)
public class PersistenceConfiguration {
}
