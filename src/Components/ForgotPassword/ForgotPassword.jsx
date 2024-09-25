import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulated API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Show success toast
      toast.success(
        `if your account was found, an email has been send to you`,
        {
          duration: 4000,
          position: 'bottom-right',
        }
      );

      // Clear the email input
      setEmail('');
    } catch (error) {
      // Show error toast
      toast.error('Failed to send reset link. Please try again.', {
        duration: 4000,
        position: 'bottom-right',
      });
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-bg-secondary">
      <div className="flex w-2/5 flex-col rounded-lg bg-bg-primary p-10 max-lg:w-3/5 max-md:w-4/5 max-sm:w-11/12">
        <h1 className="mb-4 text-2xl font-bold text-text-hard">
          Forgot Password
        </h1>
        <p className="mb-6 text-sm text-text-secondary">
          Enter your email address to begin the reset process:
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg border-2 border-border-muted bg-bg-primary px-2 py-1 outline-none"
          />
          <button
            type="submit"
            className="mt-2 rounded-lg bg-primary py-2 font-bold text-bg-secondary hover:bg-red-500"
          >
            Send Reset Link
          </button>

          <Link
            to="/login"
            className="text-right text-sm text-primary hover:underline"
          >
            Back to Login
          </Link>
        </form>
      </div>
    </div>
  );
};
