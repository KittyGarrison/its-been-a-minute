"use client";

// TODO: temp color scheme - didnt know what colors to use so picked red shades

import { useContacts } from "@/app/context/ContactsContext";
import { ContactIcon } from "@/app/components/svgs/ContactIcon";
import { useEffect, useState, useRef } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@heroui/react";
import { formatDate } from "../lib/utils/date";
import { useCardActions } from "../hooks/useCardActions";
import SparkleIcon from "./svgs/SparkleIcon";
import CancelIcon from "./svgs/CancelIcon";
import ChatBubbleIcon from "./svgs/ChatBubbleIcon";
import CheckmarkIcon from "./svgs/CheckmarkIcon";
import CopyIcon from "./svgs/CopyIcon";
import PhoneIcon from "./svgs/PhoneIcon";

const ContactCard = () => {
  const { currentContact, lastContact } = useContacts();

  const { daysSinceContact, handleContact, handleSMS, handleSkip } =
    useCardActions();

  // flip card state
  const [flipCard, setFlipCard] = useState<boolean>(false);

  const thwippAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    thwippAudioRef.current = new Audio("/audio/card_thwipp.wav");
  }, []);

  const playAudio = () => {
    thwippAudioRef.current?.play();
  };

  if (!currentContact) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-gray-500">No contacts to display</p>
      </div>
    );
  }

  const handleFlipCard = () => {
    setFlipCard(!flipCard);
    playAudio();
  };

  return (
    <Card>
      <CardHeader>
        <div className="text-center">
          <ContactIcon />
          <h2 className="text-xl">
            {currentContact.firstName} {currentContact.lastName}
          </h2>
        </div>
      </CardHeader>

      <Divider />

      {!flipCard && (
        <CardBody className="gap-2">
          {currentContact.phone && (
            <div>
              <p className="font-semibold">Phone</p>
              <p>{currentContact.phone}</p>
            </div>
          )}

          {currentContact.birthday && (
            <div>
              <p className="font-semibold">Birthday</p>
              <p>{formatDate(currentContact.birthday)}</p>
            </div>
          )}

          {daysSinceContact !== null && (
            <div>
              <p className="font-semibold">Last Contact</p>
              <p>
                {daysSinceContact === 0
                  ? "Today"
                  : `${daysSinceContact} days ago`}
              </p>
            </div>
          )}

          {currentContact.followUpDate && (
            <div>
              <p className="font-semibold">Follow-up</p>
              <p>{formatDate(currentContact.followUpDate)}</p>
            </div>
          )}
        </CardBody>
      )}

      <CardFooter>
        {!flipCard ? (
          <div className="flex flex-col gap-2 w-full">
            <Button
              color="danger"
              endContent={<SparkleIcon />}
              type="button"
              onPress={handleFlipCard}
              fullWidth
            >
              Give a minute
            </Button>
            {
              !lastContact && <Button
                color="default"
                type="button"
                onPress={handleSkip}
                fullWidth
              >
                Skip
              </Button>
            }
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <Button
              color="success"
              startContent={<CopyIcon />}
              type="button"
              onPress={handleContact}
              fullWidth
            >
              Copy Starter Prompt
            </Button>
            <Button
              color="default"
              startContent={<ChatBubbleIcon />}
              type="button"
              variant="flat"
              onPress={handleSMS}
              fullWidth
            >
              Open SMS
            </Button>
            <Button
              color="danger"
              startContent={<PhoneIcon />}
              type="button"
              onPress={handleSMS}
              fullWidth
            >
              Initiate a Call
            </Button>
            <Divider />
            <div className="flex gap-2">
              <Button
                startContent={<CancelIcon />}
                type="button"
                onPress={() => {
                  setFlipCard(false);
                  handleSkip();
                }}
                fullWidth
              >
                Cancel
              </Button>
              <Button
                color="success"
                startContent={<CheckmarkIcon />}
                type="button"
                variant="flat"
                onPress={() => {
                  setFlipCard(false);
                  handleSkip();
                }}
                fullWidth
              >
                Done
              </Button>
            </div>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default ContactCard;
