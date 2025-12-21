# 🚀 Localhost Website - IIIT Pune Dev Community

![Logo](https://localhost-website.vercel.app/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75)

## 🎯 Overview

The official website for **Localhost**, the premier Development Club of IIIT Pune. This platform serves as a comprehensive hub for club activities, event management, assignments, member collaboration, and learning resources.

## ✨ Key Features

### 🏠 Enhanced Landing Page

- **Animated Hero Section** with framer-motion
- **Real-time Statistics Counter** showing club metrics
- **Call-to-Action Buttons** for easy navigation
- **Responsive Design** optimized for all devices

### 📅 Event Management System

- **Advanced Filtering** by category, status, and search
- **Grid/List View Toggle** for better visualization
- **Event Categories**: Hackathons, Workshops, Tech Talks, Open Source
- **RSVP Tracking** with capacity indicators
- **Interactive Calendar View** for month-by-month planning
- **Event Details Page** with registration links

### 📋 Assignment System

- **Search & Filter** by tags and categories
- **Due Date Tracking** with visual indicators
- **Submission Portal** for completed work
- **Progress Monitoring** for admins

### 👥 Member Directory

- **Enhanced Profiles** with skills, projects, and contributions
- **Batch-wise Filtering** (2025, 2026, 2027)
- **Role-based Views** (Core Team, Members)
- **Social Links Integration** (GitHub, LinkedIn, Twitter)
- **Contribution Tracking** with project counts

### 📚 Learning Resources Hub

- **Curated Content**: Tutorials, Documentation, Videos, Code Samples
- **Category Organization**: Web Dev, ML, Algorithms, Backend
- **Search Functionality** for quick resource discovery
- **Download Tracking** for popular resources
- **Community Contributions** enabled

### 🔔 Notification Center

- **Real-time Updates** for events, assignments, and achievements
- **Unread Badge Counter** on notification bell
- **Filter by Type**: All, Unread
- **Quick Actions**: Mark as read, Delete, View details
- **Notification Categories**: Events, Assignments, Achievements, Alerts

### 📊 Activity Dashboard

- **Recent Activity Feed** with timestamps
- **Upcoming Events Widget** with registration status
- **Quick Stats Overview** (Members, Events, Projects, Achievements)
- **Clickable Activity Cards** linking to relevant pages

### 🛠️ Enhanced Admin Panel

- **Tab-based Navigation**: Overview, Events, Assignments, Users, Settings
- **User Management** with search and filtering
- **Event Creation & Management**
- **Assignment Distribution**
- **Quick Actions Dashboard**
- **Settings & Configurations**
- **Analytics & Reports**

### 🎨 UI/UX Improvements

- **Glassmorphism Effects** with backdrop blur
- **Smooth Animations** using framer-motion
- **Consistent Color Scheme** with greenblue accents
- **Custom Fonts**: Minecraft, DoctorGlitch, Technopollas
- **Dark Theme** optimized for coding environment
- **Responsive Navigation** with mobile menu

## 📦 Tech Stack

- **Framework**: Next.js 15.0.3
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State Management**: Recoil
- **Authentication**: NextAuth.js
- **Database**: MongoDB with Mongoose 8.8.3
- **Icons**: React Icons
- **Forms**: Formik + Yup
- **UI Components**: Chakra UI
- **Notifications**: React Hot Toast

## 🚀 Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn or pnpm
- Git
- MongoDB instance

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ShubhamAsati-123/localhost-website.git
   cd localhost-website
   ```

2. **Install Dependencies**

   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Run Development Server**

   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

5. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
localhost-website/
├── app/
│   ├── about/              # About page
│   ├── admin/              # Admin dashboard
│   ├── api/                # API routes
│   │   ├── auth/           # Authentication
│   │   ├── hackiniiitp/    # Hackathon APIs
│   │   ├── models/         # Database models
│   │   └── users/          # User management
│   ├── assignments/        # Assignment pages
│   ├── atoms/              # Recoil state atoms
│   ├── components/         # React components
│   │   ├── ActivityFeed.tsx
│   │   ├── UpcomingEvents.tsx
│   │   ├── NotificationCenter.tsx
│   │   ├── Navbar.tsx
│   │   └── ...
│   ├── dashboard/          # Club dashboard
│   ├── events/             # Event pages
│   │   └── calendar/       # Calendar view
│   ├── hackiniiitp/        # Hackathon portal
│   ├── iiitpwoc/           # Winter of Code
│   ├── members/            # Member directory
│   ├── resources/          # Learning resources
│   ├── team/               # Team pages
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # Shared components
├── context/                # React context
├── lib/                    # Utilities
├── public/                 # Static assets
│   ├── font/               # Custom fonts
│   └── images/             # Images
├── middleware.ts           # Next.js middleware
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🎯 Key Pages & Routes

- `/` - Landing page with activity feed
- `/about` - About Localhost club
- `/events` - All events with filtering
- `/events/calendar` - Calendar view of events
- `/assignments` - Assignment listing
- `/members` - Member directory
- `/resources` - Learning resources hub
- `/dashboard` - Club activity dashboard
- `/admin` - Admin panel (protected)
- `/profile` - User profile
- `/hackiniiitp` - HackIn IIITP portal
- `/iiitpwoc` - Winter of Code portal

## 🤝 Contributing

We welcome contributions from all club members!

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Commit with clear messages**
   ```bash
   git commit -m "Add: feature description"
   ```
5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Create a Pull Request**

### Coding Guidelines

- Use TypeScript for type safety
- Follow React best practices
- Use Tailwind CSS for styling
- Add framer-motion for animations
- Keep components modular and reusable
- Write clear comments for complex logic
- Maintain consistent naming conventions

## 🎨 Design System

### Colors

- **Primary**: `#4dffdb` (greenblue)
- **Background**: Dark theme with star pattern
- **Text**: White with gray variants
- **Accents**: Blue, Green, Purple, Yellow for categories

### Fonts

- **Minecraft**: Headings and titles
- **DoctorGlitch**: Special effects
- **Technopollas**: Alternative headings

### Components

- Glassmorphism cards with `bg-opacity-5` and `backdrop-blur-md`
- Border accent with `border-greenblue border-opacity-30`
- Hover effects with smooth transitions
- Rounded corners (`rounded-xl`, `rounded-lg`)

## 📈 Recent Updates

### v2.0 (November 2025)

- ✅ Fixed critical security vulnerabilities (Mongoose, Next.js)
- ✅ Enhanced landing page with animations and stats
- ✅ Built comprehensive event management system
- ✅ Added activity feed and dashboard
- ✅ Created notification center
- ✅ Implemented member directory
- ✅ Added learning resources hub
- ✅ Enhanced admin panel with tabs
- ✅ Built event calendar view
- ✅ Improved navigation with new pages

## 🐛 Known Issues

- Minor ESLint warnings for inline styles (calendar progress bars)
- Mobile menu notification center needs optimization
- Event calendar needs real-time data integration

## 🔮 Future Enhancements

- [ ] Real-time chat for members
- [ ] Project showcase gallery
- [ ] Achievement badges system
- [ ] Email notification integration
- [ ] Dark/Light theme toggle
- [ ] Progressive Web App (PWA)
- [ ] Advanced analytics dashboard
- [ ] AI-powered resource recommendations

## 📞 Contact & Support

- **Discord**: [Join our server](https://discord.gg/8wEquGh4CY)
- **GitHub Issues**: [Report bugs](https://github.com/ShubhamAsati-123/localhost-website/issues)
- **Email**: localhost@iiitp.ac.in
- **Website**: [localhost.iiitp.ac.in](https://localhost.iiitp.ac.in)

## 📄 License

This project is maintained by Localhost - IIIT Pune. All rights reserved.

## 🙏 Acknowledgments

- IIIT Pune for support
- All club members and contributors
- Open source community
- Design inspiration from modern web trends

---

**Made with ❤️ by Localhost - IIIT Pune**

_Join us in building, learning, and innovating together!_
