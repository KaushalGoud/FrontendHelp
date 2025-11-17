import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    country: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted! Check console.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md flex flex-col gap-4"
      >
        <h2 className="text-2xl font-semibold text-center">Complete Form</h2>

        {/* Name Input */}
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          required
        />

        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          required
        />

        {/* Radio Buttons */}
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
              className="accent-indigo-600"
              required
            />
            Male
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
              className="accent-indigo-600"
            />
            Female
          </label>
        </div>

        {/* Dropdown Select */}
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          required
        >
          <option value="">Select Country</option>
          <option value="Nepal">Nepal</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
        </select>

        {/* Checkbox */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="accent-indigo-600"
            required
          />
          I agree to terms and conditions
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
