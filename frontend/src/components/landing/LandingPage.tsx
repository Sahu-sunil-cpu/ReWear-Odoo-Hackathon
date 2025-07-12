import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, ShoppingBag, Heart, Star, ArrowRight, Recycle, Users, Package, Leaf, Award, TrendingUp } from 'lucide-react';
import { useEffect } from 'react';
import axios from 'axios';
 import { BACKEND_URL } from '../../config';

export const LandingPage= () => {

const navigate = useNavigate()

const getListings = async () => {
const response = await axios.get(`${BACKEND_URL}`);

}

const clickHandler = (e: any) => {
navigate(`product/${e}`)
}

useEffect(() => {

}, [])

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

  const benefits = [
    {
      icon: Recycle,
      title: 'Sustainable Fashion',
      description: 'Reduce textile waste by giving clothes a second life through our community-driven platform.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Connect with like-minded fashion lovers who care about sustainability and style.'
    },
    {
      icon: Award,
      title: 'Earn Rewards',
      description: 'Get points for every item you list and use them to swap for pieces you love.'
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
              <Link to="/" className="text-green-600 font-medium transition-colors">Home</Link>
              <Link to="/home" className="text-gray-700 hover:text-green-600 transition-colors">Browse</Link>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-gray-700 hover:text-green-600 transition-colors flex items-center space-x-1">
                <User className="w-5 h-5" />
                <span className="hidden sm:inline">Login</span>
              </Link>
              <Link to="/register" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 min-h-[600px] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Hero Content */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                >
                  Give Clothes a<br />
                  <span className="text-green-200">Second Life</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed"
                >
                  Join the sustainable fashion revolution. Swap, share, and discover unique pieces while reducing textile waste.
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link to="/register">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Start Swapping</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                  <Link to="/home">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-300"
                    >
                      Browse Items
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Hero Image */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative"
              >
                <div className="relative z-10">
                  <img 
                    src="https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg" 
                    alt="Sustainable Fashion"
                    className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Leaf className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">15,000+</div>
                        <div className="text-sm text-gray-600">Items Reused</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 w-32 h-32 bg-green-400 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute bottom-4 right-4 w-24 h-24 bg-green-300 rounded-full opacity-30 blur-lg"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose ReWear?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a community that's making fashion more sustainable, one swap at a time.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="text-center p-8 rounded-2xl bg-stone-50 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16"
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
                <div className="h-48 bg-gray-200 overflow-hidden" >
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.count}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Items</h2>
            <p className="text-xl text-gray-600">Discover unique pieces from our community</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group border border-gray-100"
              >
                <div className="h-64 bg-gray-200 overflow-hidden relative" onClick={() => clickHandler(product.id)}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50 transition-colors">
                    <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                  </button>
                  <div className="absolute bottom-4 left-4 bg-white rounded-lg px-3 py-1">
                    <span className="text-sm font-medium text-gray-800">{product.condition}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-green-600 font-bold text-lg">{product.points} points</span>
                    <span className="text-sm text-gray-600">Size {product.size}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                    <Link to="/home" className="text-green-600 hover:text-green-700 text-sm font-medium">
                      View Details →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/home">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors inline-flex items-center space-x-2"
              >
                <span>View All Items</span>
                <TrendingUp className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Collective Impact</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Together, we're making a real difference in reducing fashion waste and promoting sustainability.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-green-400 mb-2">15,000+</div>
              <div className="text-gray-300">Garments reused</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-green-400 mb-2">8,500+</div>
              <div className="text-gray-300">Active swappers</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-green-400 mb-2">2.5M</div>
              <div className="text-gray-300">Pounds of waste avoided</div>
            </motion.div>
          </div>
        </div>
      </section>

    

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">ReWear</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Give clothes a second life and join the sustainable fashion movement. Together, we're reducing waste and promoting conscious consumption.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
                <li><Link to="/home" className="hover:text-white transition-colors">Browse Items</Link></li>
                <li><Link to="/add-product" className="hover:text-white transition-colors">List Items</Link></li>
                <li><Link to="/safety" className="hover:text-white transition-colors">Safety Guidelines</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; 2025 ReWear. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};