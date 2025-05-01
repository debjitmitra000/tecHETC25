import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-gradient-2">404</h1>
        <h2 className="text-2xl md:text-4xl font-bold text-cyan-500 mt-4">Page Not Found</h2>
        <p className="text-gray-500 mt-4 max-w-lg mx-auto">
          Sorry, we couldn't find the page you're looking for. The page might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>
      </div>
      {/* <div className="fixed top-0 left-0 w-screen h-screen m-0 p-0">
  <img
    src="/images/nf.png"
    alt="You are lost, mah friend. Okk nice, now fcuk off."
    className="w-full h-full object-cover"
  />
</div> */}
    </div>
  );
};

export default NotFoundPage;