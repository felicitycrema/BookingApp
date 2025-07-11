import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPasswordPage = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!password) {
      setStatus("Please enter a new password.");
      return;
    }

    try {
      const response = await axios.post(`/reset-password/${token}`, {
        password,
      });
      setStatus("✅ Password reset successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      console.error("❌ Reset failed:", err);
      const message =
        err.response?.data?.error || "Something went wrong. Try again.";
      setStatus(`❌ ${message}`);
    }
  };

  return (
    <section className="max-w-md mx-auto p-6 bg-white rounded shadow mt-12">
      <h2 className="text-2xl font-bold mb-4">Reset Your Password</h2>
      <form onSubmit={handleReset} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">New Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="Enter a new password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Reset Password
        </button>
        {status && <p className="mt-3 text-sm text-gray-700">{status}</p>}
      </form>
    </section>
  );
};

export default ResetPasswordPage;
