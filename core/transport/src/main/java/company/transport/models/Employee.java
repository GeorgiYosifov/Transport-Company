package company.transport.models;

import org.springframework.data.redis.core.RedisHash;

@RedisHash("Employee")
public class Employee {
    private String id;
    private String name;
    private Double salary;
    private String companyId;

    public Employee(String id, String name, Double salary, String companyId) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.companyId = companyId;
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public Double getSalary() {
        return this.salary;
    }

    public String getCompanyId() {
        return this.companyId;
    }
}
