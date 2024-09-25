import React, { useState } from 'react';
import login_bg from '../assets/login_bg.png';
import skrolls_logo from '../assets/skrolls.png';
import { Link } from 'react-router-dom';

export const Register = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formErrors, setFormErrors] = useState({}); // To store validation errors

  // State for other fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: ''
  });

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length < 12) {
      setPasswordError('Password must be at least 12 characters long');
    } else {
      setPasswordError('');
    }

    if (confirmPassword && value !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);

    if (value !== password) {
      setError('Passwords do not match');
    } else {
      setError('');
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Validate form
  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'First Name is required';
    if (!formData.lastName) errors.lastName = 'Last Name is required';
    if (!formData.username) errors.username = 'Username is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!password) errors.password = 'Password is required';
    if (!confirmPassword) errors.confirmPassword = 'Confirm Password is required';
    if (password !== confirmPassword) errors.passwordMismatch = 'Passwords do not match';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form logic
      console.log('Form submitted successfully!');
    }
  };

  return (
    <div className="flex h-screen w-full items-center gap-10 bg-bg-secondary px-20 max-xl:gap-5 max-xl:px-5">
      <div className="flex h-4/5 w-5/12 flex-col justify-between gap-10 max-xl:gap-5 max-lg:w-1/2 max-md:w-full">
        <div className="flex select-none items-center pl-10 text-xl font-bold text-[#324452] max-lg:text-base">
          <img
            src={skrolls_logo}
            alt="logo"
            className="w-10 max-lg:w-7"
            draggable="false"
          />
          CitizenScience
        </div>

        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex select-none flex-col gap-1 max-xl:gap-0">
              <div className="text-3xl font-bold max-lg:text-lg">Register </div>
              <div className="text-sm font-medium max-lg:text-sm">
                Create a new account
              </div>
            </div>
            <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2 max-xl:gap-1">
              <div className="mt-2 flex gap-2">
                <div className="flex flex-col">
                  <label className="select-none text-sm font-medium text-text-hard">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className="rounded-lg border-2 border-border-muted bg-bg-primary px-2 py-1 outline-none"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  {formErrors.firstName && (
                    <p className="text-red-500 text-sm">{formErrors.firstName}</p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label className="select-none text-sm font-medium text-text-hard">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className="rounded-lg border-2 border-border-muted bg-bg-primary px-2 py-1 outline-none"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                  {formErrors.lastName && (
                    <p className="text-red-500 text-sm">{formErrors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col">
                <label className="select-none text-sm font-medium text-text-hard">
                  Username <span className="text-red-500">*</span>
                </label>
                <input
                  id="username"
                  type="text"
                  className="rounded-lg border-2 border-border-muted bg-bg-primary px-2 py-1 outline-none"
                  value={formData.username}
                  onChange={handleInputChange}
                />
                {formErrors.username && (
                  <p className="text-red-500 text-sm">{formErrors.username}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label className="select-none text-sm font-medium text-text-hard">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className="rounded-lg border-2 border-border-muted bg-bg-primary px-2 py-1 outline-none"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm">{formErrors.email}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label className="select-none text-sm font-medium text-text-hard">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  id="password"
                  type="password"
                  className="rounded-lg border-2 border-border-muted bg-bg-primary px-2 py-1 outline-none"
                  value={password}
                  onChange={handlePasswordChange}
                />
                {passwordError && (
                  <p className="mt-1 text-sm text-red-500">{passwordError}</p>
                )}
                {formErrors.password && (
                  <p className="text-red-500 text-sm">{formErrors.password}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label className="select-none text-sm font-medium text-text-hard">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <input
                  id="confirm_password"
                  type="password"
                  className="rounded-lg border-2 border-border-muted bg-bg-primary px-2 py-1 outline-none"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
                {formErrors.confirmPassword && (
                  <p className="text-red-500 text-sm">{formErrors.confirmPassword}</p>
                )}
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </div>

              <input
                className="mt-4 flex w-full cursor-pointer select-none justify-center rounded-lg bg-primary py-2 text-base font-bold text-bg-secondary transition-all ease-in-out hover:bg-red-500"
                type="submit"
                value="Register"
              />
            </form>
          </div>
        </div>

        <div className="flex w-full justify-center gap-1 text-base text-text-secondary max-sm:text-sm">
          Already have an account?
          <Link
            to="/login"
            className="cursor-pointer select-none font-medium text-text-primary underline"
          >
            Login here
          </Link>
        </div>
      </div>

      <div className="flex h-4/5 w-7/12 select-none items-center justify-center rounded-2xl bg-[#E3EAFF] max-lg:h-2/3 max-lg:w-1/2 max-md:hidden">
        <img
          src={login_bg}
          className="h-4/6 w-4/5 max-lg:h-1/2 max-lg:w-3/4"
          alt="login background"
          draggable="false"
        />
      </div>
    </div>
  );
};
