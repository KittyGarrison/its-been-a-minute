"use client";

import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Contacts from "./components/Contacts";
import CardStack from "./components/CardStack";
import Login from './components/Login';

export default function Home() {
  const [page, setPage] = useState<string>();

  useEffect(() => {
    window.scroll(0, 0);
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case "home":
        return <CardStack />;
      case "contacts":
        return <Contacts />;
      default:
        return <Login loginClick={() => setPage('home')} />;
    }
  };

  return (
    <div>
      <Nav
        homeClick={() => setPage("home")}
        contactsClick={() => setPage("contacts")}
      />
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center">
        {renderPage()}
      </div>
    </div>
  );
}
