"use client";

import { useState } from "react";
import Nav from "./components/Nav";
import Contacts from "./components/Contacts";
import { CardWrapper } from "./components/CardWrapper";

export default function Home() {
  const [page, setPage] = useState<string>();

  const renderPage = () => {
    switch (page) {
      case "contacts":
        return <Contacts />;
      default:
        return <CardWrapper />;
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
