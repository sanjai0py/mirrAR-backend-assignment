# E-commerce system

## Description

A simple e-commerce system built using PE~~R~~N stack

## Table of Contents

- [Technologies used](#technologies)
- [Features](#features)
- [Database Models and ERD](#database-models-and-erd)
- [Search Funtionality](#search-functionality)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [API Endpoints](#api-endpoints)
- [Resources and Useful links](#resources)
- [Deployment Links](#deployed-link)

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

## Database Models and ERD:

**Database Models:**

Our application involves two main entities: `Product` and `Variant`.

1. **Product Model:**

   - `id` (Primary Key)
   - `name` (String, required)
   - `description` (Text)
   - `price` (Decimal, required)
   - `image` (String, URL)
   - `createdAt` and `updatedAt` (Auto-generated timestamps)

2. **Variant Model:**
   - `id` (Primary Key)
   - `name` (String, required)
   - `sku` (String, required)
   - `additional_cost` (Decimal, required)
   - `stock_count` (Integer, required)
   - `productId` (Foreign Key referencing Product)
   - `createdAt` and `updatedAt` (Auto-generated timestamps)

**Entity Relationship Diagram (ERD):**

![Alt text](https://i.ibb.co/vmGVkVS/mirrar-public.png)

In this ERD:

- The `Product` entity has a one-to-many relationship with the `Variant` entity. Each product can have multiple variants, while each variant belongs to only one product.
- The `productId` in the `Variant` entity is a foreign key referencing the `id` of the associated `Product`.

## Improved Search Feature

The search functionality in this project has been improved using PostgreSQL's full-text search features to provide more efficient and accurate search results. A separate branch named `improved-search` was created to test and refine the new feature. 

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

## Testing

```bash
# Run tests
npm test
```

## API Endpoints

- **`GET api/v1/docs`**: Get the swagger documentation.
- **`GET api/v1/products`**: Get a list of all products.
- **`POST api/v1/products`**: Create a new product.
- **`GET api/v1/products/:id`**: Get details of a specific product.
- **`PUT api/v1/products/:id`**: Update a product.
- **`DELETE api/v1/products/:id`**: Delete a product.
- **`GET api/v1/search`**: Search for a product.

## Resources

> The best books are on the Internet. The best peers are on the Internet. The tools for learning are abundant. It's the desire to learn that's scarce. -Naval Ravikant

Thanks to the amazing internet, which provides a wealth of knowledge. Here are a few resources that helped me learn some advanced concepts in my field:

- [Readme.md driven development](https://tom.preston-werner.com/2010/08/23/readme-driven-development.html)
- [REST-API best design practices](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/)

## Deployed Link

The API is deployed on [Render](https://render.com/).

- [API](https://e-commerce-backend-vn3u.onrender.com)
- [Documentation](https://e-commerce-backend-vn3u.onrender.com/api/v1/docs/)
