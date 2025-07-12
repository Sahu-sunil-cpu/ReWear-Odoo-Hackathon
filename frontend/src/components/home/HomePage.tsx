import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, User, ShoppingBag, Menu, Star, Heart, ArrowRight, Recycle, Users, Package } from 'lucide-react';
import axios from 'axios';
import { BACKEND_URL } from '../../config';

export const  HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);


  const getListings = async () => {
    const response = await axios.get(`${BACKEND_URL}`);
    
    }
    useEffect(() => {
    
    }, [])
  const heroSlides = [
    {
      image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg',
      title: 'Give Clothes a Second Life',
      subtitle: 'Join the sustainable fashion revolution'
    },
    {
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg',
      title: 'Swap, Share, Sustain',
      subtitle: 'Discover unique pieces from our community'
    },
    {
      image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg',
      title: 'Fashion Forward, Earth Friendly',
      subtitle: 'Reduce waste while refreshing your wardrobe'
    }
  ];

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
      size: 'M',
      rating: 4.8
    },
    { 
      id: 2, 
      name: 'Designer Denim Jacket', 
      image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg',
      points: 180,
      condition: 'Good',
      size: 'L',
      rating: 4.9
    },
    { 
      id: 3, 
      name: 'Classic White Sneakers', 
      image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg',
      points: 90,
      condition: 'Very Good',
      size: '8',
      rating: 4.7
    },
    { 
      id: 4, 
      name: 'Bohemian Maxi Dress', 
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg',
      points: 140,
      condition: 'Like New',
      size: 'S',
      rating: 5.0
    },
    { 
      id: 5, 
      name: 'Leather Ankle Boots', 
      image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg',
      points: 200,
      condition: 'Good',
      size: '7',
      rating: 4.6
    },
    { 
      id: 6, 
      name: 'Silk Scarf Collection', 
      image: 'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg',
      points: 60,
      condition: 'Excellent',
      size: 'One Size',
      rating: 4.9
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9F7F3' }}>
      {/* Light Section - Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#2D6A4F' }}>
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold" style={{ color: '#1C1C1C' }}>ReWear</span>
            </Link>

            {/* Navigation Links */}
            {/* <div className="hidden md:flex items-center space-x-8">
              <Link to="/home" className="font-medium transition-colors" style={{ color: '#2D6A4F' }}>Home</Link>
              <Link to="/browse" className="text-gray-700 hover:text-gray-900 transition-colors">Browse</Link>
              <Link to="/how-it-works" className="text-gray-700 hover:text-gray-900 transition-colors">How It Works</Link>
            </div> */}

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-gray-700 hover:text-gray-900 transition-colors">
                <User className="w-6 h-6" />
              </Link>
              <Link to="/register" className="text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors" style={{ backgroundColor: '#2D6A4F' }}>
                Sign Up
              </Link>
              <button className="md:hidden">
                <Menu className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Centered Search Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for clothes, brands, or styles..."
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:border-transparent transition-all duration-200 outline-none text-lg"
              style={{ focusRingColor: '#2D6A4F' }}
            />
          </div>
        </div>
      </div>

      {/* Hero Carousel */}
      <section className="relative h-96 overflow-hidden">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <div 
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                <div>
                  <motion.h1 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl md:text-6xl font-bold mb-4"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl md:text-2xl"
                  >
                    {slide.subtitle}
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12"
            style={{ color: '#1C1C1C' }}
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
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1" style={{ color: '#1C1C1C' }}>{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.count}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Listings Grid */}
      <section className="py-16" style={{ backgroundColor: '#E9D8A6' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12"
            style={{ color: '#1C1C1C' }}
          >
            Featured Items
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
              >
                <div className="h-64 bg-gray-200 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50 transition-colors">
                    <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2" style={{ color: '#1C1C1C' }}>{product.name}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-lg" style={{ color: '#2D6A4F' }}>{product.points} points</span>
                    <span className="text-sm text-gray-600">Size {product.size}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm px-3 py-1 rounded-full" style={{ backgroundColor: '#2D6A4F', color: 'white' }}>
                      {product.condition}
                    </span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      {/* Featured Items Carousel - Dark Section */}
      <section className="py-16" style={{ backgroundColor: '#111827' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12"
            style={{ color: '#F1F5F9' }}
          >
            TRENDING NOW
          </motion.h2>
          <div className="flex space-x-6 overflow-x-auto pb-4">
            {featuredProducts.slice(0, 4).map((product, index) => (
              <motion.div
                key={`dark-${product.id}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(149, 194, 157, 0.2)' }}
                className="flex-shrink-0 w-72 rounded-2xl overflow-hidden cursor-pointer"
                style={{ backgroundColor: '#1F2937' }}
              >
                <div className="h-48 bg-gray-700 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2" style={{ color: '#F1F5F9' }}>{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="font-bold" style={{ color: '#95C29D' }}>{product.points} PTS</span>
                    <span className="text-sm" style={{ color: '#F1F5F9', opacity: 0.7 }}>{product.condition}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16" style={{ backgroundColor: '#111827' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-12" style={{ color: '#F1F5F9' }}>OUR COLLECTIVE IMPACT</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#4B6043' }}>
                  <Recycle className="w-8 h-8" style={{ color: '#F1F5F9' }} />
                </div>
                <div className="text-4xl font-bold mb-2" style={{ color: '#95C29D' }}>15,000+</div>
                <div style={{ color: '#F1F5F9', opacity: 0.8 }}>Garments reused</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#4B6043' }}>
                  <Users className="w-8 h-8" style={{ color: '#F1F5F9' }} />
                </div>
                <div className="text-4xl font-bold mb-2" style={{ color: '#95C29D' }}>8,500+</div>
                <div style={{ color: '#F1F5F9', opacity: 0.8 }}>Active swappers</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#4B6043' }}>
                  <Package className="w-8 h-8" style={{ color: '#F1F5F9' }} />
                </div>
                <div className="text-4xl font-bold mb-2" style={{ color: '#95C29D' }}>2.5M</div>
                <div style={{ color: '#F1F5F9', opacity: 0.8 }}>Pounds of waste avoided</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ backgroundColor: '#1C1C1C' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#2D6A4F' }}>
                  <ShoppingBag className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold" style={{ color: '#F1F5F9' }}>ReWear</span>
              </div>
              <p style={{ color: '#F1F5F9', opacity: 0.7 }}>Give clothes a second life and join the sustainable fashion movement.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4" style={{ color: '#F1F5F9' }}>Platform</h3>
              <ul className="space-y-2" style={{ color: '#F1F5F9', opacity: 0.7 }}>
                <li><Link to="/how-it-works" className="hover:opacity-100 transition-opacity">How It Works</Link></li>
                <li><Link to="/browse" className="hover:opacity-100 transition-opacity">Browse Items</Link></li>
                <li><Link to="/add-product" className="hover:opacity-100 transition-opacity">List Items</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4" style={{ color: '#F1F5F9' }}>Support</h3>
              <ul className="space-y-2" style={{ color: '#F1F5F9', opacity: 0.7 }}>
                <li><Link to="/help" className="hover:opacity-100 transition-opacity">Help Center</Link></li>
                <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact Us</Link></li>
                <li><Link to="/safety" className="hover:opacity-100 transition-opacity">Safety Guidelines</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4" style={{ color: '#F1F5F9' }}>Company</h3>
              <ul className="space-y-2" style={{ color: '#F1F5F9', opacity: 0.7 }}>
                <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
                <li><Link to="/careers" className="hover:opacity-100 transition-opacity">Careers</Link></li>
                <li><Link to="/press" className="hover:opacity-100 transition-opacity">Press</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center" style={{ borderColor: '#374151', color: '#F1F5F9', opacity: 0.7 }}>
            <p>&copy; 2025 ReWear. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};