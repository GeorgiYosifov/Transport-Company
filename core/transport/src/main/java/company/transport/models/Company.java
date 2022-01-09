package company.transport.models;

import org.springframework.data.redis.core.RedisHash;

@RedisHash("Company")
public class Company {
    private String id;
    private String name;
    private Cargo[] cargos;
    private Vehicle[] vehicles;
    private Employee[] employees;

    public Company(String id, String name, Vehicle[] vehicles, Employee[] employees) {
        this.id = id;
        this.name = name;
        this.cargos = new Cargo[]{};
        this.vehicles = vehicles;
        this.employees = employees;
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    // public String getName() {
    //     return this.name;
    // }

    // public Vehicle[] getVehicles() {
    //     return this.vehicles;
    // }

    // public Employee[] getEmployees() {
    //     return this.employees;
    // }

    // @Override
    // public String toString() {
    //     return "UserSession{" +
    //             "id='" + id + '\'' +
    //             ", username='" + username + '\'' +
    //             ", browser='" + browser + '\'' +
    //             '}';
    // }
}
