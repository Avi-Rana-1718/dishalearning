package com.dishalearning.backend.interceptor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import com.dishalearning.backend.service.AnalyticsService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class AnalyticsInterceptor implements HandlerInterceptor {
    
    @Autowired
    AnalyticsService analyticsService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        if(request.getRequestURL().toString().contains("/answers/"))
        analyticsService.add(request.getRequestURL().toString().split("/answers/")[1], request.getRemoteAddr());
        return true;
    }
}
