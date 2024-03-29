package com.company.sv4.api.sv4supplychainapi.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "roles")
@Getter
@Setter
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
  
    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private ERole name;
  
    public Role() {
  
    }
  
    public Role(ERole name) {
      this.name = name;
    }
}
