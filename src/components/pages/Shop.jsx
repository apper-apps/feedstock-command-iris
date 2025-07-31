import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useCart } from "@/hooks/useCart";
import productService from "@/services/api/productService";
import categoryService from "@/services/api/categoryService";
import Header from "@/components/organisms/Header";
import Sidebar from "@/components/organisms/Sidebar";
import ProductGrid from "@/components/organisms/ProductGrid";
import CartDrawer from "@/components/organisms/CartDrawer";
import Footer from "@/components/organisms/Footer";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  
  const {
    cartItems,
    isOpen: isCartOpen,
    addToCart,
    updateQuantity,
    removeFromCart,
    getTotalItems,
    getTotalPrice,
    toggleCart,
    closeCart
  } = useCart();

  const loadData = async () => {
    try {
      setLoading(true);
      setError("");
      
      const [productsData, categoriesData] = await Promise.all([
        productService.getAll(),
        categoryService.getAll()
      ]);
      
      setProducts(productsData);
      setCategories(categoriesData);
    } catch (err) {
      setError("Failed to load products. Please try again.");
      console.error("Error loading data:", err);
    } finally {
      setLoading(false);
    }
  };

  const loadProductsByCategory = async (category) => {
    try {
      setLoading(true);
      setError("");
      
      const productsData = await productService.getByCategory(category);
      setProducts(productsData);
    } catch (err) {
      setError("Failed to load products. Please try again.");
      console.error("Error loading products:", err);
    } finally {
      setLoading(false);
    }
  };

  const searchProducts = async (query) => {
    try {
      setLoading(true);
      setError("");
      
      const productsData = await productService.searchProducts(query);
      setProducts(productsData);
    } catch (err) {
      setError("Failed to search products. Please try again.");
      console.error("Error searching products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSearchQuery("");
    setIsMobileSidebarOpen(false);
    loadProductsByCategory(category);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      setActiveCategory("");
      searchProducts(query);
    } else {
      setActiveCategory("All Products");
      loadProductsByCategory("All Products");
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product, 1);
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const handleShowAll = () => {
    setActiveCategory("All Products");
    setSearchQuery("");
    loadProductsByCategory("All Products");
  };

  const handleCartToggle = () => {
    toggleCart();
    setIsMobileSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-cream-50">
      <Header 
        onSearch={handleSearch}
        cartItemCount={getTotalItems()}
        onCartToggle={handleCartToggle}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <Sidebar
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            loading={loading}
            isMobileOpen={isMobileSidebarOpen}
            onClose={() => setIsMobileSidebarOpen(false)}
          />

          <div className="flex-1">
            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-6">
              <button
                onClick={() => setIsMobileSidebarOpen(true)}
                className="inline-flex items-center px-4 py-2 bg-white border border-burlap-300 rounded-lg text-burlap-700 hover:text-brown-800 hover:bg-burlap-50 transition-colors shadow-soft"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" />
                </svg>
                Filter Products
              </button>
            </div>

            {/* Results Header */}
            {!loading && (
              <div className="mb-6">
                <h2 className="text-2xl font-serif font-bold text-brown-800">
                  {searchQuery ? `Search Results for "${searchQuery}"` : activeCategory}
                </h2>
                <p className="text-burlap-600 mt-1">
                  {products.length} product{products.length !== 1 ? "s" : ""} found
                </p>
              </div>
            )}

            <ProductGrid
              products={products}
              loading={loading}
              error={error}
              onAddToCart={handleAddToCart}
              onRetry={loadData}
              onShowAll={handleShowAll}
            />
          </div>
        </div>
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={closeCart}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        totalPrice={getTotalPrice()}
      />
    </div>
  );
};

export default Shop;