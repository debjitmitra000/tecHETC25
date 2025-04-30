import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import SchedulePage from './pages/SchedulePage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import FaqPage from './pages/FaqPage';
import { Navigate } from 'react-router-dom';
import DepartmentPage from './pages/DepartmentPage';
import DepartmentPage2 from './pages/DepartmentPage2';
import NotFoundPage from './pages/NotFoundPage';
import RegistrationModal from './components/RegistrationModal';
import AdminPage from './pages/AdminPage';
// import Admin from './pages/Admin';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path='/' element={<HomePage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path="department/:dept" element={<DepartmentPage />} />
          <Route path="departmentpage/:dept" element={<DepartmentPage2 />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="/home" element={<Navigate to="/" replace />} />
      </Routes>
      <RegistrationModal />
    </>
  );
}

export default App;