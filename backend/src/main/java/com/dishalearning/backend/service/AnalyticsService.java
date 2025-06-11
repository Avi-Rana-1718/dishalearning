package com.dishalearning.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dishalearning.backend.entity.AnalyticsEntity;
import com.dishalearning.backend.repository.AnalyticsRepository;

@Service
public class AnalyticsService {
    
    @Autowired
    AnalyticsRepository analyticsRepository;

    public void add(String name, String ip) {
        AnalyticsEntity analyticsEntity = new AnalyticsEntity(0, name, System.currentTimeMillis(), ip);
        analyticsRepository.save(analyticsEntity);
    }
}