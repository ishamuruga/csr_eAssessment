package com.company.sv4.api.sv4supplychainapi.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignUpResponse {
    public SignUpResponse(String _message) {
        this.message = _message;
    }

    private String message;
}
