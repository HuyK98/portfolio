import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { AlertProvider } from "./context/AlertContext";
import "./App.css";
import "./styles/base.css";

import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Home from "./components/pages/Home/Home";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="layout">
          <Header />

          <main className="container content">
            <AlertProvider>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </AlertProvider>
          </main>

          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}
