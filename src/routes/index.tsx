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
      <div className="bg-cream w-full pb-10 px-6">
        <svg
          viewBox="0 0 800 200"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid meet"
          className="block w-full h-auto select-none"
        >
          {/* long flowing baseline swash that enters and exits the word */}
          <path
            d="M20,108 C160,108 240,108 300,104 M500,104 C560,108 640,108 780,108"
            fill="none"
            stroke="#2F4156"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
          <text
            x="400"
            y="130"
            textAnchor="middle"
            fontFamily="Great Vibes, cursive"
            fontSize="150"
            fill="none"
            stroke="#2F4156"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            love
          </text>
        </svg>
      </div>
    </main>
  );
}
