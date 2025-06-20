package com.dishalearning.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.dishalearning.backend.entity.AnalyticsEntity;

@Repository
public interface AnalyticsRepository extends JpaRepository<AnalyticsEntity, Integer> {
}
