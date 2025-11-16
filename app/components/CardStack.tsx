"use client";

import { useEffect, useState, useRef } from "react";
import ContactCard from "./ContactCard";
import { useContacts } from "../context/ContactsContext";
import { MAX_CARDS_PER_BATCH } from "@/config/constants";
import { RestPage } from "./RestPage";

const CardStack = () => {
  const shuffleAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    shuffleAudioRef.current = new Audio("/audio/cards_shuffle.mp3");
    shuffleAudioRef.current.play();
  }, []);

  const { contacts, currentContact } = useContacts()

  const indexContact = currentContact
    ? contacts.indexOf(currentContact)
    : -1;

  // not the firstone (index 0) && modulo batch trigger
  const isBatchCompleted = (indexContact > 1) && ((indexContact) % MAX_CARDS_PER_BATCH === 0)

  return (
    <>
      {
        isBatchCompleted ? <RestPage /> : <ContactCard />
      }
    </>
  );
};

export default CardStack;
