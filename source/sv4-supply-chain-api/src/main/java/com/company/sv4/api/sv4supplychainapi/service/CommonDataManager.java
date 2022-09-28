package com.company.sv4.api.sv4supplychainapi.service;

import java.util.List;

import com.company.sv4.api.sv4supplychainapi.models.CeCCategory;

public interface CommonDataManager {
    public List<CeCCategory> fetchAll();
}
