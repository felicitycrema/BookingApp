import { useState } from "react";
import axios from "axios";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!email) {
      setStatus("Please enter your email.");
      return;
    }

    try {
      const response = await axios.post("/forgot-password", { email });
      setStatus("✅ Reset link sent! Check the console for the dev link.");
    } catch (err) {
      console.error("❌ Forgot password error:", err);
      const message =
        err.response?.data?.error || "Something went wrong. Try again.";
      setStatus(`❌ ${message}`);
    }
  };

  return (
    <section className="max-w-md mx-auto p-6 bg-white rounded shadow mt-12">
      <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="Enter your email"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Send Reset Link
        </button>
        {status && <p className="mt-3 text-sm text-gray-700">{status}</p>}
      </form>
    </section>
  );
};

export default ForgotPasswordPage;
