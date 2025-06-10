# PWB Pilates Studio - Complete Wellness Platform

A modern, full-featured pilates studio website built with Next.js, featuring advanced booking systems, e-commerce, member management, and comprehensive analytics.

![PWB Pilates](https://images.unsplash.com/photo-1544966503-7cc36a8d5c82?auto=format&fit=crop&q=80&w=800)

## 🌟 Features

### Frontend Features ✅ (Completed)

- **Modern Design**: Clean, responsive design with Tailwind CSS
- **Advanced Navigation**: 3-section navigation with scroll-based highlighting
- **Overlay System**: Custom overlay system replacing problematic modals
- **Multi-currency Support**: Philippine Peso (₱) pricing throughout
- **Instagram Integration**: Live feed display with engagement metrics
- **Mobile Responsive**: Perfect experience across all devices

### Core Functionality

- **User Authentication**: Sign up, login, profile management
- **Advanced Booking System**: Recurring bookings, waitlists, cancellation policies
- **Member Portal**: Dashboard, progress tracking, loyalty rewards
- **E-commerce Platform**: Physical products, digital downloads, gift certificates
- **Analytics Dashboard**: Health metrics, nutrition logging, wearable integration
- **Referral Program**: Code-based referrals with reward tracking

## 🚀 Tech Stack

### Frontend

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Radix UI
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation

### Recommended Backend Stack

#### Option 1: Supabase (Recommended) 🏆

```bash
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs
```

**Why Supabase:**

- PostgreSQL database with real-time subscriptions
- Built-in authentication with social logins
- Row Level Security for member data protection
- Storage for images, videos, documents
- Edge Functions for payment processing
- Real-time updates for booking availability

#### Option 2: Firebase

```bash
npm install firebase
```

#### Option 3: PlanetScale + Clerk (Advanced)

```bash
npm install @planetscale/database @clerk/nextjs
```

## 📊 Database Schema

### Core Tables

```sql
-- Users/Members
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR UNIQUE,
  first_name VARCHAR,
  last_name VARCHAR,
  phone VARCHAR,
  membership_type VARCHAR,
  loyalty_points INTEGER DEFAULT 0,
  created_at TIMESTAMP,
  profile_image_url VARCHAR
);

-- Classes
CREATE TABLE classes (
  id UUID PRIMARY KEY,
  name VARCHAR,
  instructor_id UUID REFERENCES users(id),
  studio_location VARCHAR,
  max_capacity INTEGER,
  date DATE,
  start_time TIME,
  end_time TIME,
  price DECIMAL
);

-- Bookings
CREATE TABLE bookings (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  class_id UUID REFERENCES classes(id),
  status VARCHAR DEFAULT 'confirmed',
  created_at TIMESTAMP,
  recurring_schedule JSONB
);

-- Products
CREATE TABLE products (
  id UUID PRIMARY KEY,
  name VARCHAR,
  price DECIMAL,
  type VARCHAR, -- physical, digital, gift, subscription
  stock_quantity INTEGER,
  image_url VARCHAR,
  description TEXT
);

-- Orders
CREATE TABLE orders (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  total_amount DECIMAL,
  status VARCHAR,
  payment_method VARCHAR,
  created_at TIMESTAMP
);

-- Health Analytics
CREATE TABLE health_metrics (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  weight DECIMAL,
  body_fat_percentage DECIMAL,
  muscle_mass DECIMAL,
  recorded_date DATE
);

-- Loyalty Program
CREATE TABLE loyalty_transactions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  points INTEGER,
  type VARCHAR, -- earned, redeemed
  description VARCHAR,
  created_at TIMESTAMP
);

-- Referrals
CREATE TABLE referrals (
  id UUID PRIMARY KEY,
  referrer_id UUID REFERENCES users(id),
  referee_id UUID REFERENCES users(id),
  status VARCHAR DEFAULT 'pending',
  reward_points INTEGER,
  created_at TIMESTAMP
);
```

## 💳 Payment Integration

### Philippine Payment Options

#### PayMongo (Recommended for Philippines)

```bash
npm install @paymongo/paymongo-js
```

```javascript
import { PayMongo } from "@paymongo/paymongo-js";

const payMongo = new PayMongo("pk_test_your_key");

// Create payment intent
const paymentIntent = await payMongo.paymentIntents.create({
  amount: 495000, // ₱4,950 in centavos
  currency: "PHP",
  payment_method_allowed: ["gcash", "grab_pay", "card"],
});
```

#### Supported Payment Methods

- **GCash** - Most popular in Philippines
- **Maya (PayMaya)** - Digital wallet
- **Bank transfers** - BPI, BDO online banking
- **Credit/Debit cards** - Visa, Mastercard
- **Grab Pay** - Popular e-wallet

## 🔧 Environment Setup

### Required Environment Variables

```env
# Database (Supabase)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Payment Processing (PayMongo)
PAYMONGO_SECRET_KEY=sk_test_your_secret_key
PAYMONGO_PUBLIC_KEY=pk_test_your_public_key

# Email Service (SendGrid)
SENDGRID_API_KEY=your_sendgrid_key

# Instagram API (Optional)
INSTAGRAM_ACCESS_TOKEN=your_access_token
INSTAGRAM_USER_ID=your_user_id

# File Upload (Cloudinary/AWS S3)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## 🏗️ Implementation Roadmap

### Phase 1: Core Setup (Week 1-2)

- [x] Frontend complete with overlay system
- [ ] Supabase project setup
- [ ] Authentication implementation
- [ ] Database schema creation
- [ ] Basic user registration/login

### Phase 2: Booking System (Week 3-4)

- [ ] Class management admin panel
- [ ] Real-time booking availability
- [ ] Recurring booking logic
- [ ] Waitlist functionality
- [ ] Email notifications

### Phase 3: E-commerce (Week 5-6)

- [ ] Product catalog management
- [ ] Shopping cart with persistent storage
- [ ] PayMongo payment integration
- [ ] Order processing workflow
- [ ] Digital product delivery

### Phase 4: Member Features (Week 7-8)

- [ ] Member dashboard with analytics
- [ ] Progress tracking system
- [ ] Loyalty points calculation
- [ ] Referral code generation
- [ ] Reward redemption system

### Phase 5: Advanced Analytics (Week 9-10)

- [ ] Health metrics tracking
- [ ] Nutrition logging system
- [ ] Wearable device integration
- [ ] Progress visualization
- [ ] Goal tracking and achievements

## 💰 Cost Breakdown (Monthly PHP)

### Supabase Approach (Recommended)

- **Supabase Free Tier**: ₱0 (up to 500MB DB, 50MB file storage)
- **Supabase Pro**: ₱1,250/month (8GB DB, 100GB storage)
- **Vercel Deployment**: ₱0 (Hobby) / ₱1,000 (Pro)
- **PayMongo Transaction Fees**: 2.9% + ₱15 per transaction
- **Domain (.com)**: ₱600/year
- **SendGrid Email**: ₱0 (40k emails/month free)

**Total Monthly Cost: ₱1,250 - ₱2,250**

### Firebase Approach

- **Firebase Spark Plan**: ₱0 (limited usage)
- **Firebase Blaze Plan**: Pay-as-you-go (~₱1,500-3,000/month)

## 🚀 Quick Start Guide

### 1. Clone and Install

```bash
git clone <repository-url>
cd bees-pilates
npm install
```

### 2. Set up Supabase

1. Create account at [supabase.com](https://supabase.com)
2. Create new project
3. Copy API keys to `.env.local`
4. Run database migrations

### 3. Configure Payment Processing

1. Sign up for [PayMongo](https://paymongo.com)
2. Get API keys
3. Set up webhook endpoints
4. Test payment flow

### 4. Deploy

```bash
# Deploy to Vercel
vercel deploy

# Or build for production
npm run build
npm start
```

## 📱 Key Features Implementation

### Advanced Booking System

- **Recurring Bookings**: Weekly/monthly automatic scheduling
- **Waitlist Management**: Join waitlists for full classes
- **Smart Notifications**: Email/SMS reminders and updates
- **Cancellation Policies**: Flexible cancellation with credit system

### Member Portal

- **Progress Dashboard**: Visual tracking of fitness goals
- **Class History**: Complete booking and attendance record
- **Loyalty Program**: Points earning and redemption system
- **Referral Tracking**: Monitor referred friends and rewards

### E-commerce Platform

- **Multi-product Types**: Physical, digital, gift certificates, subscriptions
- **Inventory Management**: Real-time stock tracking
- **Shopping Cart**: Persistent cart across sessions
- **Order Management**: Complete order lifecycle tracking

### Analytics Integration

- **Health Metrics**: Weight, body fat, muscle mass tracking
- **Nutrition Logging**: Calorie and macro tracking
- **Wearable Sync**: Apple Watch, Fitbit integration
- **Progress Visualization**: Charts and goal tracking

## 🔐 Security Considerations

### Data Protection

- **Row Level Security**: Database-level access control
- **JWT Authentication**: Secure token-based auth
- **API Rate Limiting**: Prevent abuse and attacks
- **Data Encryption**: Encrypt sensitive member data

### Payment Security

- **PCI Compliance**: PayMongo handles card data
- **Webhook Verification**: Secure payment confirmations
- **Fraud Detection**: Monitor suspicious transactions

## 📞 Support & Documentation

### Getting Help

- **GitHub Issues**: Report bugs and feature requests
- **Documentation**: Comprehensive guides and API docs
- **Community**: Discord server for developers

### Contributing

1. Fork the repository
2. Create feature branch
3. Make changes with tests
4. Submit pull request

## 📈 Analytics & Monitoring

### Performance Monitoring

- **Core Web Vitals**: Track loading performance
- **Error Tracking**: Monitor and fix issues
- **User Analytics**: Understand user behavior

### Business Metrics

- **Booking Conversion**: Track signup to booking rate
- **Revenue Analytics**: Monitor sales and growth
- **Member Retention**: Track engagement and churn

## 🔮 Future Enhancements

### Mobile App

- **React Native**: Cross-platform mobile app
- **Offline Booking**: Book classes without internet
- **Push Notifications**: Real-time updates

### AI Features

- **Workout Recommendations**: Personalized class suggestions
- **Nutrition AI**: Automated meal planning
- **Progress Prediction**: Forecast goal achievement

### Marketplace

- **Instructor Marketplace**: Independent instructor bookings
- **Partner Studios**: Multi-location booking system
- **Equipment Rental**: Rent pilates equipment

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Modern wellness platforms
- **Technology Stack**: Next.js, Supabase, PayMongo
- **Community**: Open source contributors and pilates community

---

Built with ❤️ for the wellness community in the Philippines 🇵🇭
