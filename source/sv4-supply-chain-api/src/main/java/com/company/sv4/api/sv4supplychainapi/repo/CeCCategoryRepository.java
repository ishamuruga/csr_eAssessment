package com.company.sv4.api.sv4supplychainapi.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.company.sv4.api.sv4supplychainapi.models.CeCCategory;

@Repository
public interface CeCCategoryRepository extends JpaRepository<CeCCategory,Integer> {
    
}
