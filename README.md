# E-commerce system

## Description

A simple e-commerce system built using PE~~R~~N stack

## Table of Contents

- [Technologies used](#technologies)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Resources and Useful links](#resources)

## Technologies

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/docs/)
- [Sequelize](https://sequelize.org/docs/v6/getting-started/)

## Features

- [x] Product Creation
- [x] Product Retrivel
- [x] Product Updation
- [x] Product Deletion
- [x] Product Searching

## Installation

```bash
# Clone the repository
git clone https://github.com/sanjai0py/mirrAR-backend-assignment.git

# Populate .env variables
cp .env.example .env

# Navigate to the project directory
cd mirrar-backend-assignment

# Install dependencies
npm install
```

## Usage

```bash
# change directory
cd server

# Start the application
npm start
```

Visit [http://localhost:5000/](http://localhost:5000/) in your web browser. The server started successfully if you are greated with the message `Hello World!`

## API Endpoints

- **`GET api/v1/products`**: Get a list of all products.
- **`POST api/v1/products`**: Create a new product.
- **`GET api/v1/products/:id`**: Get details of a specific product.
- **`PUT api/v1/products/:id`**: Update a product.
- **`DELETE api/v1/products/:id`**: Delete a product.
- **`GET api/v1/search`**: Search for a product.

- **`GET api/v1/docs`**:  Get the swagger documentation.

## Testing

```bash
# Run tests
npm test
```

## Resources

> The best books are on the Internet. The best peers are on the Internet. The tools for learning are abundant. It's the desire to learn that's scarce. -Naval

Thanks to the amazing internet, which provides a wealth of knowledge. Here are a few resources that helped me learn some advanced concepts in my field:

- [Readme.md driven development](https://tom.preston-werner.com/2010/08/23/readme-driven-development.html)
- [REST-API best design practices](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/)

## Deployed Link

The API is deployed on [Render](https://render.com/).

- [API](https://e-commerce-backend-vn3u.onrender.com)
- [Documentation](https://e-commerce-backend-vn3u.onrender.com/api/v1/docs/)