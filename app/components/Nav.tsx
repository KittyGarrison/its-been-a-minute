import { Button, Navbar, NavbarContent, NavbarItem } from "@heroui/react";
import ContactsIcon from "./svgs/ContactsIcon";
import HomeIcon from "./svgs/HomeIcon";
import SettingsIcon from "./svgs/SettingsIcon";

interface Props {
  homeClick?: () => void;
  contactsClick?: () => void;
  settingsClick?: () => void;
}

const Nav = (props: Props) => {
  const { homeClick, contactsClick, settingsClick } = props;

  return (
    <Navbar>
      <NavbarContent className="w-full" justify="center">
        {!homeClick && !contactsClick && !settingsClick && "It's been a minute"}
        {homeClick && (
          <NavbarItem>
            <Button
              aria-label="Skip this contact for now"
              className="flex flex-col gap-0 p-1 m-0 h-auto"
              color="default"
              startContent={<HomeIcon />}
              type="button"
              variant="light"
              onPress={homeClick}
            >
              Home
            </Button>
          </NavbarItem>
        )}
        {contactsClick && (
          <NavbarItem>
            <Button
              aria-label="Skip this contact for now"
              className="flex flex-col gap-0 p-1 m-0 h-auto"
              color="default"
              startContent={<ContactsIcon />}
              type="button"
              variant="light"
              onPress={contactsClick}
            >
              Contacts
            </Button>
          </NavbarItem>
        )}
        {settingsClick && (
          <NavbarItem>
            <Button
              aria-label="Skip this contact for now"
              className="flex flex-col gap-0 p-1 m-0 h-auto"
              color="default"
              startContent={<SettingsIcon />}
              type="button"
              variant="light"
              onPress={settingsClick}
            >
              Settings
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>
    </Navbar>
  );
};

export default Nav;
