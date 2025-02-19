import React, { useState } from "react";
import axios from "axios";
import "./PersonalDetailsForm.css"; // Import the CSS file

const PersonalDetailsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    dateOfJoining: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/personal-details", formData);
      alert("Details saved successfully!");
      setFormData({ name: "", email: "", phone: "", department: "", dateOfJoining: "" });
    } catch (error) {
      console.error(error);
      alert("Error saving details!");
    }
  };

  return (
    <div className="form-container">
      <h2>Enter Personal Details</h2>
      <form onSubmit={handleSubmit} className="personal-form">
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} required />
        <input type="date" name="dateOfJoining" value={formData.dateOfJoining} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PersonalDetailsForm;
