# `accounting-frontend`

This project is bootstrapped by [aurelia-cli](https://github.com/aurelia/cli).

For more information, go to https://aurelia.io/docs/cli/webpack

Currently deployed at: [http://18.191.26.144/](http://18.191.26.144/).

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
docker-compose up [--build]
```
**If something is broken...**
- Make sore you have correct ports opened if running on windows _(especially using docker-toolbox)_
- On unix files created in docker need sudo rights to be removed so that might be a problem if backend doesn't build
- You can contact Tavo Annus (kilpkonn)
