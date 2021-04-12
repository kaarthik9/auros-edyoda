function getProductsAPI() {
  const productsAPI = [
    {
      name: "MIRO DINING TABLE",
      price: 28,
      path: "table",
      category: "kitchen",
    },
    {
      name: "STUDIO CHAIR",
      price: 18,
      path: "chairs",
      category: "kitchen",
    },
    {
      name: "MEGA TABLE LAMP",
      price: 9,
      path: "lamp",
      category: "living",
    },
    {
      name: "BLACK CHAIR",
      price: 45,
      path: "blackChair",
      category: "living",
    },
  ];

  return productsAPI
}

export default getProductsAPI;