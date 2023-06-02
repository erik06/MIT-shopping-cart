import axios from "axios";
import Products from "./Products";

// Mock the axios module
jest.mock("axios");

// Mock the API response data
const apiResponse = {
  data: [
    {
      id: 1,
      attributes: {
        name: "Apples",
        country: "Italy",
        cost: 3,
        instock: 10,
        createdAt: "2023-05-24T15:48:46.172Z",
        updatedAt: "2023-05-24T15:54:38.928Z",
        publishedAt: "2023-05-24T15:48:49.730Z",
      },
    },
    // Add more mock data objects as needed
  ],
  meta: {
    pagination: {
      page: 1,
      pageSize: 25,
      pageCount: 1,
      total: 5,
    },
  },
};

describe("Products", () => {
  beforeEach(() => {
    // Reset the axios mock before each test
    axios.get.mockReset();
    axios.post.mockReset();
  });

  test("fetches products and adds item to cart", async () => {
    // Mock the axios response for fetching products
    axios.get.mockResolvedValueOnce({ data: apiResponse });

    // Mock the axios response for adding item to cart
    axios.post.mockResolvedValueOnce({ status: 200 });

    // Create an instance of the Products component
    const productsComponent = new Products();

    // Fetch products
    await productsComponent.restockProducts(
      "http://localhost:1337/api/products"
    );

    // Verify that the products are fetched correctly
    expect(productsComponent.state.items.length).toBe(apiResponse.data.length);

    // Add item to cart
    const itemToAdd = apiResponse.data[0];
    await productsComponent.addToCart(itemToAdd);

    // Verify that the item is added to the cart correctly
    expect(productsComponent.state.cart.length).toBe(1);
    expect(productsComponent.state.cart[0]).toEqual(itemToAdd);

    // You can add more assertions or test cases as needed
  });

  // Add more test cases for other functionalities as needed
});
