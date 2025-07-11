import { useState } from "react";
import axios from "axios";

const PasswordReset = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [resetLoading, setResetLoading] = useState(false);
  const [resetError, setResetError] = useState("");
  const [resetSuccess, setResetSuccess] = useState("");

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    setResetError("");
    setResetSuccess("");

    // Basic client-side validation
    if (newPassword !== confirmPassword) {
      setResetError("New password and confirmation do not match.");
      return;
    }

    if (newPassword.length < 6) {
      setResetError("New password must be at least 6 characters.");
      return;
    }

    setResetLoading(true);
    try {
      // Call your backend API to reset the password
      const response = await axios.post(
        "http://localhost:4000/api/user/reset-password",
        {
          currentPassword,
          newPassword,
        },
        { withCredentials: true }
      );

      setResetSuccess("Password updated successfully!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error(
        "Password reset error:",
        error.response?.data || error.message
      );
      setResetError(
        error.response?.data?.error || "Failed to update password."
      );
    } finally {
      setResetLoading(false);
    }
  };

  return (
    <form
      onSubmit={handlePasswordReset}
      className="space-y-4 text-left max-w-md mx-auto mt-10 p-6 border rounded shadow"
    >
      <h2 className="text-xl font-semibold mb-4">Reset Password</h2>

      <div>
        <label className="block mb-1 font-medium" htmlFor="currentPassword">
          Current Password
        </label>
        <input
          id="currentPassword"
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded"
          autoComplete="current-password"
          minLength={6}
        />
      </div>

      <div>
        <label className="block mb-1 font-medium" htmlFor="newPassword">
          New Password
        </label>
        <input
          id="newPassword"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded"
          autoComplete="new-password"
          minLength={6}
        />
      </div>

      <div>
        <label className="block mb-1 font-medium" htmlFor="confirmPassword">
          Confirm New Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded"
          autoComplete="new-password"
          minLength={6}
        />
      </div>

      {resetError && (
        <div className="text-red-600 font-medium">{resetError}</div>
      )}
      {resetSuccess && (
        <div className="text-green-600 font-medium">{resetSuccess}</div>
      )}

      <button
        type="submit"
        disabled={resetLoading}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
      >
        {resetLoading ? "Updating..." : "Update Password"}
      </button>
    </form>
  );
};

export default PasswordReset;
