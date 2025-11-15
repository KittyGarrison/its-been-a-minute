import { useEffect, useState, useRef } from "react";
import { Contact, useContacts } from "../context/ContactsContext";
import { MAX_CARDS_PER_BATCH } from "@/config/constants";
import { Button } from "@heroui/react";
import { CardWrapper } from "./CardWrapper";

const CardStack = () => {
  const [currentBatch, setCurrentBatch] = useState<Contact[]>([])
  const { currentContact } = useContacts()

  const prevIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!currentContact) return;

    // @TODO: is this necessary?
    // prevent adding the same contact twice by tracking the last added contact in a ref
    // if (prevIdRef.current === currentContact.id) return;
    // prevIdRef.current = currentContact.id;

    setCurrentBatch((prev) => [...prev, currentContact]);
  }, [currentContact])

  const isBatchCompleted = currentBatch.length > MAX_CARDS_PER_BATCH

  const handleResetBatch = () => {
    setCurrentBatch([])
  }

  return (
    <>
      {
        // @TODO: show rest page if isBatchCompleted
        // @TODO: no more contacts to show page when run out of contacts to display
        isBatchCompleted ? <>
          <Button onClick={handleResetBatch}> keep going </Button>
        </> : <CardWrapper />
      }
    </>
  )
}

export default CardStack;