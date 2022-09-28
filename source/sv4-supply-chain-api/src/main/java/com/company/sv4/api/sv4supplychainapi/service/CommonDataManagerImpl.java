package com.company.sv4.api.sv4supplychainapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.company.sv4.api.sv4supplychainapi.models.CeCCategory;
import com.company.sv4.api.sv4supplychainapi.repo.CeCCategoryRepository;

@Service
public class CommonDataManagerImpl implements CommonDataManager {
    
    @Autowired
    private CeCCategoryRepository cecRepo;

    public List<CeCCategory> fetchAll(){
        return cecRepo.findAll();
    }

}
