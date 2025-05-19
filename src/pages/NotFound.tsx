
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-tyreLightGray">
        <div className="text-center max-w-md px-4">
          <h1 className="text-5xl font-bold text-tyreBlue mb-4">404</h1>
          <h2 className="text-2xl font-bold text-tyreDarkGray mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button className="bg-tyreBlue hover:bg-tyreBlue/90">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
