import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const CartDrawer = ({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem, 
  totalPrice,
  className 
}) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(price);
  };

  const cartContent = (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-burlap-200">
        <h2 className="text-xl font-serif font-semibold text-brown-800">
          Shopping Cart
        </h2>
        <button
          onClick={onClose}
          className="p-2 text-burlap-600 hover:text-brown-800 transition-colors rounded-lg hover:bg-burlap-50"
        >
          <ApperIcon name="X" size={20} />
        </button>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto p-6">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-burlap-100 to-burlap-200 rounded-full flex items-center justify-center mb-4">
              <ApperIcon name="ShoppingCart" size={32} className="text-burlap-500" />
            </div>
            <h3 className="text-lg font-semibold text-brown-800 mb-2">Your cart is empty</h3>
            <p className="text-burlap-600 mb-6">Add some feed products to get started</p>
            <Button onClick={onClose} variant="outline">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.productId} className="bg-cream-50 rounded-lg p-4 border border-burlap-200">
                <div className="flex items-start space-x-4">
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-brown-800 truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-sm text-burlap-600 mb-2">
                      {item.product.bagSize} • {item.product.proteinContent}% Protein
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-burlap-300 rounded-lg">
                        <button
                          onClick={() => onUpdateQuantity(item.productId, item.quantity - 1)}
                          className="p-1 text-burlap-600 hover:text-brown-800 hover:bg-burlap-100 rounded-l-lg transition-colors"
                        >
                          <ApperIcon name="Minus" size={16} />
                        </button>
                        <span className="px-3 py-1 text-sm font-medium text-brown-800 bg-white border-x border-burlap-300">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.productId, item.quantity + 1)}
                          className="p-1 text-burlap-600 hover:text-brown-800 hover:bg-burlap-100 rounded-r-lg transition-colors"
                        >
                          <ApperIcon name="Plus" size={16} />
                        </button>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-forest-600">
                          {formatPrice(item.subtotal)}
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.productId)}
                          className="text-xs text-red-600 hover:text-red-800 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      {cartItems.length > 0 && (
        <div className="border-t border-burlap-200 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-brown-800">Total:</span>
            <span className="text-2xl font-bold text-forest-600">
              {formatPrice(totalPrice)}
            </span>
          </div>
          <div className="space-y-2">
            <Button className="w-full" size="lg">
              <ApperIcon name="CreditCard" size={20} className="mr-2" />
              Checkout
            </Button>
            <Button 
              variant="outline" 
              className="w-full" 
              onClick={onClose}
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div className={cn(
        "fixed top-0 right-0 w-full sm:w-96 h-full bg-white shadow-strong z-50 transform transition-transform duration-300",
        isOpen ? "translate-x-0" : "translate-x-full",
        className
      )}>
        {cartContent}
      </div>
    </>
  );
};

export default CartDrawer;