import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import SchedulePage from './pages/SchedulePage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import FaqPage from './pages/FaqPage';
import DepartmentPage from './pages/DepartmentPage';
import NotFoundPage from './pages/NotFoundPage';
import RegistrationModal from './components/RegistrationModal';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="department/:dept" element={<DepartmentPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <RegistrationModal />
    </>
  );
}

export default App;