import { Button } from "@heroui/react";
import { DetailedReactHTMLElement, HTMLAttributes, ReactNode } from "react";

interface Props {
  children: ReactNode;
  spinner: ReactNode;
  styles: string;
  startContent: DetailedReactHTMLElement<
    HTMLAttributes<HTMLElement>,
    HTMLElement
  > | null;
  endContent: DetailedReactHTMLElement<
    HTMLAttributes<HTMLElement>,
    HTMLElement
  > | null;
  isLoading: boolean;
  spinnerPlacement: "end" | "start";
  spinnerSize: "md" | "sm" | "lg" | undefined;
  disableRipple: boolean;
  isIconOnly: boolean;
  color: "primary" | "secondary" | undefined;
  type: "button" | "submit" | "reset";
}

const AppButton = (props: Props) => {
  const {
    children,
    spinner,
    styles,
    startContent,
    endContent,
    isLoading,
    spinnerPlacement,
    spinnerSize,
    disableRipple,
    isIconOnly,
    color,
    type,
  } = props;
  return (
    <Button type={type} className={`${color}`}>
      {children}
    </Button>
  );
};

export default AppButton;
