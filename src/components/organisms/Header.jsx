import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";
import SearchBar from "@/components/molecules/SearchBar";

const Header = ({ onSearch, cartItemCount, onCartToggle, className }) => {
  return (
    <header className={cn(
      "sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-burlap-200 shadow-soft",
      className
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-forest-500 to-forest-600 rounded-lg flex items-center justify-center">
                <ApperIcon name="Wheat" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-serif font-bold bg-gradient-to-r from-brown-800 to-brown-600 bg-clip-text text-transparent">
                  FeedStock Pro
                </h1>
                <p className="text-xs text-burlap-600 -mt-1">Quality Cattle Feed</p>
              </div>
            </div>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <SearchBar 
              onSearch={onSearch}
              placeholder="Search for feed products..."
              className="w-full"
            />
          </div>

          {/* Cart Button */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search Button */}
            <button className="md:hidden p-2 text-burlap-600 hover:text-brown-800 transition-colors">
              <ApperIcon name="Search" size={20} />
            </button>

            {/* Cart Button */}
            <button
              onClick={onCartToggle}
              className="relative p-2 text-burlap-600 hover:text-brown-800 transition-colors group"
            >
              <div className="relative">
                <ApperIcon name="ShoppingCart" size={24} className="group-hover:scale-110 transition-transform" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-forest-500 to-forest-600 text-white text-xs font-semibold rounded-full h-6 w-6 flex items-center justify-center animate-pulse">
                    {cartItemCount > 99 ? "99+" : cartItemCount}
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <SearchBar 
            onSearch={onSearch}
            placeholder="Search feed products..."
            className="w-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;