import { StyledCard } from "@/app/components/StyledCard/StyledCard";

export default function DemoCardPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-8"
      style={{ background: "#2F5131" }} // sap green backdrop
    >
      <StyledCard
        imageUrl="https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1200&auto=format&fit=crop"
        message="It's been a minute, reach out today"
      />
    </div>
  );
}
