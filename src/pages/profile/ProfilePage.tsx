import React from 'react';

function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <p className="mt-1 text-gray-900">John Doe</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <p className="mt-1 text-gray-900">john.doe@example.com</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <p className="mt-1 text-gray-900">+1 (555) 123-4567</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">License Number</label>
                <p className="mt-1 text-gray-900">DRL-12345</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Certifications</h2>
            <div className="space-y-2">
              <div className="p-4 border rounded-lg">
                <p className="font-medium">Commercial Drone License</p>
                <p className="text-sm text-gray-600">Expires: December 31, 2024</p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-medium">Night Operations Certificate</p>
                <p className="text-sm text-gray-600">Issued: January 15, 2023</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Flight Statistics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Total Flights</p>
                <p className="text-2xl font-bold">156</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Flight Hours</p>
                <p className="text-2xl font-bold">243</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Success Rate</p>
                <p className="text-2xl font-bold">98%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;