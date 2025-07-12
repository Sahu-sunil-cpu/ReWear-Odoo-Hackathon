import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Users, Package, ShoppingBag, MoreVertical, Eye, Shield, Ban, Trash2, CheckCircle, AlertTriangle } from 'lucide-react';

export const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState('users');
  const [searchTerm, setSearchTerm] = useState('');

  const users = [
    {
      id: 1,
      name: 'Sarah Chen',
      email: 'sarah.chen@email.com',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      totalListings: 15,
      totalSwaps: 23,
      joinDate: 'March 2024',
      status: 'Active',
      rating: 4.9
    },
    {
      id: 2,
      name: 'Emily Rodriguez',
      email: 'emily.r@email.com',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      totalListings: 8,
      totalSwaps: 12,
      joinDate: 'January 2024',
      status: 'Active',
      rating: 4.7
    },
    {
      id: 3,
      name: 'Maria Garcia',
      email: 'maria.garcia@email.com',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg',
      totalListings: 22,
      totalSwaps: 34,
      joinDate: 'December 2023',
      status: 'Suspended',
      rating: 4.2
    },
    {
      id: 4,
      name: 'Jessica Kim',
      email: 'jessica.kim@email.com',
      avatar: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg',
      totalListings: 5,
      totalSwaps: 7,
      joinDate: 'April 2024',
      status: 'Active',
      rating: 5.0
    }
  ];

  const orders = [
    {
      id: 1,
      itemName: 'Vintage Floral Dress',
      buyer: 'Sarah Chen',
      seller: 'Emily Rodriguez',
      points: 120,
      status: 'Completed',
      date: '2024-12-05'
    },
    {
      id: 2,
      itemName: 'Designer Denim Jacket',
      buyer: 'Maria Garcia',
      seller: 'Jessica Kim',
      points: 180,
      status: 'In Progress',
      date: '2024-12-06'
    },
    {
      id: 3,
      itemName: 'Classic White Sneakers',
      buyer: 'Jessica Kim',
      seller: 'Sarah Chen',
      points: 90,
      status: 'Pending',
      date: '2024-12-07'
    }
  ];

  const listings = [
    {
      id: 1,
      name: 'Vintage Floral Dress',
      image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg',
      owner: 'Sarah Chen',
      points: 120,
      status: 'Active',
      views: 45,
      date: '2024-12-05'
    },
    {
      id: 2,
      name: 'Designer Denim Jacket',
      image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg',
      owner: 'Emily Rodriguez',
      points: 180,
      status: 'Flagged',
      views: 67,
      date: '2024-12-06'
    },
    {
      id: 3,
      name: 'Classic White Sneakers',
      image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg',
      owner: 'Maria Garcia',
      points: 90,
      status: 'Active',
      views: 23,
      date: '2024-12-07'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Suspended': return 'bg-red-100 text-red-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Flagged': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-800">ReWear Admin</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('users')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'users'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Manage Users</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'orders'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Package className="w-4 h-4" />
                <span>Manage Orders</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('listings')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'listings'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <ShoppingBag className="w-4 h-4" />
                <span>Manage Listings</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Users Tab */}
        {activeTab === 'users' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">User Management</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {users.map((user) => (
                <div key={user.id} className="flex items-center p-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors">
                  {/* Avatar */}
                  <img 
                    src={user.avatar} 
                    alt={user.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  
                  {/* User Details */}
                  <div className="flex-1 ml-4">
                    <div className="flex items-center space-x-3">
                      <h3 className="font-semibold text-gray-800">{user.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                        {user.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{user.email}</p>
                    <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                      <span>{user.totalListings} listings</span>
                      <span>{user.totalSwaps} swaps</span>
                      <span>★ {user.rating}</span>
                      <span>Joined {user.joinDate}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-1"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-1 ${
                        user.status === 'Active' 
                          ? 'bg-yellow-500 hover:bg-yellow-600 text-white' 
                          : 'bg-green-500 hover:bg-green-600 text-white'
                      }`}
                    >
                      {user.status === 'Active' ? (
                        <>
                          <Ban className="w-4 h-4" />
                          <span>Suspend</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          <span>Activate</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Management</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {orders.map((order) => (
                <div key={order.id} className="flex items-center p-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-gray-800">#{order.id} - {order.itemName}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>Buyer: {order.buyer} → Seller: {order.seller}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <span>{order.points} points</span>
                        <span>{order.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      View Details
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Update Status
                    </motion.button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Listings Tab */}
        {activeTab === 'listings' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Listing Management</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {listings.map((listing) => (
                <div key={listing.id} className="flex items-center p-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors">
                  <img 
                    src={listing.image} 
                    alt={listing.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1 ml-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-gray-800">{listing.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(listing.status)}`}>
                        {listing.status}
                      </span>
                      {listing.status === 'Flagged' && (
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>Owner: {listing.owner}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <span>{listing.points} points</span>
                        <span>{listing.views} views</span>
                        <span>Listed {listing.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      View
                    </motion.button>
                    {listing.status === 'Flagged' ? (
                      <>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                          Approve
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                          Remove
                        </motion.button>
                      </>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-1"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span>Remove</span>
                      </motion.button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};