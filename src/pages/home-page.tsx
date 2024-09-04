// src/pages/HomePage.tsx
import { FC } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/button/landing-page-button";

const HomePage: FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex justify-center items-center">
        <Button />
      </main>
    </div>
  );
};

export default HomePage;
