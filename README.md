# Shopping Cart App README

## Table of Contents

1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Setup](#setup)
4. [Functionality](#functionality)

## General Info

This is a simple shopping cart application implemented in React using React Bootstrap for UI components. This application allows users to add products to a cart, remove them from the cart, and check out. It also includes a feature to restock products by fetching data from an API endpoint.

## Technologies

The project is created with:

- [React.js](https://reactjs.org/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Axios](https://axios-http.com/) for API calls

## Setup

To run this project, run a local web server such as live-server:

```bash
$ cd ../path/to/project
$ npx live-server
```

## Functionality

The main functionalities of the application include:

### Product Listing:

Displays a list of products available for purchase. Each product displays an image, name and cost. The user can add the product to the cart by clicking the input button next to each product.

### Shopping Cart:

Displays the contents of the shopping cart. Each item in the cart is listed with its name, cost, and country of origin. The user can remove items from the cart by clicking on the item.

### Checkout:

Displays the total cost of the items in the cart. The user can checkout by clicking the "Checkout" button. The list of items in the cart and the total cost is displayed upon checkout.

### Restock:

The user can restock the products by submitting an API endpoint in the input field provided. Upon submission, the application fetches data from the provided API endpoint and updates the product list.
