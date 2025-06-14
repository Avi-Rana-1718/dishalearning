package com.dishalearning.backend.controller;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dishalearning.backend.entity.AnswerEntity;
import com.dishalearning.backend.service.AnswersService;

@CrossOrigin(origins = "*")
@RestController()
@RequestMapping("/answers")
public class AnswersController {

    @Autowired
    AnswersService answersService;

    @GetMapping("/all")
    public Page<AnswerEntity> getAllQuestions(@RequestParam("page") int page) {
        return answersService.getAllQuestions(page);
    }

    @GetMapping("/{id}")
    public Optional<AnswerEntity> getQuestionById(@PathVariable(value ="id") UUID id) {
        return answersService.getById(id);
    }
    
}