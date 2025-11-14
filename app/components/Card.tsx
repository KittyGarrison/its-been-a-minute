"use client";

// TODO: temp color scheme - didnt know what colors to use so picked red shades

import { useContacts } from "@/app/context/ContactsContext";
import { CalendarIcon } from "@/app/components/svgs/CalendarIcon";
import { ContactIcon } from "@/app/components/svgs/ContactIcon";
import { useState } from "react";
import { Button } from "@heroui/react";
import { formatDate } from "../lib/utils/date";
import { ContactNotes } from "./ContactNotes";
import { ContactTags } from "./ContactTags";
import { ContactInfo } from "./ContactInfo";

export function Card() {
  const {
    currentContact,
    updateContact,
    nextContact,
    skipContact,
    snoozeContact,
  } = useContacts();

  const [showSnoozeModal, setShowSnoozeModal] = useState(false);
  const [snoozeDate, setSnoozeDate] = useState("");

  if (!currentContact) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-gray-500">No contacts to display</p>
      </div>
    );
  }

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

  return (
    <div className="w-full max-w-md mx-auto p-4">
      {/* Card Container */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-emerald-200">
        {/* Header with photo */}
        <div className="relative h-48 bg-gradient-to-b from-emerald-500 to-emerald-300 flex items-center justify-center">
          {currentContact.photo ? (
            <img
              src={currentContact.photo}
              alt={`${currentContact.firstName} ${currentContact.lastName}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-white opacity-50">
              <ContactIcon />
            </div>
          )}
        </div>

        {/* Contact Info Section */}
        <div className="p-6">
          {/* Name */}
          <h2 className="text-2xl font-bold text-emerald-900 mb-1">
            {currentContact.firstName} {currentContact.lastName}
          </h2>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-4 my-4 text-sm">
            {/* Phone */}
            {currentContact.phone && (
              <ContactInfo
                name="Phone"
                value={currentContact.phone} />
            )}

            {/* Birthday */}
            {currentContact.birthday && (
              <ContactInfo
                name="Birthday"
                value={formatDate(currentContact.birthday)} />
            )}

            {/* Last Contacted */}
            {daysSinceContact !== null && (
              <ContactInfo
                name="Last Contact"
                value={daysSinceContact === 0
                  ? "Today"
                  : `${daysSinceContact} days ago`} />
            )}

            {/* Follow-up Date */}
            {currentContact.followUpDate && (
              <ContactInfo
                name="Follow-up"
                value={formatDate(currentContact.followUpDate)} />
            )}
          </div>

          {/* Notes */}
          {currentContact.notes && <ContactNotes notes={currentContact.notes} />}

          {/* Tags */}
          {currentContact.tags && currentContact.tags.length > 0 && <ContactTags tags={currentContact.tags} />}
        </div>

        {/* Action Buttons */}
        <div className="bg-emerald-50 border-t border-emerald-200 p-4">
          <div className="grid grid-cols-2 gap-3 mb-3">
            {/* Contact Button */}
            <Button
              onClick={handleContact}
              className="bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors"
              fullWidth
            >
              Contact
            </Button>

            {/* SMS Button */}
            {currentContact.phone && (
              <Button
                onClick={handleSMS}
                className="bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-colors"
                fullWidth
              >
                SMS
              </Button>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* Snooze Button */}
            <Button
              onClick={() => setShowSnoozeModal(true)}
              className="bg-emerald-400 text-white font-semibold hover:bg-emerald-500 transition-colors"
              fullWidth
            >
              Snooze
            </Button>

            {/* Skip Button */}
            <Button
              onClick={handleSkip}
              className="bg-teal-500 text-white font-semibold hover:bg-teal-600 transition-colors"
              fullWidth
            >
              Skip
            </Button>
          </div>
        </div>
      </div>

      {/* Snooze Modal */}
      {showSnoozeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full border border-emerald-300">
            <h3 className="text-lg font-bold text-emerald-900 mb-4">
              Snooze until when?
            </h3>
            <input
              type="date"
              value={snoozeDate}
              onChange={(e) => setSnoozeDate(e.target.value)}
              className="w-full px-3 py-2 border border-emerald-300 rounded mb-4 focus:outline-none focus:border-emerald-500"
            />
            <div className="flex gap-3">
              <Button
                onClick={() => {
                  setShowSnoozeModal(false);
                  setSnoozeDate("");
                }}
                className="flex-1 bg-gray-300 text-gray-800 font-semibold hover:bg-gray-400 transition-colors"
              >
                Cancel
              </Button>
              <Button
                onClick={handleSnooze}
                disabled={!snoozeDate}
                className="flex-1 bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Snooze
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
