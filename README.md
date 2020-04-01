# `accounting-frontend`

This project is bootstrapped by [aurelia-cli](https://github.com/aurelia/cli).

For more information, go to https://aurelia.io/docs/cli/webpack

## Run dev app
_Allows hot reload_
```bash
# --< In backend repo >--

# Start ofbiz locally
./gradlew [cleanAll loadAll] ofbiz

# --< In frontend repo (here) >--

# Start aurelia app
au run

# Start proxy
# Use --build to recreate containers
docker-compose -f docker-compose-dev.yml up [--build]
```

## Run prod? app
_Only exposes port 80 to public, uses nginx to serve front_
```bash
# --< In backend repo >--

# Start ofbiz in docker
docker-compose up

# --< In frontend repo (here) >--

# Build aurelia
au build

# Start proxy and front
# Use --build to recreate containers
docker-compose up [--build]
```
**If something is broken...**
- Make sore you have correct ports opened if running on windows _(especially using docker-toolbox)_
- On unix files created in docker need sudo rights to be removed so that might be a problem if backend doesn't build
- You can contact Tavo Annus (kilpkonn)

**TODO: Scripts to build both front and back**