// src/layouts/MainLayout.jsx
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-[#171717]">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}