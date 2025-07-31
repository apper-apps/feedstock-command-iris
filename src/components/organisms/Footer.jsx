import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";

const Footer = ({ className }) => {
  return (
    <footer className={cn(
      "bg-gradient-to-r from-brown-800 to-brown-900 text-white",
      className
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-forest-500 to-forest-600 rounded-lg flex items-center justify-center">
                <ApperIcon name="Wheat" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold">FeedStock Pro</h3>
                <p className="text-brown-300 text-sm">Quality Cattle Feed</p>
              </div>
            </div>
            <p className="text-brown-200 mb-4">
              Providing premium cattle feed solutions for ranchers and farmers across the region. Quality nutrition for healthy livestock.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brown-300 hover:text-white transition-colors">
                <ApperIcon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-brown-300 hover:text-white transition-colors">
                <ApperIcon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-brown-300 hover:text-white transition-colors">
                <ApperIcon name="Instagram" size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-brown-200">
              <div className="flex items-center">
                <ApperIcon name="MapPin" size={18} className="mr-3 text-brown-300" />
                <div>
                  <div>123 Ranch Road</div>
                  <div>Cattle Valley, TX 75001</div>
                </div>
              </div>
              <div className="flex items-center">
                <ApperIcon name="Phone" size={18} className="mr-3 text-brown-300" />
                <div>(555) 123-FEED</div>
              </div>
              <div className="flex items-center">
                <ApperIcon name="Mail" size={18} className="mr-3 text-brown-300" />
                <div>info@feedstockpro.com</div>
              </div>
            </div>
          </div>

          {/* Store Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Store Hours</h4>
            <div className="space-y-2 text-brown-200">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>7:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>8:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-brown-700 rounded-lg">
              <h5 className="font-semibold text-forest-300 mb-2">Delivery Available</h5>
              <p className="text-sm text-brown-200">
                Free delivery on orders over $500 within 50 miles. Same-day delivery available for urgent orders.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-brown-700 mt-8 pt-8 text-center text-brown-300">
          <p>&copy; 2024 FeedStock Pro. All rights reserved. | Quality feed for healthy cattle.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;