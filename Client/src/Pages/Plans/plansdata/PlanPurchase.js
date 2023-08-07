import React, { useState } from "react";
import {
  FaUser,
  FaPhone,
  FaBirthdayCake,
  FaIdCard,
  FaArrowRight,
  FaAddressCard,
} from "react-icons/fa";

const PlanPurchase = ({ plans }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    bloodGroup: "",
    address: "",
    adharCard: null,
    selectedPlan: null,
    selectedYear: null,
    selectedSumInsured: "",
    username: "",
    emailAddress: "",
    password: "",
    passwordConfirmation: "",
  });

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAdharCardUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, adharCard: file }));
  };

  const handlePlanSelect = (e) => {
    const selectedPlan = plans.find(
      (plan) => plan.id === parseInt(e.target.value)
    );
    setFormData((prevData) => ({
      ...prevData,
      selectedPlan,
      selectedYear: null,
      selectedSumInsured: "",
    }));
  };

  const handleYearSelect = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedYear: parseInt(e.target.value),
      selectedSumInsured: "",
    }));
  };

  const handleSumInsuredSelect = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedSumInsured: parseInt(e.target.value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    // Add your logic to submit the form data
  };

  return (
    <section className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-300 to-indigo-200">
      <div className="max-w-4xl p-6 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Plan Purchase</h1>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          <div>
            <label htmlFor="name" className="block text-gray-600 mb-1">
              <FaUser className="inline-block mr-2" /> Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="block w-full border rounded p-2"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-gray-600 mb-1">
              <FaPhone className="inline-block mr-2" /> Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="block w-full border rounded p-2"
            />
          </div>
          {/* Other form fields... */}
          <div>
            <label htmlFor="age" className="block text-gray-600 mb-1">
              <FaBirthdayCake className="inline-block mr-2" /> Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="block w-full border rounded p-2"
            />
          </div>
          <div>
            <label htmlFor="bloodGroup" className="block text-gray-600 mb-1">
              <FaAddressCard className="inline-block mr-2" /> Blood Group
            </label>
            <select
              id="bloodGroup"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleInputChange}
              className="block w-full border rounded p-2"
            >
              <option value="">Select Blood Group</option>
              {bloodGroups.map((group) => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="address" className="block text-gray-600 mb-1">
              <FaIdCard className="inline-block mr-2" /> Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="block w-full border rounded p-2"
            />
          </div>
          <div>
            <label htmlFor="adharCard" className="block text-gray-600 mb-1">
              <FaIdCard className="inline-block mr-2" /> Adhar Card (Upload)
            </label>
            <input
              type="file"
              id="adharCard"
              name="adharCard"
              accept=".jpg, .jpeg, .png"
              onChange={handleAdharCardUpload}
              className="block w-full"
            />
          </div>
          {plans && plans.length > 0 && (
            <div>
              <label htmlFor="plan" className="block text-gray-600 mb-1">
                <FaArrowRight className="inline-block mr-2" /> Select Plan
              </label>
              <select
                id="plan"
                name="plan"
                onChange={handlePlanSelect}
                value={formData.selectedPlan.id || ""}
                className="block w-full border rounded p-2"
              >
                <option value="">Select Plan</option>
                {plans.map((plan) => (
                  <option key={plan.id} value={plan.id}>
                    {plan.planName}
                  </option>
                ))}
              </select>
            </div>
          )}
          {formData.selectedPlan && (
            <div>
              <label htmlFor="year" className="block text-gray-600 mb-1">
                <FaArrowRight className="inline-block mr-2" /> Select Year
              </label>
              <select
                id="year"
                name="year"
                onChange={handleYearSelect}
                value={formData.selectedYear}
                className="block w-full border rounded p-2"
              >
                <option value="">Select Year</option>
                {formData.selectedPlan.premiums.map((premium) => (
                  <option key={premium.year} value={premium.year}>
                    {premium.year} Years
                  </option>
                ))}
              </select>
            </div>
          )}
          {formData.selectedYear && formData.selectedPlan && (
            <div>
              <label htmlFor="sumInsured" className="block text-gray-600 mb-1">
                <FaArrowRight className="inline-block mr-2" /> Select Sum
                Insured
              </label>
              <select
                id="sumInsured"
                name="sumInsured"
                onChange={handleSumInsuredSelect}
                value={formData.selectedSumInsured}
                className="block w-full border rounded p-2"
              >
                <option value="">Select Sum Insured</option>
                {formData.selectedPlan.premiums
                  .find((premium) => premium.year === formData.selectedYear)
                  ?.sumInsured.map((sum, index) => (
                    <option key={index} value={sum}>
                      {sum}
                    </option>
                  ))}
              </select>
            </div>
          )}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full py-2 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
            >
              <FaArrowRight className="inline-block mr-2" /> Save
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PlanPurchase;
