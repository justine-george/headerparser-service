# Request Header Parser Microservice

Header Parser Microservice is a simple API that returns the IP address, language, and operating system of the user.

## Live Demo

Check out the microservice [here](https://headerparser-service.fly.dev/).

## API Usage

- Endpoint: `GET /api/whoami`
- Description: Returns the IP address, language, and operating system of the user.
- Usage: `GET https://headerparser-service.fly.dev/api/whoami`

## Tech Stack

- Node.js
- Express.js
- fly.io

## Run locally

```
npm install
npm start
```

## Deploy on fly.io

```
fly launch
fly deploy
```
