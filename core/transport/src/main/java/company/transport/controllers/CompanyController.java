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
// import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.DeleteMapping;

import company.transport.models.Company;
import company.transport.repositories.CompanyRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class CompanyController {

    @Autowired
    private CompanyRepository companyRepository;

    @GetMapping("/company/all")
    public Iterable<Company> getAll() {
        return companyRepository.findAll();
    }

    @GetMapping("/company/{id}")
    public Company get(@PathVariable String id) {
        return companyRepository.findById(id).get();
    }

    @PostMapping("/company")
    public HttpStatus create(@RequestBody Company company) {
        company.setId(UUID.randomUUID().toString());
        Company saved = companyRepository.save(company);
        if (saved != null) {
            return HttpStatus.ACCEPTED;
        } else {
            return HttpStatus.BAD_REQUEST;
        }
    }

    // @PatchMapping("/company")
    // public Company update(@RequestBody Company company) {
    //     Company updateCompany = companyRepository.findById(company.getId()).get();
    //     updateCompany.get()
    // }

    @DeleteMapping("/company")
    public HttpStatus delete(@RequestBody String id) {
        if (!companyRepository.existsById(id)) {
            return HttpStatus.BAD_REQUEST;
        } else {
            companyRepository.deleteById(id);
            return HttpStatus.OK;
        }
    }
}
