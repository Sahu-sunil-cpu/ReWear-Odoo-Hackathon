import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, User, ShoppingBag, Heart, Star, ArrowRight } from 'lucide-react';

export const LandingPage: React.FC = () => {
  const categories = [
    { name: 'Dresses', image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg', count: '2.5k items' },
    { name: 'Tops', image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg', count: '3.2k items' },
    { name: 'Bottoms', image: 'https://images.pexels.com/photos/1895943/pexels-photo-1895943.jpeg', count: '1.8k items' },
    { name: 'Outerwear', image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg', count: '950 items' },
    { name: 'Shoes', image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg', count: '1.3k items' },
    { name: 'Accessories', image: 'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg', count: '800 items' }
  ];

  const featuredProducts = [
    { 
      id: 1, 
      name: 'Vintage Floral Dress', 
      image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg',
      points: 120,
      condition: 'Like New',
      size: 'M'
    },
    { 
      id: 2, 
      name: 'Designer Denim Jacket', 
      image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg',
      points: 180,
      condition: 'Good',
      size: 'L'
    },
    { 
      id: 3, 
      name: 'Classic White Sneakers', 
      image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg',
      points: 90,
      condition: 'Very Good',
      size: '8'
    },
    { 
      id: 4, 
      name: 'Bohemian Maxi Dress', 
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg',
      points: 140,
      condition: 'Like New',
      size: 'S'
    },
    { 
      id: 5, 
      name: 'Leather Ankle Boots', 
      image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg',
      points: 200,
      condition: 'Good',
      size: '7'
    },
    { 
      id: 6, 
      name: 'Silk Scarf Collection', 
      image: 'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg',
      points: 60,
      condition: 'Excellent',
      size: 'One Size'
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">ReWear</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">Home</Link>
              <Link to="/browse" className="text-gray-700 hover:text-green-600 transition-colors">Browse</Link>
              <Link to="/how-it-works" className="text-gray-700 hover:text-green-600 transition-colors">How It Works</Link>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-gray-700 hover:text-green-600 transition-colors">
                <User className="w-6 h-6" />
              </Link>
              <Link to="/register" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for clothes, brands, or styles..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative">
        <div className="h-96 bg-gradient-to-r from-green-600 to-green-700 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Give Clothes a Second Life</h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">Swap, share, and sustain with ReWear's community marketplace</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors"
              >
                Start Swapping
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors"
              >
                Browse Items
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Shop by Category
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.count}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Featured Items
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
              >
                <div className="h-64 bg-gray-200 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <button className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50 transition-colors">
                    <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-green-600 font-bold">{product.points} points</span>
                    <span className="text-sm text-gray-600">Size {product.size}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">{product.condition}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">4.8</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Our Impact Together</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">15,000+</div>
                <div className="text-gray-300">Garments reused</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">8,500+</div>
                <div className="text-gray-300">Active swappers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">2.5M</div>
                <div className="text-gray-300">Pounds of textile waste avoided</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Sustainable Journey?</h2>
            <p className="text-xl text-green-100 mb-8">Join thousands of fashion lovers making a positive impact</p>
            <Link to="/register">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors inline-flex items-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">ReWear</span>
              </div>
              <p className="text-gray-400">Give clothes a second life and join the sustainable fashion movement.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
                <li><Link to="/browse" className="hover:text-white transition-colors">Browse Items</Link></li>
                <li><Link to="/sell" className="hover:text-white transition-colors">List Items</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/safety" className="hover:text-white transition-colors">Safety Guidelines</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/press" className="hover:text-white transition-colors">Press</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ReWear. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};