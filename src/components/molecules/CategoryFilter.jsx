import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";

const CategoryFilter = ({ categories, activeCategory, onCategoryChange, className }) => {
  const getCategoryIcon = (categoryName) => {
    switch (categoryName) {
      case "All Products":
        return "Grid3X3";
      case "Dairy Feed":
        return "Milk";
      case "Beef Feed":
        return "Beef";
      case "Calf Feed":
        return "Baby";
      case "Supplements":
        return "Pill";
      default:
        return "Package";
    }
  };

  return (
    <div className={cn("space-y-2", className)}>
      <h3 className="font-serif text-lg font-semibold text-brown-800 mb-4">
        Categories
      </h3>
      
      <div className="space-y-1">
        {categories.map((category) => (
          <button
            key={category.Id}
            onClick={() => onCategoryChange(category.name)}
            className={cn(
              "w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-all duration-200 group",
              activeCategory === category.name
                ? "bg-gradient-to-r from-forest-100 to-forest-200 text-forest-800 border border-forest-300"
                : "text-burlap-700 hover:bg-burlap-50 hover:text-brown-800"
            )}
          >
            <div className="flex items-center">
              <ApperIcon 
                name={getCategoryIcon(category.name)} 
                size={18} 
                className={cn(
                  "mr-3 transition-colors",
                  activeCategory === category.name
                    ? "text-forest-600"
                    : "text-burlap-500 group-hover:text-brown-600"
                )}
              />
              <span className="font-medium">{category.name}</span>
            </div>
            <span className={cn(
              "px-2 py-0.5 rounded-full text-xs font-medium",
              activeCategory === category.name
                ? "bg-forest-200 text-forest-800"
                : "bg-burlap-100 text-burlap-600 group-hover:bg-burlap-200"
            )}>
              {category.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;