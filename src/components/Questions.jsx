import React, { useState } from "react";
import axios from "axios";

const Questions = () => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "Hi Gloria! I’d love to know more about becoming a host.",
  });
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFeedback(null);

    try {
      await axios.post("http://localhost:4000/contact", form);
      setFeedback("✅ Message sent successfully!");
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "Hi Gloria! I’d love to know more about becoming a host.",
      });
      setShowForm(false); // close popup
    } catch (err) {
      console.error("Failed to send contact message:", err);
      setFeedback(
        err?.response?.data?.error ||
          "Something went wrong. Please try again later."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-[#FFF8F6] px-4 py-20 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative">
        {/* Text */}
        <div className="space-y-6 text-center md:text-left relative">
          <h2 className="text-4xl font-bold text-gray-800 leading-tight tracking-tight">
            Questions about hosting?
          </h2>
          <p className="text-lg text-gray-600">
            Talk to a Superhost to learn what it’s like to share your space and
            earn extra income.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="px-6 py-3 bg-[#FF385C] text-white text-sm font-medium rounded-full hover:bg-[#e11d48] transition duration-300"
          >
            Ask a Superhost
          </button>
          {feedback && (
            <p className="text-green-600 text-sm mt-2">{feedback}</p>
          )}

          {/* Popup Form */}
          {showForm && (
            <div className="absolute top-full mt-4 left-0 z-20 w-full max-w-md bg-white border border-gray-200 p-6 rounded-xl shadow-xl">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-lg"
              >
                &times;
              </button>
              <h4 className="text-xl font-semibold mb-4 text-gray-800">
                Contact a Superhost
              </h4>
              <form onSubmit={handleSubmit} className="space-y-2 text-sm">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-2 py-1 border rounded-md"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-2 py-1 border rounded-md"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone (optional)"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-2 py-1 border rounded-md"
                />
                <textarea
                  name="message"
                  rows="3"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full px-2 py-1 border rounded-md"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full px-4 py-1.5 bg-[#FF385C] text-white text-sm rounded-md hover:bg-[#e11d48] transition"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Image */}
        <div className="w-full overflow-hidden rounded-3xl shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80"
            alt="Superhost smiling"
            className="w-full h-80 object-cover rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Questions;

// import React, { useState } from "react";
// import axios from "axios";

// const Questions = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "Hi Gloria! I’d love to know more about becoming a host.",
//   });
//   const [submitting, setSubmitting] = useState(false);
//   const [feedback, setFeedback] = useState(null);

//   const handleChange = (e) => {
//     setForm((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);
//     setFeedback(null);

//     try {
//       await axios.post("http://localhost:4000/contact", {
//         ...form,
//       });

//       setFeedback("✅ Message sent successfully!");
//       setForm({
//         name: "",
//         email: "",
//         phone: "",
//         message: "Hi Gloria! I’d love to know more about becoming a host.",
//       });
//       setShowForm(false); // close modal on success
//     } catch (err) {
//       console.error("Failed to send contact message:", err);
//       setFeedback(
//         err?.response?.data?.error ||
//           "Something went wrong. Please try again later."
//       );
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <section className="bg-[#FFF8F6] px-4 py-20 relative">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         {/* Text Content */}
//         <div className="space-y-6 text-center md:text-left">
//           <h2 className="text-4xl font-bold text-gray-800 leading-tight tracking-tight">
//             Questions about hosting?
//           </h2>
//           <p className="text-lg text-gray-600">
//             Talk to a Superhost to learn what it’s like to share your space and
//             earn extra income.
//           </p>
//           <button
//             onClick={() => setShowForm(true)}
//             className="px-6 py-3 bg-[#FF385C] text-white text-sm font-medium rounded-full hover:bg-[#e11d48] transition duration-300"
//           >
//             Ask a Superhost
//           </button>
//           {feedback && (
//             <p className="text-green-600 text-sm mt-2">{feedback}</p>
//           )}
//         </div>

//         {/* Image */}
//         <div className="w-full overflow-hidden rounded-3xl shadow-lg">
//           <img
//             src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80"
//             alt="Superhost smiling"
//             className="w-full h-80 object-cover rounded-3xl"
//           />
//         </div>
//       </div>

//       {/* Modal */}
//       {/* {showForm && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-xl relative">
//             <button
//               onClick={() => setShowForm(false)}
//               className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-lg"
//             >
//               &times;
//             </button>
//             <h3 className="text-xl font-semibold mb-4 text-gray-800">
//               Contact a Superhost
//             </h3>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your name"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your email"
//                 value={form.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Your phone (optional)"
//                 value={form.phone}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//               <textarea
//                 name="message"
//                 rows="4"
//                 value={form.message}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//               <button
//                 type="submit"
//                 disabled={submitting}
//                 className="w-full px-6 py-2 bg-[#FF385C] text-white rounded-lg hover:bg-[#e11d48] transition"
//               >
//                 {submitting ? "Sending..." : "Send Message"}
//               </button>
//             </form>
//           </div>
//         </div>
//       )} */}
//       {showForm && (
//         <div className="absolute z-20 mt-4 left-0 right-0 flex justify-center">
//           <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-2xl w-full max-w-md relative">
//             <button
//               onClick={() => setShowForm(false)}
//               className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-lg"
//             >
//               &times;
//             </button>
//             <h3 className="text-xl font-semibold mb-4 text-gray-800">
//               Contact a Superhost
//             </h3>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your name"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your email"
//                 value={form.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Your phone (optional)"
//                 value={form.phone}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//               <textarea
//                 name="message"
//                 rows="4"
//                 value={form.message}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//               <button
//                 type="submit"
//                 disabled={submitting}
//                 className="w-full px-6 py-2 bg-[#FF385C] text-white rounded-lg hover:bg-[#e11d48] transition"
//               >
//                 {submitting ? "Sending..." : "Send Message"}
//                 {showForm && (
//                   <div className="absolute z-20 mt-4 left-0 right-0 flex justify-center">
//                     <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-2xl w-full max-w-md relative">
//                       <button
//                         onClick={() => setShowForm(false)}
//                         className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-lg"
//                       >
//                         &times;
//                       </button>
//                       <h3 className="text-xl font-semibold mb-4 text-gray-800">
//                         Contact a Superhost
//                       </h3>
//                       <form onSubmit={handleSubmit} className="space-y-4">
//                         <input
//                           type="text"
//                           name="name"
//                           placeholder="Your name"
//                           value={form.name}
//                           onChange={handleChange}
//                           required
//                           className="w-full px-4 py-2 border rounded-lg"
//                         />
//                         <input
//                           type="email"
//                           name="email"
//                           placeholder="Your email"
//                           value={form.email}
//                           onChange={handleChange}
//                           required
//                           className="w-full px-4 py-2 border rounded-lg"
//                         />
//                         <input
//                           type="tel"
//                           name="phone"
//                           placeholder="Your phone (optional)"
//                           value={form.phone}
//                           onChange={handleChange}
//                           className="w-full px-4 py-2 border rounded-lg"
//                         />
//                         <textarea
//                           name="message"
//                           rows="4"
//                           value={form.message}
//                           onChange={handleChange}
//                           required
//                           className="w-full px-4 py-2 border rounded-lg"
//                         />
//                         <button
//                           type="submit"
//                           disabled={submitting}
//                           className="w-full px-6 py-2 bg-[#FF385C] text-white rounded-lg hover:bg-[#e11d48] transition"
//                         >
//                           {submitting ? "Sending..." : "Send Message"}
//                         </button>
//                       </form>
//                     </div>
//                   </div>
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Questions;

// import React, { useState } from "react";
// import axios from "axios";

// const Questions = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "Hi Gloria! I’d love to know more about becoming a host.",
//   });

//   const [submitting, setSubmitting] = useState(false);
//   const [success, setSuccess] = useState(null);

//   const handleChange = (e) => {
//     setForm((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);
//     setSuccess(null);

//     try {
//       await axios.post("http://localhost:4000/contact", {
//         ...form,
//         // Optional: Add a specific placeId if relevant
//         // placeId: "123abc456xyz",
//       });

//       setSuccess("Your message was sent successfully!");
//       setForm({
//         name: "",
//         email: "",
//         phone: "",
//         message: "Hi Gloria! I’d love to know more about becoming a host.",
//       });
//     } catch (err) {
//       console.error("Failed to send contact message:", err);
//       setSuccess(
//         err?.response?.data?.error || "Something went wrong. Please try again."
//       );
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <section className="bg-[#FFF8F6] px-4 py-20">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         {/* Text Content + Form */}
//         <div className="space-y-6 text-center md:text-left">
//           <h2 className="text-4xl font-bold text-gray-800 leading-tight tracking-tight">
//             Questions about hosting?
//           </h2>
//           <p className="text-lg text-gray-600">
//             Leave your contact details and a message. A Superhost will get in
//             touch with you.
//           </p>

//           <form
//             onSubmit={handleSubmit}
//             className="space-y-4 text-left max-w-md mx-auto md:mx-0"
//           >
//             <input
//               type="text"
//               name="name"
//               placeholder="Your name"
//               value={form.name}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border rounded-lg"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border rounded-lg"
//             />
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Your phone (optional)"
//               value={form.phone}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg"
//             />
//             <textarea
//               name="message"
//               rows="4"
//               value={form.message}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border rounded-lg"
//             />
//             <button
//               type="submit"
//               disabled={submitting}
//               className="w-full px-6 py-3 bg-[#FF385C] text-white text-sm font-medium rounded-full hover:bg-[#e11d48] transition duration-300"
//             >
//               {submitting ? "Sending..." : "Send Message"}
//             </button>
//             {success && (
//               <div className="text-sm text-green-700 mt-2">{success}</div>
//             )}
//           </form>
//         </div>

//         {/* Image */}
//         <div className="w-full overflow-hidden rounded-3xl shadow-lg">
//           <img
//             src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80"
//             alt="Superhost smiling"
//             className="w-full h-80 object-cover rounded-3xl"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Questions;

// import React from "react";
// import axios from "axios";

// // Replace with the actual Superhost's user ID from your DB
// const SUPERHOST_ID = "686bd1ece4625e317a66567c";

// const Questions = () => {
//   const handleAskSuperhost = async () => {
//     try {
//       await axios.post(
//         "http://localhost:4000/api/messages",
//         {
//           recipient: SUPERHOST_ID,
//           message: "Hi Gloria! I’d love to know more about becoming a host.",
//         },
//         {
//           withCredentials: true,
//         }
//       );

//       alert("Message sent to Superhost!");
//     } catch (err) {
//       console.error("Failed to send message:", err);
//       alert(
//         err?.response?.data?.error || "Failed to contact Superhost. Try again."
//       );
//     }
//   };

//   return (
//     <section className="bg-[#FFF8F6] px-4 py-20">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         {/* Text Content */}
//         <div className="space-y-6 text-center md:text-left">
//           <h2 className="text-4xl font-bold text-gray-800 leading-tight tracking-tight">
//             Questions about hosting?
//           </h2>
//           <p className="text-lg text-gray-600">
//             Talk to a Superhost to learn what it’s like to share your space and
//             earn extra income.
//           </p>
//           <button
//             onClick={handleAskSuperhost}
//             className="px-6 py-3 bg-[#FF385C] text-white text-sm font-medium rounded-full hover:bg-[#e11d48] transition duration-300"
//           >
//             Ask a Superhost
//           </button>
//         </div>

//         {/* Image */}
//         <div className="w-full overflow-hidden rounded-3xl shadow-lg">
//           <img
//             src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80"
//             alt="Superhost smiling"
//             className="w-full h-80 object-cover rounded-3xl"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Questions;

// import React from "react";
// // import superhostImage from "../../public/images/superhost.jpg";

// const Questions = () => {
//   return (
//     <section className="bg-[#FFF8F6] px-4 py-20">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         {/* Text Content */}
//         <div className="space-y-6 text-center md:text-left">
//           <h2 className="text-4xl font-bold text-gray-800 leading-tight tracking-tight">
//             Questions about hosting?
//           </h2>
//           <p className="text-lg text-gray-600">
//             Talk to a Superhost to learn what it’s like to share your space and
//             earn extra income.
//           </p>
//           <button className="px-6 py-3 bg-[#FF385C] text-white text-sm font-medium rounded-full hover:bg-[#e11d48] transition duration-300">
//             Ask a Superhost
//           </button>
//         </div>

//         {/* Image */}
//         <div className="w-full overflow-hidden rounded-3xl shadow-lg">
//           <img
//             src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80"
//             alt="Superhost smiling"
//             className="w-full h-80 object-cover rounded-3xl"
//           />
//           {/* <img
//             src="/images/superhost.jpg"
//             alt="Superhost smiling"
//             className="w-full h-80 object-cover rounded-3xl"
//           /> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Questions;
