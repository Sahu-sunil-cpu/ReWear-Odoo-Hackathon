import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, ShoppingBag, Plus, Star, Award, Recycle, TrendingUp, Package, Heart } from 'lucide-react';

export const UserDashboard: React.FC = () => {
  const userStats = {
    name: 'Sarah Chen',
    email: 'sarah.chen@email.com',
    points: 1250,
    swapsCompleted: 23,
    itemsListed: 15,
    joinDate: 'March 2024'
  };

  const myListings = [
    { 
      id: 1, 
      name: 'Vintage Floral Dress', 
      image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg',
      points: 120,
      status: 'Active'
    },
    { 
      id: 2, 
      name: 'Designer Denim Jacket', 
      image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg',
      points: 180,
      status: 'Active'
    },
    { 
      id: 3, 
      name: 'Classic White Sneakers', 
      image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg',
      points: 90,
      status: 'Swapped'
    },
    { 
      id: 4, 
      name: 'Silk Blouse', 
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg',
      points: 100,
      status: 'Active'
    }
  ];

  const mySwaps = [
    { 
      id: 1, 
      name: 'Bohemian Maxi Dress', 
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg',
      points: 140,
      swappedWith: 'Emily Rodriguez',
      date: '2 days ago'
    },
    { 
      id: 2, 
      name: 'Leather Ankle Boots', 
      image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg',
      points: 200,
      swappedWith: 'Maria Garcia',
      date: '1 week ago'
    },
    { 
      id: 3, 
      name: 'Cashmere Sweater', 
      image: 'https://images.pexels.com/photos/1895943/pexels-photo-1895943.jpeg',
      points: 160,
      swappedWith: 'Jessica Kim',
      date: '2 weeks ago'
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">ReWear</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/add-product" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>List Item</span>
              </Link>
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* User Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Avatar */}
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-green-600" />
            </div>

            {/* User Details */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl font-bold text-gray-800 mb-1">{userStats.name}</h1>
              <p className="text-gray-600 mb-4">{userStats.email}</p>
              <p className="text-sm text-gray-500">Member since {userStats.joinDate}</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-xl font-bold text-gray-800">{userStats.points}</div>
                <div className="text-sm text-gray-600">Points</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Recycle className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-xl font-bold text-gray-800">{userStats.swapsCompleted}</div>
                <div className="text-sm text-gray-600">Swaps</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Package className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-xl font-bold text-gray-800">{userStats.itemsListed}</div>
                <div className="text-sm text-gray-600">Listed</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* My Listings Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">My Listings</h2>
            <Link to="/add-product" className="text-green-600 hover:text-green-700 font-medium flex items-center space-x-1">
              <Plus className="w-4 h-4" />
              <span>Add New</span>
            </Link>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {myListings.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-64 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-40 bg-gray-200 overflow-hidden relative">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  <span className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${
                    item.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2 truncate">{item.name}</h3>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-green-600 font-bold">{item.points} pts</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* My Swaps Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Swaps</h2>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {mySwaps.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-64 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-40 bg-gray-200 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2 truncate">{item.name}</h3>
                  <div className="text-sm text-gray-600 mb-1">Swapped with {item.swappedWith}</div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-green-600 font-bold">{item.points} pts</span>
                    <span className="text-gray-500">{item.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};