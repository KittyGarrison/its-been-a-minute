"use client";

import CardStack from "./components/CardStack";
import { CardWrapper } from "./components/CardWrapper";

export default function Home() {
  // @TODO: match back and front card height
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center p-4">
      <CardStack />
    </div>
  );
}
