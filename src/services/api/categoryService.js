import categoriesData from "@/services/mockData/categories.json";

class CategoryService {
  constructor() {
    this.categories = [...categoriesData];
  }

  async getAll() {
    await this.delay(200);
    return [...this.categories];
  }

  async getById(id) {
    await this.delay(150);
    const category = this.categories.find(c => c.Id === parseInt(id));
    return category ? { ...category } : null;
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export default new CategoryService();