"use client";

import { useState } from "react";
import Nav from "./components/Nav";

export default function Home() {
  const [showHome, setShowHome] = useState<boolean>(false);
  const [showContacts, setShowContacts] = useState<boolean>(false);
  const [showSettings, setShowsettings] = useState<boolean>(false);

  return (
    <div>
      <Nav
        homeClick={() => setShowHome(!showHome)}
        contactsClick={() => setShowContacts(!showContacts)}
        settingsClick={() => setShowsettings(!showSettings)}
      />
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center">
        Hello World!
      </div>
    </div>
  );
}
