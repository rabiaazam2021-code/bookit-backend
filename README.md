# BookIt Backend — REST API

![Node.js](https://img.shields.io/badge/Node.js-v20-green)
![Express](https://img.shields.io/badge/Express.js-4.x-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen)

## 🚀 Live API
https://bookit-backend-production-79de.up.railway.app
## Frontend
👉 [https://bookit-frontend-xi.vercel.app](https://bookit-frontend-xi.vercel.app)

## API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |

### Services
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/services` | Add new service |
| GET | `/api/services/my-services` | Get business services |
| GET | `/api/services/all` | Get all services |
| DELETE | `/api/services/:id` | Delete service |

### Appointments
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/appointments` | Create booking |
| GET | `/api/appointments/my-bookings` | Customer bookings |
| GET | `/api/appointments/business-bookings` | Business bookings |
| PUT | `/api/appointments/:id/status` | Update status |

## Tech Stack
- Node.js + Express.js
- MongoDB Atlas + Mongoose
- JWT Authentication
- Bcrypt.js

## Developer
**Rabia Azam** — MERN Stack Developer
- [LinkedIn](https://www.linkedin.com/in/rabia-azam)
- [GitHub](https://github.com/rabiaazam2021-code)