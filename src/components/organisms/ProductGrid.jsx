import { cn } from "@/utils/cn";
import ProductCard from "@/components/molecules/ProductCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";

const ProductGrid = ({ 
  products, 
  loading, 
  error, 
  onAddToCart, 
  onRetry, 
  onShowAll,
  className 
}) => {
  if (loading) {
    return <Loading variant="grid" className={className} />;
  }

  if (error) {
    return (
      <Error 
        message={error}
        onRetry={onRetry}
        className={className}
      />
    );
  }

  if (!products || products.length === 0) {
    return (
      <Empty
        title="No feed products found"
        description="We couldn't find any products matching your current filters. Try adjusting your search or browse all available products."
        actionText="Show All Products"
        onAction={onShowAll}
        className={className}
      />
    );
  }

  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
      className
    )}>
      {products.map((product) => (
        <ProductCard
          key={product.Id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductGrid;