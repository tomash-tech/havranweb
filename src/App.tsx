import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WebsitesDetail from './pages/WebsitesDetail';
import SEODetail from './pages/SEODetail';
import EshopsDetail from './pages/EshopsDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/websites" element={<WebsitesDetail />} />
        <Route path="/service/seo" element={<SEODetail />} />
        <Route path="/service/eshops" element={<EshopsDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
