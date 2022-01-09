package company.transport.models;

import org.springframework.data.redis.core.RedisHash;

@RedisHash("Vehicle")
public class Vehicle {
    private String id;
    private VehicleType type;

    public Vehicle(String id, VehicleType type) {
        this.id = id;
        this.type = type;
    }
}
