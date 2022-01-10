package company.transport.controllers;

import java.util.UUID;
import java.util.function.Predicate;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;

import company.transport.models.Cargo;
import company.transport.models.Company;
import company.transport.repositories.CompanyRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/companies/{companyId}/cargos")
public class CargoController {

    @Autowired
    private CompanyRepository companyRepository;

    @GetMapping("/{id}")
    public Cargo get(@PathVariable String companyId, @PathVariable String id) {
        Company company = companyRepository.findById(companyId).get();
        for (Cargo c : company.getCargos()) {
            if (c.getId().equals(id)) {
                return c;
            }
        }
        return null;
    }

    @PostMapping
    public String create(@PathVariable String companyId, @RequestBody Cargo cargo) {
        Company company = companyRepository.findById(companyId).get();
        cargo.setId(UUID.randomUUID().toString());
        company.getCargos().add(cargo);
        companyRepository.deleteById(companyId);
        Company saved = companyRepository.save(company);
        if (saved != null) {
            return companyId;
        } else {
            return "";
        }
    }

    @DeleteMapping("/{id}")
    public HttpStatus delete(@PathVariable String companyId, @PathVariable String id) {
        Company company = companyRepository.findById(companyId).get();
        Predicate<Cargo> pr = c -> c.getId().equals(id);
        company.getCargos().removeIf(pr);
        companyRepository.deleteById(companyId);
        Company saved = companyRepository.save(company);
        if (saved != null) {
            return HttpStatus.OK;
        } else {
            return HttpStatus.BAD_REQUEST;
        }
    }
}
