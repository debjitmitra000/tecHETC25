import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import SchedulePage from './pages/SchedulePage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import FaqPage from './pages/FaqPage';
import DepartmentPage from './pages/DepartmentPage';
import DepartmentPage2 from './pages/DepartmentPage2';
import NotFoundPage from './pages/NotFoundPage';
import RegistrationModal from './components/RegistrationModal';
import AdminPage from './pages/AdminPage';
import CoolRetroLoader from './components/CoolRetroLoader';

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Optional: Force the preloader to show for at least a minimum time
    // This ensures users can see the cool animation even if the app loads quickly
    const minDisplayTime = 3000; // 3 seconds
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, minDisplayTime);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPreloader && <CoolRetroLoader onLoadComplete={() => setShowPreloader(false)} />}
      
      {/* Only render main content when preloader is done */}
      {!showPreloader && (
        <>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index path='/' element={<HomePage />} />
              <Route path="events" element={<EventsPage />} />
              <Route path="schedule" element={<SchedulePage />} />
              <Route path="gallery" element={<GalleryPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="faq" element={<FaqPage />} />
              <Route path="bysvgbbgysghixai" element={<AdminPage />} />
              <Route path="department/:dept" element={<DepartmentPage />} />
              <Route path="departmentpage/:dept" element={<DepartmentPage2 />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <RegistrationModal />
        </>
      )}
    </>
  );
}

export default App;