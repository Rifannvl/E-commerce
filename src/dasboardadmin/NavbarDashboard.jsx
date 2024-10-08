import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";

export default function NavbarDashboard() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/home">
          <svg
            id="logo-29"
            width="154"
            viewBox="0 0 154 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform transform hover:scale-105"
          >
            <path
              d="M51.439 28V10.888H48.633V28H51.439Z"
              className="ccustom"
              fill="#fff"
            />
            <path
              d="M53.1564 22.296C53.1564 25.792 55.5024 28.276 59.0674 28.276C62.6324 28.276 64.9784 25.792 64.9784 22.296C64.9784 18.8 62.6324 16.316 59.0674 16.316C55.5024 16.316 53.1564 18.8 53.1564 22.296ZM55.9854 22.296C55.9854 20.249 57.2044 18.823 59.0674 18.823C60.9304 18.823 62.1494 20.249 62.1494 22.296C62.1494 24.32 60.9304 25.769 59.0674 25.769C57.2044 25.769 55.9854 24.32 55.9854 22.296Z"
              className="ccustom"
              fill="#fff"
            />
            <path
              d="M65.9222 22.066C65.9222 25.378 68.0612 27.77 71.2582 27.77C72.9142 27.77 74.3402 27.103 75.0532 25.999V27.931C75.0532 29.794 73.8802 31.036 71.9252 31.036C70.1772 31.036 68.9812 30.185 68.8202 28.69H65.9912C66.3592 31.657 68.6362 33.589 71.7642 33.589C75.4442 33.589 77.7902 31.174 77.7902 27.425V16.638H75.3062L75.1452 18.179C74.4552 16.983 73.0292 16.27 71.3502 16.27C68.1072 16.27 65.9222 18.731 65.9222 22.066ZM68.7742 21.997C68.7742 20.111 69.9702 18.731 71.7412 18.731C73.6732 18.731 74.9612 20.134 74.9612 21.997C74.9612 23.883 73.6732 25.332 71.7412 25.332C69.9932 25.332 68.7742 23.906 68.7742 21.997Z"
              className="ccustom"
              fill="#fff"
            />
            <path
              d="M79.1788 22.296C79.1788 25.792 81.5248 28.276 85.0898 28.276C88.6548 28.276 91.0008 25.792 91.0008 22.296C91.0008 18.8 88.6548 16.316 85.0898 16.316C81.5248 16.316 79.1788 18.8 79.1788 22.296ZM82.0078 22.296C82.0078 20.249 83.2268 18.823 85.0898 18.823C86.9528 18.823 88.1718 20.249 88.1718 22.296C88.1718 24.32 86.9528 25.769 85.0898 25.769C83.2268 25.769 82.0078 24.32 82.0078 22.296Z"
              className="ccustom"
              fill="#fff"
            />
          </svg>
        </Link>

        <div className="flex items-center gap-4 text-lg">
          <LogoutButton />
        </div>
      </div>
    </header>
  );
}
