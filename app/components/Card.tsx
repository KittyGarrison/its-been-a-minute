"use client";

// TODO: temp color scheme - didnt know what colors to use so picked red shades

import { useContacts } from "@/app/context/ContactsContext";
import { CalendarIcon } from "@/app/components/svgs/CalendarIcon";
import { ContactIcon } from "@/app/components/svgs/ContactIcon";
import { useState } from "react";
import { Button } from "@heroui/react";
import { formatDate } from "../lib/utils/date";
import { useCardActions } from "../hooks/useCardActions"


export function Card() {
  const {
    currentContact
  } = useContacts();

  const {
    showSnoozeModal,
    snoozeDate,
    setSnoozeDate,
    setShowSnoozeModal,
    daysSinceContact,
    handleContact,
    handleSMS,
    handleSkip,
    handleSnooze
  } = useCardActions()

  const [showFront, setShowFront] = useState(true)

  if (!currentContact) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-gray-500">No contacts to display</p>
      </div>
    );
  }

  const handleCardClick = () => {
    if (showSnoozeModal) return
    setShowFront(true)
  }

  const handleCTAClick = () => {
    setShowFront(false)
  }

  return showFront ? (
    // FRONT CARD
    <div className="w-full max-w-md mx-auto p-4" onClick={handleCardClick}>
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
              <div>
                <p className="text-emerald-700 font-semibold">Phone</p>
                <p className="text-emerald-900">{currentContact.phone}</p>
              </div>
            )}

            {/* Birthday */}
            {currentContact.birthday && (
              <div>
                <p className="text-emerald-700 font-semibold">Birthday</p>
                <p className="text-emerald-900">{formatDate(currentContact.birthday)}</p>
              </div>
            )}

            {/* Last Contacted */}
            {daysSinceContact !== null && (
              <div>
                <p className="text-emerald-700 font-semibold">Last Contact</p>
                <p className="text-emerald-900">
                  {daysSinceContact === 0
                    ? "Today"
                    : `${daysSinceContact} days ago`}
                </p>
              </div>
            )}

            {/* Follow-up Date */}
            {currentContact.followUpDate && (
              <div>
                <p className="text-emerald-700 font-semibold">Follow-up</p>
                <p className="text-emerald-900">
                  {formatDate(currentContact.followUpDate)}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-emerald-50 border-t border-emerald-200 p-4">
          <div className="grid grid-cols-2 gap-3">
            {/* Give it a minute Button */}
            <Button
              className="bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors"
              fullWidth
              onClick={handleCTAClick}
            >
              Give it a minute!
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
    </div>
  ) : (
    // BACK CARD
    <div className="w-full max-w-md mx-auto p-4" onClick={handleCardClick}>
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
              <div>
                <p className="text-emerald-700 font-semibold">Phone</p>
                <p className="text-emerald-900">{currentContact.phone}</p>
              </div>
            )}

            {/* Birthday */}
            {currentContact.birthday && (
              <div>
                <p className="text-emerald-700 font-semibold">Birthday</p>
                <p className="text-emerald-900">{formatDate(currentContact.birthday)}</p>
              </div>
            )}

            {/* Last Contacted */}
            {daysSinceContact !== null && (
              <div>
                <p className="text-emerald-700 font-semibold">Last Contact</p>
                <p className="text-emerald-900">
                  {daysSinceContact === 0
                    ? "Today"
                    : `${daysSinceContact} days ago`}
                </p>
              </div>
            )}

            {/* Follow-up Date */}
            {currentContact.followUpDate && (
              <div>
                <p className="text-emerald-700 font-semibold">Follow-up</p>
                <p className="text-emerald-900">
                  {formatDate(currentContact.followUpDate)}
                </p>
              </div>
            )}
          </div>

          {/* Notes */}
          {currentContact.notes && (
            <div className="my-4 p-3 bg-emerald-50 rounded border border-emerald-200">
              <p className="text-xs text-emerald-700 font-semibold mb-1">NOTES</p>
              <p className="text-sm text-emerald-900">{currentContact.notes}</p>
            </div>
          )}

          {/* Tags */}
          {currentContact.tags && currentContact.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 my-4">
              {currentContact.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
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
  )
}
