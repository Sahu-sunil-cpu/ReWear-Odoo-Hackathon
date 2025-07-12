import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Share2, Star, MapPin, Calendar, Tag, Shirt, Package } from 'lucide-react';

export const ProductDetail: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  const product = {
    id: 1,
    name: 'Vintage Floral Summer Dress',
    description: 'Beautiful vintage floral dress perfect for summer occasions. Features a classic A-line silhouette with delicate button details and a flattering midi length. Made from breathable cotton blend fabric. Gently worn only a few times and in excellent condition.',
    images: [
      'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg',
      'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg',
      'https://images.pexels.com/photos/1895943/pexels-photo-1895943.jpeg'
    ],
    points: 120,
    size: 'Medium',
    condition: 'Like New',
    brand: 'Zara',
    category: 'Dresses',
    tags: ['Vintage', 'Summer', 'Floral', 'Midi'],
    owner: {
      name: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      rating: 4.9,
      swaps: 23,
      location: 'San Francisco, CA'
    },
    postedDate: '2 days ago'
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link to="/" className="flex items-center space-x-2 mr-8">
              <ArrowLeft className="w-6 h-6 text-gray-600" />
              <span className="text-gray-600">Back</span>
            </Link>
            <div className="flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search items..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 outline-none"
              />
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                />
                <button 
                  onClick={() => setIsFavorited(!isFavorited)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 transition-colors"
                >
                  <Heart className={`w-5 h-5 ${isFavorited ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
                </button>
              </div>
              <div className="flex space-x-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-green-500' : 'border-gray-200'
                    }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span key={tag} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>

            {/* Product Info Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                <Shirt className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-800">{product.size}</div>
                <div className="text-sm text-gray-600">Size</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="font-semibold text-gray-800">{product.condition}</div>
                <div className="text-sm text-gray-600">Condition</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                <Package className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-800">{product.points}</div>
                <div className="text-sm text-gray-600">Points</div>
              </div>
            </div>

            {/* Owner Info */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-800 mb-4">Listed by</h3>
              <div className="flex items-center space-x-4">
                <img 
                  src={product.owner.avatar} 
                  alt={product.owner.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">{product.owner.name}</div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    {product.owner.location}
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-sm">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    {product.owner.rating}
                  </div>
                  <div className="text-sm text-gray-600">{product.owner.swaps} swaps</div>
                </div>
              </div>
            </div>

            {/* Additional Details */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-800 mb-4">Details</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Brand</span>
                  <span className="font-medium">{product.brand}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Category</span>
                  <span className="font-medium">{product.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Posted</span>
                  <span className="font-medium">{product.postedDate}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-xl transition-colors"
              >
                Request Swap ({product.points} points)
              </motion.button>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center space-x-2 bg-white border border-gray-300 text-gray-700 font-medium py-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
                <button className="flex items-center justify-center space-x-2 bg-white border border-gray-300 text-gray-700 font-medium py-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <Tag className="w-5 h-5" />
                  <span>Make Offer</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};