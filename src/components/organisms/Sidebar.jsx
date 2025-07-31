import { cn } from "@/utils/cn";
import CategoryFilter from "@/components/molecules/CategoryFilter";
import Loading from "@/components/ui/Loading";

const Sidebar = ({ 
  categories, 
  activeCategory, 
  onCategoryChange, 
  loading,
  isMobileOpen,
  onClose,
  className 
}) => {
  const sidebarContent = (
    <div className="space-y-6">
      <div className="flex items-center justify-between lg:hidden">
        <h2 className="text-lg font-serif font-semibold text-brown-800">
          Filter Products
        </h2>
        <button
          onClick={onClose}
          className="p-2 text-burlap-600 hover:text-brown-800 transition-colors"
        >
          ✕
        </button>
      </div>

      {loading ? (
        <div className="space-y-3">
          <div className="h-4 bg-gradient-to-r from-burlap-100 to-burlap-200 rounded animate-pulse"></div>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-10 bg-gradient-to-r from-burlap-50 to-burlap-100 rounded animate-pulse"></div>
          ))}
        </div>
      ) : (
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={onCategoryChange}
        />
      )}

      {/* Store Info */}
      <div className="bg-gradient-to-br from-forest-50 to-forest-100 p-4 rounded-lg border border-forest-200">
        <h4 className="font-semibold text-forest-800 mb-2">Need Help?</h4>
        <p className="text-sm text-forest-700 mb-3">
          Our feed specialists are here to help you choose the right nutrition for your cattle.
        </p>
        <div className="text-sm text-forest-600 space-y-1">
          <div>📞 (555) 123-FEED</div>
          <div>🕒 Mon-Fri: 7AM-6PM</div>
          <div>🕒 Sat: 8AM-4PM</div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}

      {/* Desktop Sidebar */}
      <aside className={cn(
        "hidden lg:block w-64 bg-white rounded-lg shadow-soft p-6 h-fit sticky top-24",
        className
      )}>
        {sidebarContent}
      </aside>

      {/* Mobile Sidebar */}
      <aside className={cn(
        "lg:hidden fixed top-0 left-0 w-80 h-full bg-white shadow-strong z-50 p-6 transform transition-transform duration-300",
        isMobileOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {sidebarContent}
      </aside>
    </>
  );
};

export default Sidebar;