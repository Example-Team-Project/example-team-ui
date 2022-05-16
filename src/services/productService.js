const products = [
  {
    id: 1,
    name: "Example Product 1",
    image: "https://cdn.quasar.dev/img/mountains.jpg",
    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mi leo, maximus et ante eu, bibendum suscipit lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl ante.",
    listPrice: 12.45,
    salePrice: 10.22

  },
  {
    id: 2,
    name: "Example Product 2",
    image: "https://cdn.quasar.dev/img/mountains.jpg",
    listPrice: 12.45,
    salePrice: 10.22

  },
  {
    id: 3,
    name: "Example Product 3",
    image: "https://cdn.quasar.dev/img/mountains.jpg",
    shortDescription: "Nulla dapibus gravida egestas. Integer tempor ipsum a magna dapibus, a scelerisque est aliquet. Pellentesque porta, mauris ut condimentum pulvinar, mauris sem ullamcorper justo, et consequat lectus ligula ut tortor.",
    listPrice: 12.45,
    salePrice: 10.22

  },
  {
    id: 4,
    name: "Example Product 4",
    image: "https://cdn.quasar.dev/img/mountains.jpg",
    shortDescription: "Nulla dapibus gravida egestas. Integer tempor ipsum a magna dapibus, a scelerisque est aliquet. Pellentesque porta, mauris ut condimentum pulvinar, mauris sem ullamcorper justo, et consequat lectus ligula ut tortor.",
    listPrice: 12.45,
    salePrice: 10.22

  },
  {
    id: 5,
    name: "Example Product 5",
    image: "https://cdn.quasar.dev/img/mountains.jpg",
    shortDescription: "In vehicula egestas massa vitae elementum. Etiam sagittis felis in metus tristique sodales. Nullam consequat velit nec blandit faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer sit amet erat ut velit imperdiet sodales at nec magna. Nam consectetur aliquam augue ac tempus. Cras leo enim, sagittis ut scelerisque nec, ullamcorper sed elit. Vivamus tempor auctor libero non pretium. Donec at aliquam magna, eu maximus est.",
    listPrice: 12.45,
    salePrice: 10.22

  },
  {
    id: 6,
    name: "Example Product 6",
    image: "https://cdn.quasar.dev/img/mountains.jpg",
    listPrice: 12.45,
    salePrice: 10.22

  },
  {
    id: 7,
    name: "Example Product 7",
    image: "https://cdn.quasar.dev/img/mountains.jpg",
    listPrice: 12.45,
    salePrice: 10.22

  },
]

class ProductService {

  getProducts() {
    return products;
  }
}


export default new ProductService();
