package com.company.sv4.api.sv4supplychainapi.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.company.sv4.api.sv4supplychainapi.models.ERole;
import com.company.sv4.api.sv4supplychainapi.models.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
  Optional<Role> findByName(ERole name);
}