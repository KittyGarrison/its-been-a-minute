import { Button } from "@heroui/react";

type CTAButtonProps = {
  handleClick: () => void;
};

export const CTAButton = ({ handleClick }: CTAButtonProps) => {
  return (
    <Button
      className="bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors"
      fullWidth
      onClick={handleClick}
    >
      Give it a minute!
    </Button>
  )
}