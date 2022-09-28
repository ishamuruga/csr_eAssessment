package com.company.sv4.api.sv4supplychainapi.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.company.sv4.api.sv4supplychainapi.models.CeCCategory;
import com.company.sv4.api.sv4supplychainapi.service.CommonDataManager;

@RestController
@RequestMapping("/api/common")
@CrossOrigin(origins = "*", maxAge = 3600)
public class CommonDataController {

    @Autowired
    private CommonDataManager commonService;
    
    @GetMapping(value = "/ceccategories",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<CeCCategory>> fetchCecCategoryAll(){
        System.out.println("===================^^^++++++++++");
        System.out.println(commonService.fetchAll());
        return new ResponseEntity<List<CeCCategory>>(commonService.fetchAll(),HttpStatus.OK);
    }
    
    // @RequestMapping(value = "/init/{id}",method=RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
    // public ResponseEntity<Customer> getCustomer(@PathVariable int id) {
    //     Customer customer = service.getAllCustomers().get(id);
    //     return new ResponseEntity<Customer>(customer,HttpStatus.OK);    
    // }
}
