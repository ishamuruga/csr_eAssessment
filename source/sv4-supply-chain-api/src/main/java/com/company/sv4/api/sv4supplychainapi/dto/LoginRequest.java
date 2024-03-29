package com.company.sv4.api.sv4supplychainapi.dto;

import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class LoginRequest {
    @NotBlank
    private String username;

    @NotBlank
    private String password;
}
