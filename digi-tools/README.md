# DigiTools — Premium Digital Tools Marketplace

A modern digital tools buying website where users can browse, add to cart, and purchase premium software products.

## 🛠 Technologies Used
- React.js (Vite)
- Tailwind CSS + DaisyUI
- React-Toastify
- JavaScript ES6+
- JSON (product data)

## ✨ Key Features
1. 🛒 Add to cart & remove products with real-time cart count in navbar
2. 🔔 Toast notifications for all cart actions using React-Toastify
3. 📱 Fully responsive design across all screen sizes

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd digi-tools
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation with cart functionality
│   ├── Banner.jsx          # Hero section
│   ├── Stats.jsx           # Statistics section
│   ├── Steps.jsx           # 3-step process section
│   ├── Pricing.jsx         # Pricing plans
│   ├── CTABanner.jsx       # Call-to-action banner
│   ├── Footer.jsx          # Footer with links
│   ├── ProductCard.jsx     # Individual product card
│   ├── CartItem.jsx        # Cart item component
│   └── MainSection.jsx     # Products/Cart toggle section
├── data/
│   └── products.json       # Product data
├── App.jsx                 # Main application component
└── index.css               # Tailwind CSS imports
```

## 🎨 Design Features

- **Modern UI**: Clean, professional design with Tailwind CSS
- **Responsive**: Mobile-first approach with breakpoints
- **Interactive**: Smooth transitions and hover effects
- **Toast Notifications**: User feedback for all actions
- **Cart Management**: Real-time cart updates and state management

## 📦 Components Overview

### Navbar
- Sticky navigation with logo and menu items
- Shopping cart icon with item count badge
- Responsive hamburger menu for mobile
- Login and Get Started buttons

### Main Sections
- **Banner**: Hero section with CTA buttons
- **Stats**: Key metrics with gradient background
- **Products**: Grid of product cards with add to cart functionality
- **Cart**: Shopping cart with item management
- **Steps**: 3-step getting started guide
- **Pricing**: Three-tier pricing plans
- **CTA Banner**: Call-to-action section
- **Footer**: Multi-column footer with social links

### Product Features
- 8+ digital tools with detailed information
- Tag system (Best Seller, Popular, New)
- Feature lists with checkmarks
- Add to cart with duplicate prevention
- Toast notifications for user feedback

## 🛒 Cart Functionality

- Add products to cart with validation
- Remove items from cart
- Real-time cart count updates
- Total price calculation
- Checkout with cart clearing
- Empty cart state handling

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Collapsible navigation menu
- Adaptive grid layouts
- Touch-friendly buttons and interactions

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Styling
- Tailwind CSS for utility-first styling
- DaisyUI for component enhancements
- Custom color scheme with blue/indigo theme
- Consistent spacing and typography

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request
