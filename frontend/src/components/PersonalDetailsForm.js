import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Box,
} from "@mui/material";

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
      toast.success("Details saved successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        department: "",
        dateOfJoining: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Error saving details!");
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 5 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Enter Personal Details
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Full Name"
              name="name"
              variant="outlined"
              fullWidth
              required
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              required
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              label="Phone Number"
              name="phone"
              variant="outlined"
              fullWidth
              required
              value={formData.phone}
              onChange={handleChange}
            />
            <TextField
              label="Department"
              name="department"
              variant="outlined"
              fullWidth
              required
              value={formData.department}
              onChange={handleChange}
            />
            <TextField
              label="Date of Joining"
              name="dateOfJoining"
              type="date"
              variant="outlined"
              fullWidth
              required
              InputLabelProps={{ shrink: true }}
              value={formData.dateOfJoining}
              onChange={handleChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
      <ToastContainer position="top-center" autoClose={3000} />
    </Container>
  );
};

export default PersonalDetailsForm;
