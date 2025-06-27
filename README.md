# React Task App 🌟

A modern, responsive React application for task management with API data fetching capabilities and dark/light theme support.

## ✨ Features

- **📝 Task Management**: Create, complete, and delete tasks with local storage persistence
- **🌐 API Integration**: Fetch and display posts from JSONPlaceholder API with search and pagination
- **🎨 Theme Toggle**: Switch between light and dark modes with system preference detection
- **📱 Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **🔄 Real-time Updates**: Instant UI updates with React hooks and context

## 🚀 Live Demo

[Add your live demo link here]

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.0
- **Styling**: Tailwind CSS 4.1.11
- **Routing**: React Router DOM 7.6.3
- **State Management**: React Context API
- **Package Manager**: npm

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)

You can check your versions with:
```bash
node --version
npm --version
```

## 🏗️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/react-task-app.git
cd react-task-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
react-task-app/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Button.jsx          # Reusable button component
│   │   ├── Card.jsx            # Card layout component
│   │   ├── Footer.jsx          # Footer component
│   │   ├── Layout.jsx          # Main layout wrapper
│   │   └── Navbar.jsx          # Navigation bar with theme toggle
│   ├── context/
│   │   └── ThemeContext.jsx    # Dark/light theme context
│   ├── pages/
│   │   ├── Home.jsx            # Home page with app overview
│   │   ├── Tasks.jsx           # Task management page
│   │   └── ApiData.jsx         # API data display page
│   ├── utils/
│   │   └── useLocalStorage.js  # Custom hook for localStorage
│   ├── App.jsx                 # Main app component with routing
│   ├── main.jsx                # App entry point
│   └── index.css               # Global styles and Tailwind imports
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## 🎯 Features in Detail

### Task Management
- **Add Tasks**: Type in the input field and press Enter or click "Add"
- **Complete Tasks**: Click the checkmark (✔) to mark tasks as complete
- **Delete Tasks**: Click the X (✖) to remove tasks
- **Filter Tasks**: View All, Active, or Completed tasks
- **Persistent Storage**: Tasks are saved in browser localStorage

### API Data Display
- **Fetch Posts**: Automatically loads posts from JSONPlaceholder API
- **Search Functionality**: Filter posts by title
- **Pagination**: Navigate through posts with Previous/Next buttons
- **Responsive Grid**: Posts display in a responsive grid layout

### Theme System
- **Dark/Light Toggle**: Click the moon/sun button in the navbar
- **System Preference**: Automatically detects your system theme preference
- **Persistent Theme**: Your theme choice is remembered across sessions
- **Smooth Transitions**: Theme changes with smooth CSS transitions

## 🎨 Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Add navigation link in `src/components/Navbar.jsx`

### Styling
The app uses Tailwind CSS for styling. You can:
- Modify `tailwind.config.js` for custom theme settings
- Add custom CSS in `src/index.css`
- Use Tailwind utility classes in components

### Theme Customization
Edit `src/context/ThemeContext.jsx` to:
- Change default theme
- Add more theme options
- Modify theme persistence logic

## 🐛 Troubleshooting

### Common Issues

**White blank screen:**
- Check browser console for JavaScript errors
- Ensure all dependencies are installed: `npm install`
- Clear browser cache and localStorage

**Theme not working:**
- Check if Tailwind CSS is properly configured
- Verify ThemeProvider is wrapping the app in `main.jsx`
- Clear localStorage to reset theme preferences

**API data not loading:**
- Check internet connection
- Verify the API endpoint is accessible
- Check browser console for network errors

### Development Issues

**Port already in use:**
```bash
# Kill process on port 5173
npx kill-port 5173
# Or use a different port
npm run dev -- --port 3000
```

**Dependencies issues:**
```bash
# Clear npm cache
npm cache clean --force
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit your changes: `git commit -m 'Add feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - Frontend framework
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [React Router](https://reactrouter.com/) - Routing
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - API for testing

## 📞 Support

If you encounter any issues or have questions:
- Create an issue in the GitHub repository
- Check the troubleshooting section above
- Review the browser console for error messages

---

**Made with ❤️ using React and Vite**
