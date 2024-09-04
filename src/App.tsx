import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing-page";
const App : FC = () => {

  return (
    <>
    <div className=" h-screen bg-cover bg-center bg-[url('./assets/istockphoto-1320162065-612x612.jpg')] " >
         <Routes>
          <Route path="/" element={<LandingPage/>} />
         </Routes>
    </div>
    </>
  )
}
export default App