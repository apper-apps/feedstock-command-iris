import productsData from "@/services/mockData/products.json";

class ProductService {
  constructor() {
    this.products = [...productsData];
  }

  async getAll() {
    await this.delay(300);
    return [...this.products];
  }

  async getById(id) {
    await this.delay(200);
    const product = this.products.find(p => p.Id === parseInt(id));
    return product ? { ...product } : null;
  }

  async getByCategory(category) {
    await this.delay(250);
    if (category === "All Products") {
      return [...this.products];
    }
    return this.products.filter(p => p.category === category);
  }

  async searchProducts(query) {
    await this.delay(200);
    if (!query) return [...this.products];
    
    const searchTerm = query.toLowerCase();
    return this.products.filter(p => 
      p.name.toLowerCase().includes(searchTerm) ||
      p.description.toLowerCase().includes(searchTerm) ||
      p.category.toLowerCase().includes(searchTerm)
    );
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export default new ProductService();