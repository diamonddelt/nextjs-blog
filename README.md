# NextJS demo project

## Building the application

1. Clone the project
2. `npm build` to compile the client and server code

## Deploying the application (CLI)

### Windows

1. install `cross-env` onto the deployment server/instance
    1. `npm install -g cross-env`
2. run the application on port 8080
    1. `set PORT=8080`
    2. `cross-env npm start`

### Linux

1. modify the package.json file `script` section to the following: `"start": "NODE_ENV=production node server.js -p $PORT"`
2. recompile with `npm build`
3. run the application on port 8080 with `PORT=8080 npm start`