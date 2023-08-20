import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios for making HTTP requests

const UserList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]); // Initialize users as an empty array

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    // Make an API request when the component mounts or when searchQuery changes
    axios
      .get(
        "/mongodb+srv://mirajsankdecha:Miraj123@mongo.ks9wvwp.mongodb.net/insurance?retryWrites=true&w=majority/users/getAll"
      ) // Replace with your actual API endpoint
      .then((response) => {
        setUsers(response.data); // Update the state with the fetched user data
      })
      .catch((error) => {
        console.error("Error fetching user data: ", error);
      });
  }, [searchQuery]); // Include searchQuery in the dependency array

  const filteredUsers = users.filter((user) => {
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
