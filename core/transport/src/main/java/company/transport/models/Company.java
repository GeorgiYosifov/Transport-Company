package company.transport.models;

public class Company {
    public String Id;
    public String Name;
    public Cargo[] Cargos;
    public Vehicle[] Vehicles;
    public Employee[] Employees;

    public Company(String id, String name, Vehicle[] vehicles, Employee[] employees) {
        this.Id = id;
        this.Name = name;
        this.Cargos = new Cargo[]{};
        this.Vehicles = vehicles;
        this.Employees = employees;
    }
}
