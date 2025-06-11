package com.dishalearning.backend.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.dishalearning.backend.entity.AnswerEntity;
import com.dishalearning.backend.repository.AnswerRepository;

@Service
public class AnswersService {

    @Autowired
    AnswerRepository answerRepository;
    
    public Page<AnswerEntity> getAllQuestions(int page) {
        Pageable pageable = PageRequest.of(page, 20);
        return answerRepository.findAll(pageable);
    }

    public Optional<AnswerEntity> getById(UUID id) {
        return answerRepository.findById(id);
    }
}
