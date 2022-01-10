package company.transport.controllers;

import java.util.UUID;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.DeleteMapping;

import company.transport.models.Company;
import company.transport.repositories.CompanyRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/companies")
public class CompanyController {

    @Autowired
    private CompanyRepository companyRepository;

    @GetMapping
    public Iterable<Company> getAll() {
        return companyRepository.findAll();
    }

    @GetMapping("/{id}")
    public Company get(@PathVariable String id) {
        return companyRepository.findById(id).get();
    }

    @PostMapping
    public String create(@RequestBody Company company) {
        String id = UUID.randomUUID().toString();
        company.setId(id);
        Company saved = companyRepository.save(company);
        if (saved != null) {
            return id;
        } else {
            return "";
        }
    }

    @PatchMapping
    public HttpStatus update(@RequestBody Company company) {
        companyRepository.deleteById(company.getId());
        Company saved = companyRepository.save(company);
        if (saved != null) {
            return HttpStatus.OK;
        } else {
            return HttpStatus.BAD_REQUEST;
        }
    }

    @DeleteMapping("/{id}")
    public HttpStatus delete(@PathVariable String id) {
        if (!companyRepository.existsById(id)) {
            return HttpStatus.BAD_REQUEST;
        } else {
            companyRepository.deleteById(id);
            return HttpStatus.OK;
        }
    }
}
