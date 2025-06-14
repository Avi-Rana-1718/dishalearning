package com.dishalearning.backend.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.dishalearning.backend.entity.AnswerEntity;

@Repository
public interface AnswerRepository extends JpaRepository<AnswerEntity, UUID> {
     @Query("SELECT ans FROM AnswerEntity ans ORDER BY ans.timestamp DESC")
    Page<AnswerEntity> getLatestAnswers(Pageable pageable);
}
