import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import WebsitesDetail from './pages/WebsitesDetail';
import SEODetail from './pages/SEODetail';
import EshopsDetail from './pages/EshopsDetail';
import Legal from './pages/Legal';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import AiAssistant from './components/AiAssistant';

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sluzby/webdesign" element={<WebsitesDetail />} />
        <Route path="/sluzby/seo" element={<SEODetail />} />
        <Route path="/sluzby/eshopy" element={<EshopsDetail />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <AiAssistant />
    </Router>
  );
}

export default App;
