import React, { useState } from "react";
import Hplandata from "./Hplandata.json";

const Hplan = () => {
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const filteredData = Hplandata.filter((item) => {
    const titleMatches = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const contentMatches =
      item.content1.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content2.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content3.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedCategory === "All categories") {
      return titleMatches || contentMatches; // Change here to avoid duplicates
    } else {
      return (
        (titleMatches || contentMatches) && item.category === selectedCategory
      );
    }
  });

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="text-blue-600 font-bold my-5">ALL HEALTH PLANS</div>
        <div className="font-bold my-3 text-5xl">
          Best Health Insurance Plans to Secure Yourself
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex items-center justify-center w-full my-5">
            <div className="relative flex-shrink-0">
              <button
                id="dropdown-button"
                onClick={toggleDropdown}
                className="z-10 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
                type="button"
              >
                {selectedCategory}{" "}
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div
                  id="dropdown"
                  className="z-10 absolute mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow"
                >
                  <ul
                    className="py-2 text-sm text-gray-700"
                    aria-labelledby="dropdown-button"
                  >
                    <li>
                      <button
                        type="button"
                        onClick={() => handleCategorySelect("All categories")}
                        className={`inline-flex w-full px-4 py-2 hover:bg-gray-100 ${
                          selectedCategory === "All categories"
                            ? "bg-gray-100"
                            : ""
                        }`}
                      >
                        All categories
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => handleCategorySelect("Family")}
                        className={`inline-flex w-full px-4 py-2 hover:bg-gray-100 ${
                          selectedCategory === "Family" ? "bg-gray-100" : ""
                        }`}
                      >
                        Family
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => handleCategorySelect("Diabetes")}
                        className={`inline-flex w-full px-4 py-2 hover:bg-gray-100 ${
                          selectedCategory === "Diabetes" ? "bg-gray-100" : ""
                        }`}
                      >
                        Diabetes
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => handleCategorySelect("Cardiac")}
                        className={`inline-flex w-full px-4 py-2 hover:bg-gray-100 ${
                          selectedCategory === "Cardiac" ? "bg-gray-100" : ""
                        }`}
                      >
                        Cardiac
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => handleCategorySelect("Disease Specific")}
                        className={`inline-flex w-full px-4 py-2 hover:bg-gray-100 ${
                          selectedCategory === "Disease Specific"
                            ? "bg-gray-100"
                            : ""
                        }`}
                      >
                        Disease Specific
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="relative w-[700px]">
              <input
                type="search"
                id="search-dropdown"
                value={searchQuery}
                onChange={handleSearchChange}
                className="block w-full px-4 py-2.5 text-sm text-gray-900 bg-gray-200 rounded-r-lg border-l-2 border-blue-500 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search Family, Disease Specific, Cardiac, Diabetes..."
                required=""
              />
              <button
                type="submit"
                className="absolute top-0 right-0 px-3 py-2 text-sm font-medium text-white bg-blue-500 rounded-r-lg hover:bg-blue-600 focus:ring-blue-300 focus:outline-none focus:ring"
              >
                <svg
                  className="w-4 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>

        {filteredData.map((item) => (
          <div key={item.id} className="max-w-7xl">
            <div className="overflow-hidden bg-white m-4 shadow-lg flex flex-col md:flex-row">
              <div className="w-48 h-48 md:w-1/3 md:h-auto">
                <div
                  className="object-cover w-full h-full"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <img
                    src={item.img}
                    alt="Caresure Health Insurance Plans"
                    className="w-full h-full"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div className="grid p-4 w-full md:w-2/3">
                <div className="font-bold text-black mt-10 text-2xl">
                  {item.title}
                </div>
                <div className="text-gray-500 my-1 text-md leading-6">
                  <p className="font-medium">{item.content1}</p>
                  <p className="font-medium">{item.content2}</p>
                  <p className="font-medium">{item.content3}</p>
                </div>
                <button className="inline-flex items-center w-32 justify-center px-4 py-2 mt-4 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:ring-orange-300 focus:outline-none focus:ring">
                  View Plan
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hplan;
