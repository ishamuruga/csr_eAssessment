// package com.company.sv4.api.sv4supplychainapi.config;

// import java.util.Arrays;
// import java.util.List;

// import org.springframework.core.annotation.Order;
// import org.springframework.stereotype.Component;
// import org.springframework.web.cors.CorsConfiguration;
// import org.springframework.web.cors.CorsConfigurationSource;
// import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
// import org.springframework.web.filter.CorsFilter;

// @Component
// @Order(value = 1)
// public class AjaxCorsFilter extends CorsFilter {

//     public AjaxCorsFilter(CorsConfigurationSource configSource) {
//         super(configurationSource());
//         //TODO Auto-generated constructor stub
//     }

//     private static UrlBasedCorsConfigurationSource configurationSource() {
//         CorsConfiguration corsConfig = new CorsConfiguration();
//         List<String> allowedHeaders = Arrays.asList("x-auth-token", "content-type", "X-Requested-With", "XMLHttpRequest");
//         List<String> exposedHeaders = Arrays.asList("x-auth-token", "content-type", "X-Requested-With", "XMLHttpRequest");
//         List<String> allowedMethods = Arrays.asList("POST", "GET", "DELETE", "PUT", "OPTIONS");
//         List<String> allowedOrigins = Arrays.asList("*");
//         corsConfig.setAllowedHeaders(allowedHeaders);
//         corsConfig.setAllowedMethods(allowedMethods);
//         corsConfig.setAllowedOrigins(allowedOrigins);
//         corsConfig.setExposedHeaders(exposedHeaders);
//         corsConfig.setMaxAge(36000L);
//         corsConfig.setAllowCredentials(true);

//         UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//         source.registerCorsConfiguration("/**", corsConfig);
//        return source;
//     }
    
// }
