import HomePage from './pages/home.jsx';
import AboutPage from './pages/about.jsx';
import ContactPage from './pages/contact.jsx';
import ProductsPage from './pages/products.jsx';
import NotFoundPage from './pages/notFound.jsx';
import { Routes, Route } from 'react-router';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes >
      <Footer />
    </>
  )
}

export default App
