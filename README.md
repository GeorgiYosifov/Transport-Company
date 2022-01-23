# Transport Company

## Setup

In order to setup the project easier, all 3 components (ui, backend, database) are containerized.

### Prerequisites

Before you can start the app, you should have Docker running on your PC.
Follow the [Docker docs](https://docs.docker.com/get-docker/) in order to get Docker.

### Steps

It does not get simpler than that:

```bash
docker-compose up --build
```

This will build and start 3 containers.

- Java Spring API running on [localhost:8080](http://localhost:8080/api/)
- React app as a client running on [localhost:3000](http://localhost:3000/)
- Redis database.

## Teardown

If you want to stop the containers simply run:

```bash
docker-compose stop
```

or if you wish to remove the containers from your host run:

```bash
docker-compose down
```
