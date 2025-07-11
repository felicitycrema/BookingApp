import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";

const ReviewSection = ({ placeId }) => {
  const { user } = useContext(UserContext);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const fetchReviews = async () => {
    try {
      const res = await axios.get(`/places/${placeId}/reviews`);
      setReviews(res.data);
    } catch (err) {
      console.error("Failed to load reviews:", err);
    }
  };

  useEffect(() => {
    if (placeId) {
      fetchReviews();
    }
  }, [placeId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim() || !rating) return;

    try {
      await axios.post(
        `/places/${placeId}/reviews`,
        {
          rating: Number(rating),
          comment: comment.trim(),
        },
        { withCredentials: true }
      );
      setComment("");
      setRating(5);
      fetchReviews();
    } catch (err) {
      console.error("Failed to submit review:", err.response?.data || err);
      alert(err.response?.data?.error || "Failed to submit review.");
    }
  };

  return (
    <div className="mt-8 border-t pt-6">
      <h2 className="text-xl font-semibold mb-4">Reviews</h2>

      {/* Existing reviews */}
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div
            key={review._id}
            className="border-b pb-4 mb-4 space-y-1 text-sm text-gray-700"
          >
            <div className="font-bold">{review.user?.name || "Anonymous"}</div>
            <div>⭐ {review.rating}/5</div>
            <p>{review.comment}</p>
            <div className="text-gray-400 text-xs">
              {new Date(review.createdAt).toLocaleDateString()}
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No reviews yet.</p>
      )}

      {/* Leave a review */}
      {user && (
        <form onSubmit={handleSubmit} className="mt-6 space-y-3">
          <h3 className="font-medium">Leave a review</h3>
          <div>
            <label className="block text-sm">Rating</label>
            <select
              className="border rounded px-3 py-2"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
            >
              {[5, 4, 3, 2, 1].map((r) => (
                <option key={r} value={r}>
                  {r} star{r > 1 && "s"}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm">Comment</label>
            <textarea
              className="w-full border rounded px-3 py-2"
              rows="3"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your experience..."
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
          >
            Submit Review
          </button>
        </form>
      )}
    </div>
  );
};

export default ReviewSection;
