package company.transport.repositories;

import org.springframework.data.repository.CrudRepository;

import company.transport.models.Company;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepository extends CrudRepository<Company, String> {}
