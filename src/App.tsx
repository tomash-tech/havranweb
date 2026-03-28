import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import WebsitesDetail from './pages/WebsitesDetail';
import SEODetail from './pages/SEODetail';
import EshopsDetail from './pages/EshopsDetail';
import Legal from './pages/Legal';

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
        <Route path="/service/websites" element={<WebsitesDetail />} />
        <Route path="/service/seo" element={<SEODetail />} />
        <Route path="/service/eshops" element={<EshopsDetail />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
    </Router>
  );
}


export default App;
