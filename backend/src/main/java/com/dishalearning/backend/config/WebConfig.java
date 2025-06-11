package com.dishalearning.backend.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.dishalearning.backend.interceptor.AnalyticsInterceptor;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    
    @Autowired
    AnalyticsInterceptor analyticsInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(analyticsInterceptor).addPathPatterns("/**");
    }
}
