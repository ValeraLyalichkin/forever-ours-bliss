import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Invitation } from "@/components/sections/Invitation";
import { DateBlock } from "@/components/sections/DateBlock";
import { Programme } from "@/components/sections/Programme";
import { Venue } from "@/components/sections/Venue";
import { DressCode } from "@/components/sections/DressCode";
import { Rsvp } from "@/components/sections/Rsvp";
import { Countdown } from "@/components/sections/Countdown";
import birdsLine from "@/assets/birds-line.png";

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
          <path
            d="M20,100 C120,100 180,100 240,100 C260,100 270,90 265,75 C258,55 235,55 225,75 C215,100 230,135 265,140 C300,144 330,120 345,95 C355,78 365,60 380,60 C395,60 400,78 388,95 C372,118 345,135 345,110 C345,90 365,72 385,72 C410,72 425,95 415,118 C405,140 378,148 365,135 C352,122 365,95 390,90 C420,84 445,108 455,90 C465,72 445,55 430,68 C418,80 425,108 450,118 C478,128 510,108 525,85 C538,65 555,60 565,75 C575,90 560,118 535,118 C515,118 510,98 525,85 C545,68 575,72 590,90 C610,115 645,118 680,108 C720,98 760,100 780,100"
            fill="none"
            stroke="#2F4156"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </main>
  );
}
