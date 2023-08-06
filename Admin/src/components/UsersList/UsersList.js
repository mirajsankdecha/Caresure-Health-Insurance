// admin/UserList/UserList.js

import React, { useState } from "react";

const usersData = [
  { id: 1, username: "admin", name: "Admin User" },
  { id: 2, username: "user1", name: "Regular User 1" },
  { id: 3, username: "user2", name: "Regular User 2" },
  // Add more users as needed
];

const UserList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = usersData.filter((user) => {
    return user.username.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">User List</h1>
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          className="border rounded-md px-3 py-2 w-full"
          placeholder="Search by username"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="border rounded-md p-3 shadow-md bg-white flex flex-col"
          >
            <div className="text-lg font-semibold">{user.name}</div>
            <div className="text-gray-500">{user.username}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
