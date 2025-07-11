# Airbnb Clone 🏡

A responsive full-stack Airbnb-style web app built with the MERN stack (MongoDB, Express.js, React, Node.js). Users can browse and book places, become hosts, manage listings, and more.

---

## 🚀 Features

- 🔐 User authentication (JWT-based)
- 🏘️ Host listings with images, location, fees, and amenities
- 📍 Interactive map using Leaflet
- 💳 Secure payments with Stripe
- 📝 Leave and read reviews
- 🌍 Responsive UI (mobile-friendly)
- ☁️ Image uploads via Cloudinary or local storage
- 📬 Contact Superhosts directly
- 📅 Booking management system

---

## 🛠️ Tech Stack

| Frontend       | Backend           | Other               |
|----------------|-------------------|---------------------|
| React          | Node.js + Express | MongoDB + Mongoose  |
| TailwindCSS    | JWT Auth          | Stripe Integration  |
| React Router   | Multer (uploads)  | Leaflet Maps        |
| Axios          | Cookie/session    | Cloudinary (optional) |

---

## 📸 Screenshots

| Home Page | Place Page | Booking Page |
|-----------|------------|--------------|
| ![](screenshots/home.png) | ![](screenshots/place.png) | ![](screenshots/booking.png) |

> *(You can capture your app and save screenshots in a `/screenshots` folder.)*

---

## 🧪 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo

2. Install dependencies
bash
Copy
Edit
# Backend
cd api
npm install

# Frontend
cd ../client
npm install

3. Environment Variables
Create .env files in both api/ and client/:

api/.env
env
Copy
Edit
PORT=4000
MONGO_URI=mongodb://localhost:27017/airbnb-clone
JWT_SECRET=your_jwt_secret
CLOUDINARY_URL=your_cloudinary_url
client/.env
env
Copy
Edit
VITE_API_URL=http://localhost:4000

4. Run the app locally
bash
Copy
Edit
# Backend
cd api
npm run dev

# Frontend
cd ../client
npm run dev
Visit: http://localhost:3000

🤝 Contributing
Contributions are welcome! Open an issue or submit a pull request.

📄 License
MIT License — feel free to use and modify.


project-root/
│
├── client/                            # Frontend React app (Vite or CRA)
│   ├── public/                        # Public assets
│   ├── src/
│   │   ├── assets/                    # Static assets (images, icons, etc.)
│   │   ├── components/                # Reusable UI components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Layout.jsx
│   │   │   └── HomePage.jsx
│   │   ├── pages/                     # Route-level pages
│   │   │   ├── AccountPage.jsx
│   │   │   ├── BookingPage.jsx
│   │   │   ├── BookingsPage.jsx
│   │   │   ├── ForgotPasswordPage.jsx
│   │   │   ├── IndexPage.jsx
│   │   │   ├── LeaveReviewPage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── MyReservations.jsx
│   │   │   ├── PaymentPage.jsx
│   │   │   ├── PlacePage.jsx
│   │   │   ├── PlacesFormPage.jsx
│   │   │   ├── PlacesPage.jsx
│   │   │   ├── PlacesSearch.jsx
│   │   │   ├── ProfilePage.jsx
│   │   │   ├── RatingsPage.jsx
│   │   │   ├── RegisterPage.jsx
│   │   │   └── ResetPasswordPage.jsx
│   │   ├── context/
│   │   │   └── UserContext.jsx        # Auth/user context provider
│   │   ├── hooks/                     # Custom hooks (if any)
│   │   ├── styles/                    # Tailwind / global CSS
│   │   ├── App.jsx                    # Main app component
│   │   ├── main.jsx                   # Entry point (Vite)
│   │   └── vite.config.js             # Vite config
│   ├── package.json                   # React app config
│
├── api/                               # Express.js backend
│   ├── controllers/                   # Controller logic
│   ├── models/                        # Mongoose schemas
│   ├── routes/                        # Express routes
│   ├── middleware/                   # Auth, error handling, etc.
│   ├── config/                        # DB config, Stripe keys
│   ├── uploads/                       # Uploaded files (local only)
│   ├── server.js                      # Main entry point
│   ├── .env                           # Server environment variables
│   └── package.json                   # Backend config
│
├── README.md                          # Project overview
├── .gitignore                         # Ignored files
└── package.json                       # Root-level (for concurrently)



📦 Key Notes:
🔗 client/src/components/
Shared UI parts like Layout, Header, Footer, etc.

🔐 pages/
Each route component corresponds to a page in your App.jsx.

🔁 context/UserContext.jsx
Handles login, user data, token validation.

⚙️ api/
Follows MVC (Models, Controllers, Routes) for maintainability.

Add auth.js, places.js, bookings.js, etc. inside routes/.


✨ Credits
Inspired by Airbnb. Built with ❤️ by [Ms Felicity Zitha].

