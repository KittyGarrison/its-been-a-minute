"use client";

import React, { createContext, useContext, useState } from "react";
import { persons } from "./persons"; //TODO Use proper API implementation, this is for demo.

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  phone?: string;
  email?: string;
  birthday?: string;
  lastContacted?: string;
  lastDismissed?: string;
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
  lastContact?: boolean
}

const ContactsContext = createContext<ContactsContextType | undefined>(
  undefined,
);

export function ContactsProvider({ children }: { children: React.ReactNode }) {
  const [contacts, setContacts] = useState<Contact[]>(persons);
  const [lastContact, setLastContact] = useState(false)

  const [currentContact, setCurrentContact] = useState<Contact | null>(
    contacts[0] || null,
  );

  const addContact = (contact: Contact) => {
    setContacts((prev) => [...prev, contact]);
  };

  const removeContact = (id: string) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  const updateContact = (id: string, updates: Partial<Contact>) => {
    setContacts((prev) =>
      prev.map((c) => (c.id === id ? { ...c, ...updates } : c)),
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
    snoozeContact
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
