import { Link, User } from "@heroui/react";
import { useContacts } from "../context/ContactsContext";

const Contacts = () => {
  const { contacts } = useContacts();

  return (
    <div className="flex flex-col gap-3">
      <h2>Your Contacts</h2>
      {contacts.map((contact) => (
        <User
          key={contact.id}
          avatarProps={{ src: contact.photo, size: "lg" }}
          description={
            <div className="flex flex-col">
              <Link href={`tel:${contact.phone}`}>{contact.phone}</Link>
              <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
            </div>
          }
          name={contact.firstName}
        />
      ))}
    </div>
  );
};

export default Contacts;
