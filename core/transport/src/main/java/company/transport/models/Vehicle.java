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

    public String getId() {
        return this.id;
    }

    public VehicleType getType() {
        return this.type;
    }
}
