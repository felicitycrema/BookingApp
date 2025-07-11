import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const LeaveReviewPage = () => {
  const { bookingId } = useParams();
  const navigate = useNavigate();
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  useEffect(() => {
    axios
      .get(`/reviews/${bookingId}`, { withCredentials: true }) // add here
      .then((res) => {
        if (res.data) {
          setRating(res.data.rating);
          setComment(res.data.comment);
        }
      })
      .catch((err) => {
        console.error(
          "Error loading review:",
          err.response?.data || err.message
        );
      });
  }, [bookingId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `/reviews/${bookingId}`,
        { rating, comment },
        { withCredentials: true } // add here
      );
      navigate("/account/ratings");
    } catch (err) {
      console.error("Failed to submit review:", err);
      alert("Failed to submit review");
    }
  };
  

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Leave a Review</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Rating (1-5)</label>
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Comment</label>
          <textarea
            rows={5}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default LeaveReviewPage;
