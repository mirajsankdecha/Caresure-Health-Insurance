import React, { useState } from "react";

const Form = () => {
  const [policyNumber, setPolicyNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the form data as an array to the console
    console.log("formData: ", [policyNumber, selectedDate, mobileNumber]);

    // Clearing the input fields after submission
    setPolicyNumber("");
    setSelectedDate("");
    setMobileNumber("");
  };

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex justify-center my-12 shadow-2xl">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{
                backgroundImage:
                  'url("https://source.unsplash.com/Mv9hjnEUHR4/600x800")',
              }}
            />
            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">
                Health Insurance Renewal
              </h3>
              <form
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                onSubmit={handleSubmit}
              >
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="policyNumber"
                  >
                    Policy Number
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="policyNumber"
                    type="text"
                    placeholder="Enter your policy number"
                    value={policyNumber}
                    onChange={(e) => setPolicyNumber(e.target.value)}
                  />
                  <p className="text-xs text-gray-600">
                    Policy format like P/000000/00/0000/000000 or 112202000000
                  </p>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="dob"
                  >
                    Date of Birth
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="dob"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="mobileNumber"
                  >
                    Mobile Number
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="mobileNumber"
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
