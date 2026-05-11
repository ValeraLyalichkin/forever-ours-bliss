import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Invitation } from "@/components/sections/Invitation";
import { DateBlock } from "@/components/sections/DateBlock";
import { Programme } from "@/components/sections/Programme";
import { Venue } from "@/components/sections/Venue";
import { DressCode } from "@/components/sections/DressCode";
import { Rsvp } from "@/components/sections/Rsvp";
import { Countdown } from "@/components/sections/Countdown";


export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Invitation />
      <DateBlock />
      <Programme />
      <Venue />
      <DressCode />
      <Rsvp />
      <Countdown />
    </main>
  );
}
