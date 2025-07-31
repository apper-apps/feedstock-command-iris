import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";

const Error = ({ message = "Something went wrong", onRetry, className }) => {
  return (
    <div className={cn("flex flex-col items-center justify-center p-12 text-center", className)}>
      <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mb-4">
        <ApperIcon name="AlertTriangle" size={32} className="text-red-600" />
      </div>
      <h3 className="text-xl font-semibold text-brown-800 mb-2">Oops! Something went wrong</h3>
      <p className="text-burlap-600 mb-6 max-w-md">
        {message}. We're having trouble loading the feed products right now.
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-forest-500 to-forest-600 text-white font-medium rounded-lg hover:from-forest-600 hover:to-forest-700 transform hover:scale-105 transition-all duration-200 shadow-soft"
        >
          <ApperIcon name="RefreshCw" size={18} className="mr-2" />
          Try Again
        </button>
      )}
    </div>
  );
};

export default Error;