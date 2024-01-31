
# E-Commerce API

It is an API which is made for the Backend Internship.


## Tech Stack

**Server:** NodeJS, ExpressJS

**DataBase:** MongoDB
## Run Locally 

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd E-Commerce API
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## API Reference

It is running on the localhost machine on PORT = 5000.

## Link 

```http
  http://localhost:5000
```
# CRUD Operations for Product 
#### Get all products

```http
  GET /products
```

#### Get product

```http
  GET /products/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. id of product to fetch |

#### Add product

```http
  POST /products
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. name of the product  |
| `description`      | `string` | **Required**. description of product |
| `price`      | `number` | **Required**. price of product |

#### UPDATE product

```http
  PUT /products/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. id of product to update |
| `name`      | `string` |  name of the product to update  |
| `description`      | `string` | description of product to update |
| `price`      | `number` |  price of product to update |

#### DELETE product

```http
  DELETE /products/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. id of product to delete |


# CRUD Operations for Product Variants 
#### Get all variants of product

```http
  GET /products/:prid/var
```

#### Get a variant of a product

```http
  GET /products/:prid/var/:varid
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `prid`      | `string` | **Required**. id of product to fetch |
| `varid`      | `string` | **Required**. id of variant to fetch |

#### Add variant of a product

```http
  POST /products/:prid/var
```


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `prid`      | `string` | **Required**. id of product  |
| `name`      | `string` |  name of the variant  |
| `sku`      | `string` |  description of variant |
| `additionalcost`      | `string` | price of variant |
| `stockcount`      | `number` | price of variant |

#### UPDATE a variant of a product

```http
  PUT /products/:prid/var/:varid
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `prid`      | `string` | **Required**. id of product to update |
| `varid`      | `string` | **Required**. id of variant to update |
| `name`      | `string` |  name of the variant  |
| `sku`      | `string` |  description of variant |
| `additionalcost`      | `string` | price of variant |
| `stockcount`      | `number` | price of variant |

#### DELETE a variant of a product

```http
  DELETE /products/:prid/var/:varid
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `prid`      | `string` | **Required**. id of product to delete |
| `varid`      | `string` | **Required**. id of variant to delete |



