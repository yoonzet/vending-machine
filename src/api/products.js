const products = [
  {
    id: 1,
    name: "apple",
    price: 1000,
    stock: 0,
  },
  {
    id: 2,
    name: "banana",
    price: 1000,
    stock: 5,
  },
  {
    id: 3,
    name: "peach",
    price: 1000,
    stock: 5,
  },
  {
    id: 4,
    name: "mango",
    price: 1000,
    stock: 5,
  },
];

export const getProducts = async () => {
  return products;
};
export const getProductById = async (id) => {
  return products.find((item) => item.id === id);
};
