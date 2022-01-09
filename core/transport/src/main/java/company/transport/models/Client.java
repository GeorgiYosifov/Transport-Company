package company.transport.models;

import org.springframework.data.redis.core.RedisHash;

@RedisHash("Client")
public class Client {
    private String id;
    private String name;

    public Client(String id, String name) {
        this.id = id;
        this.name = name;
    }
}
