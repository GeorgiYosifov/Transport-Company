package company.transport.models;

import java.time.LocalTime;
import org.springframework.data.redis.core.RedisHash;

@RedisHash("Cargo")
public class Cargo {
    private String id;
    private String description;
    private String vehicleId;
    private String companyId;
    private Client[] clients;
    private String destination;
    private LocalTime departure;
    private LocalTime arrival;
    private Double weigth;
    private Double price;

    public Cargo(String id, String description, String vehicleId, String companyId, Client[] clients, String destination, LocalTime departure, LocalTime arrival, Double weigth) {
        this.id = id;
        this.description = description;
        this.vehicleId = vehicleId;
        this.companyId = companyId;
        this.clients = clients;
        this.destination = destination;
        this.departure = departure;
        this.arrival = arrival;
        this.weigth = weigth;
    }
}
