import { Button } from "@heroui/react";
import { ChangeEvent } from "react";

interface SnoozeModalProps {
  snoozeDate: string;
  handleSnoozeDate: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSnooze: () => void;
  setShowSnoozeModal: (show: boolean) => void;
  setSnoozeDate: (date: string) => void;
}

export const SnoozeModal = ({
  snoozeDate,
  handleSnoozeDate,
  handleSnooze,
  setShowSnoozeModal,
  setSnoozeDate,
}: SnoozeModalProps) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-lg p-6 max-w-sm w-full border0">
      <h3 className="text-lg font-bold mb-4">Snooze until when?</h3>
      <input
        type="date"
        value={snoozeDate}
        onChange={handleSnoozeDate}
        className="w-full px-3 py-2 border rounded mb-4 focus:outline-none"
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
          className="flex-1 text-white font-semibold transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Snooze
        </Button>
      </div>
    </div>
  </div>
);
