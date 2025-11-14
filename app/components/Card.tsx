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
import { CTAButton } from "./CTAButton";

export function Card() {
  const {
    currentContact
  } = useContacts();

  if (!currentContact) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-gray-500">No contacts to display</p>
      </div>
    );
  }


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
            {/* Last Contacted Date */}
            {currentContact.lastContacted && (
              <ContactInfo
                name="Last Contacted Date"
                value={formatDate(currentContact.lastContacted)} />
            )}
          </div>
          <div>
            <CTAButton />
          </div>
        </div>
      </div>
    </div>
  );
}
