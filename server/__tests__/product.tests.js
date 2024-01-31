const { expect } = require("chai");
const supertest = require("supertest");
const app = require("../index");

const request = supertest(app);

describe("API Tests", () => {
  it("should return a welcome message", async () => {
    const response = await request.get("/");
    expect(response.status).to.equal(200);
    expect(response.body.message).to.equal("Hello World!");
  });

  it("should create a new product with variants", async () => {
    const productData = {
      id: 1,
      name: "Test Product",
      description: "This is a test product.",
      price: 19.99,
      variants: [
        {
          name: "Variant 1",
          sku: "VAR1",
          additional_cost: 3.0,
          stock_count: 20,
        },
        {
          name: "Variant 2",
          sku: "VAR2",
          additional_cost: 5.0,
          stock_count: 15,
        },
      ],
    };

    const response = await request.post("/api/v1/products").send(productData);
    expect(response.status).to.equal(201);
    expect(response.body).to.have.property("product_id");
    expect(response.body.variants).to.have.lengthOf(2);
  });

  it("should update a product with matching id", async () => {
    const updatedProductData = {
      name: "this is the updated product name",
      description: "This is a test product.",
      price: 19.99,
      variants: [
        {
          name: "Variant 1",
          additional_cost: 3.0,
          stock_count: 20,
        },
        {
          name: "Variant 2",
          additional_cost: 5.0,
          stock_count: 15,
        },
      ],
    };
    const response = await request
      .put("/api/v1/products/1")
      .send(updatedProductData);

    expect(response.status).to.equal(200);
    expect(response.body).to.have.property("product_id");
    expect(response.body.variants).to.have.lengthOf(2);
  });

  it("should return a list of products", async () => {
    const response = await request.get("/api/v1/products");
    expect(response.status).to.equal(200);
  });

  it("should return a single product with matching id", async () => {
    const response = await request.get("/api/v1/products/1");
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property("product_id");
    expect(response.body.variants).to.have.lengthOf(2);
  });

  it("should return a list of products with matching search query", async () => {
    const response = await request.get("/api/v1/search?productName=baseball");
    expect(response.status).to.equal(200);
    expect(response.body).to.have.lengthOf(1);
  });
});
