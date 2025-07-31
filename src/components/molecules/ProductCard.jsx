import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";

const ProductCard = ({ product, onAddToCart, className }) => {
  const getStockVariant = (status) => {
    switch (status) {
      case "In Stock":
        return "success";
      case "Low Stock":
        return "warning";
      case "Out of Stock":
        return "danger";
      default:
        return "default";
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(price);
  };

  const handleAddToCart = () => {
    if (product.stockStatus !== "Out of Stock") {
      onAddToCart(product);
    }
  };

  return (
    <div className={cn(
      "bg-white rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 transform hover:scale-102 overflow-hidden group",
      className
    )}>
      <div className="relative overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <Badge variant={getStockVariant(product.stockStatus)}>
            {product.stockStatus}
          </Badge>
        </div>
        {product.proteinContent > 0 && (
          <div className="absolute top-3 left-3">
            <div className="bg-gradient-to-r from-brown-600 to-brown-700 text-white px-2 py-1 rounded-md text-sm font-semibold">
              {product.proteinContent}% Protein
            </div>
          </div>
        )}
      </div>

      <div className="p-4 space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-brown-800 text-lg leading-tight group-hover:text-forest-600 transition-colors">
            {product.name}
          </h3>
          <div className="text-right">
            <div className="text-2xl font-bold text-forest-600">
              {formatPrice(product.price)}
            </div>
            <div className="text-sm text-burlap-500">
              per {product.bagSize}
            </div>
          </div>
        </div>

        <p className="text-burlap-600 text-sm line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-burlap-600">
              <ApperIcon name="Package" size={16} className="mr-1" />
              {product.bagSize}
            </div>
            {product.stockStatus === "In Stock" && (
              <div className="flex items-center text-forest-600">
                <ApperIcon name="CheckCircle" size={16} className="mr-1" />
                {product.stockCount} available
              </div>
            )}
          </div>
        </div>

        <Button
          onClick={handleAddToCart}
          disabled={product.stockStatus === "Out of Stock"}
          className="w-full"
          icon="ShoppingCart"
        >
          {product.stockStatus === "Out of Stock" ? "Out of Stock" : "Add to Cart"}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;