package com.dishalearning.backend.entity;

import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "answer")
public class AnswerEntity {
    
    @Id
    @Column(name = "id")
    private UUID id;

    @Column(name = "question")
    private String question;
    
    @Column(name = "answer")
    private String answer;

    @Column(name = "email")
    private String email;

    @Column(name = "timestamp")
    private Long timestamp;

    @Column(name = "tags")
    private String[] tags;
}
