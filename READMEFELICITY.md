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

✨ Credits
Inspired by Airbnb. Built with ❤️ by [Felicity Zitha].

