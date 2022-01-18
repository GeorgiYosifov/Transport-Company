package company.transport.models;

import java.util.Date;
import org.springframework.data.redis.core.RedisHash;

@RedisHash("Cargo")
public class Cargo {
    private String id;
    private String description;
    private String employeeId;
    private String vehicleId;
    private String companyId;
    private Client[] clients;
    private String destination;
    private Date departure;
    private Date arrival;
    private Double weigth;
    private Double price;

    public Cargo() {}

    public Cargo(String id, String description, String employeeId, String vehicleId, String companyId, Client[] clients, String destination, Date departure, Date arrival, Double weigth) {
        this.id = id;
        this.description = description;
        this.employeeId = employeeId;
        this.vehicleId = vehicleId;
        this.companyId = companyId;
        this.clients = clients;
        this.destination = destination;
        this.departure = departure;
        this.arrival = arrival;
        this.weigth = weigth;
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return this.description;
    }

    public String getEmployeeId() {
        return this.employeeId;
    }

    public String getVehicleId() {
        return this.vehicleId;
    }

    public String getCompanyId() {
        return this.companyId;
    }

    public Client[] getClients() {
        return this.clients;
    }

    public String getDestination() {
        return this.destination;
    }

    public Date getDeparture() {
        return this.departure;
    }

    public Date getArrival() {
        return this.arrival;
    }

    public Double getWeigth() {
        return this.weigth;
    }

    public Double getPrice() {
        return this.price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}
