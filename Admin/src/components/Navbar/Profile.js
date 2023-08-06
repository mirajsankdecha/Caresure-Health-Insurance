import React from "react";

const Profile = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-10">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-semibold mb-4">Profile</h1>
          <div className="flex items-center mb-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="h-20 w-20 rounded-full object-cover"
            />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">John Doe</h2>
              <p className="text-gray-600">john.doe@example.com</p>
            </div>
          </div>
          <div className="border-t pt-4">
            <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-600">First Name</label>
                <p>John</p>
              </div>
              <div>
                <label className="text-gray-600">Last Name</label>
                <p>Doe</p>
              </div>
              <div>
                <label className="text-gray-600">Date of Birth</label>
                <p>January 15, 1985</p>
              </div>
              <div>
                <label className="text-gray-600">Gender</label>
                <p>Male</p>
              </div>
              {/* Add more fields */}
            </div>
          </div>
          <div className="border-t pt-4 mt-4">
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-600">Email</label>
                <p>john.doe@example.com</p>
              </div>
              <div>
                <label className="text-gray-600">Phone</label>
                <p>(123) 456-7890</p>
              </div>
              <div>
                <label className="text-gray-600">Address</label>
                <p>123 Main St, City, Country</p>
              </div>
              {/* Add more fields */}
            </div>
          </div>
          <div className="border-t pt-4 mt-4">
            <h3 className="text-lg font-semibold mb-2">Biography</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
              ipsum felis. Vivamus fermentum blandit ligula id fringilla.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
