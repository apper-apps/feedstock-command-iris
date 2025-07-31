import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";

const Empty = ({ 
  title = "No products found", 
  description = "We couldn't find any feed products matching your criteria.",
  actionText = "View All Products",
  onAction,
  className 
}) => {
  return (
    <div className={cn("flex flex-col items-center justify-center p-12 text-center", className)}>
      <div className="w-20 h-20 bg-gradient-to-br from-burlap-100 to-burlap-200 rounded-full flex items-center justify-center mb-6">
        <ApperIcon name="Package" size={40} className="text-burlap-500" />
      </div>
      <h3 className="text-2xl font-serif text-brown-800 mb-3">{title}</h3>
      <p className="text-burlap-600 mb-8 max-w-md leading-relaxed">
        {description}
      </p>
      {onAction && (
        <button
          onClick={onAction}
          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-forest-500 to-forest-600 text-white font-medium rounded-lg hover:from-forest-600 hover:to-forest-700 transform hover:scale-105 transition-all duration-200 shadow-soft"
        >
          <ApperIcon name="ArrowLeft" size={18} className="mr-2" />
          {actionText}
        </button>
      )}
    </div>
  );
};

export default Empty;