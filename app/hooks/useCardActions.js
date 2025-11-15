import { useState } from 'react'
import { useContacts } from "../context/ContactsContext";

export function useCardActions() {
  const {
    currentContact,
    updateContact,
    nextContact,
    skipContact,
    snoozeContact,
  } = useContacts();

  const [showSnoozeModal, setShowSnoozeModal] = useState(false);
  const [snoozeDate, setSnoozeDate] = useState("");


  // Calculate days since last contact
  const daysSinceContact = currentContact.lastContacted
    ? Math.floor(
      (new Date().getTime() -
        new Date(currentContact.lastContacted).getTime()) /
      (1000 * 60 * 60 * 24)
    )
    : null;


  // Handle contact/call functionality
  const handleContact = () => {
    if (currentContact.phone) {
      // Copy starter message to clipboard
      const starterMessages = [
        "It's been a minute! How are you?",
        "Hey! How have you been?",
        "Missing your face! Let's catch up",
      ];
      const randomStarter =
        starterMessages[Math.floor(Math.random() * starterMessages.length)];

      navigator.clipboard.writeText(randomStarter);

      // Update last contacted date
      updateContact(currentContact.id, {
        lastContacted: new Date().toISOString().split("T")[0],
      });

      // Optionally initiate call on mobile
      if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        window.location.href = `tel:${currentContact.phone}`;
      } else {
        // Show confirmation that message was copied
        alert("Starter message copied to clipboard: " + randomStarter);
      }
    }
    nextContact();
  };

  // Handle SMS functionality
  const handleSMS = () => {
    if (currentContact.phone) {
      window.location.href = `sms:${currentContact.phone}`;
      updateContact(currentContact.id, {
        lastContacted: new Date().toISOString().split("T")[0],
      });
      nextContact();
    }
  };

  // Handle skip functionality
  const handleSkip = () => {
    skipContact();
  };

  // Handle snooze functionality
  const handleSnooze = () => {
    if (snoozeDate) {
      snoozeContact(snoozeDate);
      setShowSnoozeModal(false);
      setSnoozeDate("");
    }
  };

  return {
    showSnoozeModal,
    snoozeDate,
    setSnoozeDate,
    setShowSnoozeModal,
    daysSinceContact,
    handleContact,
    handleSMS,
    handleSkip,
    handleSnooze
  }
}