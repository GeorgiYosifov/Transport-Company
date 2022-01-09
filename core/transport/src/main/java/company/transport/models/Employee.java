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
}
