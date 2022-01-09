package company.transport.models;

import ch.qos.logback.core.net.server.Client;

import java.time.LocalTime;

public class Cargo {
    public String Id;
    public String CompanyId;
    public Client[] Clients;
    public String Destination;
    public LocalTime Departure;
    public LocalTime Arrival;
    public Double Weigth;
    public Double Price;

    public Cargo(String id, String companyId, Client[] clients, String destination, LocalTime departure, LocalTime arrival, Double weigth, Double price) {
        this.Id = id;
        this.CompanyId = companyId;
        this.Clients = clients;
        this.Destination = destination;
        this.Departure = departure;
        this.Arrival = arrival;
        this.Weigth = weigth;
        this.Price = price;
    }
}
