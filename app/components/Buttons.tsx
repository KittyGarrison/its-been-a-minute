import {
  Button,
  Divider,
  Navbar,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";
import SparkleIcon from "./svgs/SparkleIcon";
import ChatBubbleIcon from "./svgs/ChatBubbleIcon";
import PhoneIcon from "./svgs/PhoneIcon";
import CopyIcon from "./svgs/CopyIcon";
import CancelIcon from "./svgs/CancelIcon";
import CheckmarkIcon from "./svgs/CheckmarkIcon";
import HomeIcon from "./svgs/HomeIcon";
import ContactsIcon from "./svgs/ContactsIcon";
import SettingsIcon from "./svgs/SettingsIcon";

const Buttons = () => {
  return (
    <div className="flex flex-col gap-15">
      <div>
        <h2>Card - Front Buttons</h2>
        <div className="flex flex-col gap-2">
          <Button
            color="danger"
            endContent={<SparkleIcon />}
            type="button"
            onPress={() => {}}
          >
            Give a minute
          </Button>
          <Button color="default" type="button" onPress={() => {}}>
            Skip
          </Button>
        </div>
      </div>
      <div>
        <h2>Card - Back Buttons</h2>
        <div className="flex flex-col gap-2">
          <Button
            color="success"
            startContent={<CopyIcon />}
            type="button"
            onPress={() => {}}
          >
            Copy Starter Prompt
          </Button>
          <Button
            color="default"
            startContent={<ChatBubbleIcon />}
            type="button"
            variant="flat"
            onPress={() => {}}
          >
            Open SMS
          </Button>
          <Button
            color="danger"
            startContent={<PhoneIcon />}
            type="button"
            onPress={() => {}}
          >
            Initiate a Call
          </Button>
          <Divider />
          <div className="flex gap-2">
            <Button
              className="w-full"
              startContent={<CancelIcon />}
              type="button"
              onPress={() => {}}
            >
              Cancel
            </Button>
            <Button
              className="w-full"
              color="success"
              startContent={<CheckmarkIcon />}
              type="button"
              variant="flat"
              onPress={() => {}}
            >
              Done
            </Button>
          </div>
        </div>
      </div>
      <div>
        <h2>Menu Buttons</h2>
        <Navbar>
          <NavbarContent>
            <NavbarItem>
              <Button
                aria-label="Skip this contact for now"
                className="flex flex-col gap-0 p-1 m-0 h-auto"
                color="default"
                startContent={<HomeIcon />}
                type="button"
                variant="light"
                onPress={() => {}}
              >
                Home
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button
                aria-label="Skip this contact for now"
                className="flex flex-col gap-0 p-1 m-0 h-auto"
                color="default"
                startContent={<ContactsIcon />}
                type="button"
                variant="light"
                onPress={() => {}}
              >
                Contacts
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button
                aria-label="Skip this contact for now"
                className="flex flex-col gap-0 p-1 m-0 h-auto"
                color="default"
                startContent={<SettingsIcon />}
                type="button"
                variant="light"
                onPress={() => {}}
              >
                Settings
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>
    </div>
  );
};

export default Buttons;
