# BlinkByte - Language Learning Social Platform

A modern full-stack application that connects language learners for real-time chat and video calls. Built with React, Node.js, and Stream.io for seamless communication.

## 🌟 Features

- **Real-time Chat**: Direct messaging with message threading
- **Video Calls**: HD video calls with Stream Video SDK
- **Language Exchange**: Connect with users based on language preferences
- **Friend System**: Send and accept friend requests
- **User Discovery**: Find language partners based on your profile
- **Responsive Design**: Works on desktop and mobile devices
- **Dark/Light Theme**: Customizable theme support

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS + DaisyUI** - Styling
- **Zustand** - State management
- **React Query (TanStack Query)** - Server state management
- **Stream Chat & Video SDKs** - Real-time communication

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Stream.io** - Chat and video infrastructure

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- Stream.io account (for chat and video features)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd BlinkByte
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Environment Setup**

   Create `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   STREAM_API_KEY=your_stream_api_key
   STREAM_API_SECRET=your_stream_api_secret
   ```

   Create `.env` file in the frontend directory:
   ```env
   VITE_STREAM_API_KEY=your_stream_api_key
   VITE_API_URL=http://localhost:5000/api
   ```

4. **Start the development servers**

   **Backend:**
   ```bash
   cd backend
   npm run dev
   ```

   **Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 📁 Project Structure

```
BlinkByte/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   ├── lib/            # Database and Stream.io setup
│   │   ├── middleware/     # Authentication middleware
│   │   ├── models/         # MongoDB models
│   │   ├── routes/         # API routes
│   │   └── server.js       # Express server
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # API utilities
│   │   ├── pages/          # Page components
│   │   ├── store/          # Zustand stores
│   │   └── App.jsx         # Main app component
│   └── package.json
└── package.json
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/recommended` - Get recommended users
- `GET /api/users/friends` - Get user's friends

### Chat
- `GET /api/chat/token` - Get Stream chat token

### Friend Requests
- `POST /api/users/friend-request` - Send friend request
- `GET /api/users/friend-requests` - Get friend requests
- `PUT /api/users/friend-request/:id` - Accept/reject friend request

## 🎯 Key Features Explained

### Language Matching
Users are matched based on their native and learning languages. The system recommends users who can help each other learn their respective languages.

### Real-time Communication
- **Chat**: Built with Stream Chat SDK for real-time messaging
- **Video Calls**: HD video calls with Stream Video SDK
- **Call Invitations**: Send video call links through chat

### User Experience
- **Onboarding**: Multi-step profile setup
- **Responsive Design**: Works seamlessly on all devices
- **Theme Support**: Dark and light mode
- **Loading States**: Smooth loading experiences

## 🚀 Deployment

### Production Build
```bash
# Build frontend
cd frontend
npm run build

# Start production server
cd ../backend
npm start
```

### Environment Variables for Production
Make sure to set up proper environment variables for production deployment, including:
- MongoDB connection string
- JWT secret
- Stream.io API credentials
- Frontend API URL

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- [Stream.io](https://stream.io/) for chat and video infrastructure
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [DaisyUI](https://daisyui.com/) for UI components
- [React Query](https://tanstack.com/query) for server state management 