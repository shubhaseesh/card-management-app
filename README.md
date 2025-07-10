# Card Management App

A modern, responsive card management application built with React, TypeScript, and Vite. Features a beautiful UI with smooth animations, mock API integration, and full CRUD operations for managing cards.

![Card Management App](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Vite](https://img.shields.io/badge/Vite-Latest-purple) ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Animations-pink)

## ✨ Features

- **📋 Card Management**: Create, view, and delete cards with ease
- **🎨 Beautiful UI**: Modern, responsive design with smooth animations
- **🔄 Real-time Updates**: Seamless UI updates with optimistic rendering
- **🎭 Smooth Animations**: Powered by Framer Motion for delightful interactions
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **🚀 Fast Performance**: Built with Vite for lightning-fast development and builds
- **🎯 TypeScript**: Fully typed for better development experience
- **🔧 Mock API**: JSON Server for backend simulation
- **♿ Accessible**: Built with accessibility best practices

## 🛠️ Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Mock API**: JSON Server
- **Styling**: CSS3 with CSS Custom Properties
- **State Management**: React Hooks (useState, useEffect, custom hooks)
- **HTTP Client**: Fetch API
- **Version Control**: Git

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd card-management-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development servers**
   ```bash
   # Option 1: Run both frontend and backend simultaneously
   npm run dev:full
   
   # Option 2: Run them separately in different terminals
   # Terminal 1 - Start the mock API server
   npm run server
   
   # Terminal 2 - Start the React development server
   npm run dev
   ```

4. **Open your browser**
   - Frontend: http://localhost:5173
   - API Server: http://localhost:3001

## 🚀 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the Vite development server |
| `npm run server` | Start the JSON Server mock API |
| `npm run dev:full` | Start both frontend and backend concurrently |
| `npm run build` | Build the app for production |
| `npm run lint` | Run ESLint to check code quality |
| `npm run preview` | Preview the production build locally |

## 🏗️ Project Structure

```
card-management-app/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Card.tsx       # Individual card component
│   │   ├── CardGrid.tsx   # Grid layout for cards
│   │   ├── Header.tsx     # App header with add button
│   │   ├── AddCardModal.tsx # Modal for adding new cards
│   │   ├── Loading.tsx    # Loading spinner component
│   │   └── ErrorMessage.tsx # Error display component
│   ├── hooks/             # Custom React hooks
│   │   └── useCards.ts    # Hook for card management
│   ├── services/          # API service layer
│   │   └── cardService.ts # Card CRUD operations
│   ├── types/             # TypeScript type definitions
│   │   └── card.ts        # Card-related types
│   ├── App.tsx           # Main App component
│   ├── main.tsx          # React entry point
│   ├── index.css         # Global styles
│   └── App.css           # App-specific styles
├── db.json               # Mock database for JSON Server
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── README.md             # Project documentation
```

## 🎯 Key Features Explained

### Card Operations
- **Add Cards**: Click the "Add Card" button to open a modal with form fields for title, description, category, and color selection
- **Delete Cards**: Each card has a delete button (trash icon) for quick removal
- **Visual Feedback**: Cards animate smoothly when added or removed
- **Categories**: Organize cards with predefined categories (Welcome, Work, Education, Personal, Creative, Other)
- **Color Coding**: Choose from 8 predefined colors for visual organization

### User Experience
- **Smooth Animations**: All interactions include carefully crafted animations using Framer Motion
- **Responsive Layout**: Cards automatically adjust to screen size using CSS Grid
- **Loading States**: Visual feedback during API operations
- **Error Handling**: Graceful error messages with retry functionality
- **Accessibility**: Proper ARIA labels, keyboard navigation, and focus management

### Technical Implementation
- **TypeScript**: Full type safety throughout the application
- **Custom Hooks**: Encapsulated state management logic
- **Service Layer**: Clean separation between UI and API logic
- **Component Architecture**: Reusable, well-structured components
- **Modern CSS**: CSS Grid, Flexbox, and Custom Properties for styling

## 🎨 Design System

### Colors
- Primary: Blue (#3B82F6)
- Background: Light gray (#F8FAFC)
- Text: Dark gray (#1F2937)
- Cards: White with colored accent borders

### Typography
- Font Family: Inter (Google Fonts)
- Weights: 300, 400, 500, 600, 700

### Spacing
- Based on a 4px grid system
- Consistent spacing throughout the app

## 🔧 Configuration

### Environment Setup
The app uses environment variables for configuration. Create a `.env` file in the root directory if needed:

```env
VITE_API_URL=http://localhost:3001
```

### Mock API
The JSON Server runs on port 3001 and serves data from `db.json`. You can modify the initial data by editing this file.

## 🌟 Performance Optimizations

- **Code Splitting**: Automatic code splitting with Vite
- **Lazy Loading**: Components load only when needed
- **Optimistic Updates**: UI updates immediately for better perceived performance
- **Efficient Animations**: Hardware-accelerated animations with Framer Motion
- **Minimal Bundle Size**: Tree-shaking and dead code elimination

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Code Quality

- **ESLint**: Configured for React and TypeScript
- **Type Safety**: 100% TypeScript coverage
- **Component Testing**: Components are built with testability in mind
- **Clean Code**: Following React and TypeScript best practices

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill process on port 3001
   npx kill-port 3001
   ```

2. **Dependencies issues**
   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **TypeScript errors**
   ```bash
   # Clear TypeScript cache
   npx tsc --build --clean
   ```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI Framework
- [Vite](https://vitejs.dev/) - Build Tool
- [Framer Motion](https://www.framer.com/motion/) - Animation Library
- [Lucide](https://lucide.dev/) - Icon Set
- [JSON Server](https://github.com/typicode/json-server) - Mock API
- [Inter Font](https://rsms.me/inter/) - Typography

---

Built with ❤️ using React, TypeScript, and modern web technologies.
