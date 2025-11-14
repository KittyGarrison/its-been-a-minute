"use client";

import React, { createContext, useContext, useState } from "react";

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  phone?: string;
  email?: string;
  birthday?: string;
  lastContacted?: string;
  followUpDate?: string;
  notes?: string;
  photo?: string;
  tags?: string[];
}

interface ContactsContextType {
  contacts: Contact[];
  currentContact: Contact | null;
  addContact: (contact: Contact) => void;
  removeContact: (id: string) => void;
  updateContact: (id: string, updates: Partial<Contact>) => void;
  setCurrentContact: (contact: Contact | null) => void;
  nextContact: () => void;
  skipContact: () => void;
  snoozeContact: (date: string) => void;
}

const ContactsContext = createContext<ContactsContextType | undefined>(
  undefined
);

export function ContactsProvider({ children }: { children: React.ReactNode }) {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: "1",
      firstName: "Sarah",
      lastName: "Chen",
      phone: "555-0101",
      email: "sarah@example.com",
      birthday: "1990-05-15",
      lastContacted: "2024-10-01",
      followUpDate: "2024-12-01",
      notes: "Loves hiking and photography",
      tags: ["friend", "birthday-soon"],
    },
    {
      id: "2",
      firstName: "James",
      lastName: "Rodriguez",
      phone: "555-0102",
      email: "james@example.com",
      birthday: "1988-11-22",
      lastContacted: "2024-08-15",
      followUpDate: "2024-12-15",
      notes: "College roommate, lives in Austin",
      tags: ["friend", "college"],
    },
  ]);

  const [currentContact, setCurrentContact] = useState<Contact | null>(
    contacts[0] || null
  );

  const addContact = (contact: Contact) => {
    setContacts((prev) => [...prev, contact]);
  };

  const removeContact = (id: string) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  const updateContact = (id: string, updates: Partial<Contact>) => {
    setContacts((prev) =>
      prev.map((c) => (c.id === id ? { ...c, ...updates } : c))
    );
    if (currentContact?.id === id) {
      setCurrentContact({ ...currentContact, ...updates });
    }
  };

  const nextContact = () => {
    if (!currentContact) return;
    const currentIndex = contacts.findIndex((c) => c.id === currentContact.id);
    if (currentIndex < contacts.length - 1) {
      setCurrentContact(contacts[currentIndex + 1]);
    }
  };

  const skipContact = () => {
    nextContact();
  };

  const snoozeContact = (date: string) => {
    if (!currentContact) return;
    updateContact(currentContact.id, { followUpDate: date });
    nextContact();
  };

  const value: ContactsContextType = {
    contacts,
    currentContact,
    addContact,
    removeContact,
    updateContact,
    setCurrentContact,
    nextContact,
    skipContact,
    snoozeContact,
  };

  return (
    <ContactsContext.Provider value={value}>
      {children}
    </ContactsContext.Provider>
  );
}

export function useContacts() {
  const context = useContext(ContactsContext);
  if (context === undefined) {
    throw new Error("useContacts must be used within a ContactsProvider");
  }
  return context;
}
