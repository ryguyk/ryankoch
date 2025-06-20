import Pills from "@/components/Pills";
import { Medal, Trophy, MapPin, Calendar } from "lucide-react";
import React from "react";
import IconHeading from "@/components/IconHeading";

export default function AwardsPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-h-500 min-h-screen">
        {/* Main Content */}
        <main className="p-6 pb-24">
          {/* Olympic Games */}
          <section className="border-b-1 last:border-b-0 text-foreground p-6 pb-12 mb-6">
            <IconHeading Icon={Medal} title="2016 Olympic Games" SubtitleIcon={MapPin} subtitle="Rio de Janeiro"/>
            <div className="space-y-3">
              <div>
                <p className="text-md mt-4 mb-2 font-medium text-foreground-bright">Personal Coach</p>
                <div className="flex flex-wrap gap-2">
                  <Pills labels={["Track & Field"]} />
                </div>
                <p className="mt-6 italic">
                  Coached wife, Olympian Heather Miller-Koch, for six years leading up to and including qualification to the 2016 Olympic Games in Rio de Janeiro, Brazil. 
                  Oversaw all aspects of training design and execution.
                </p>
                <p className="mt-6 italic">
                  This was a multi-year pursuit that demanded absolute precision, resilience, and emotional endurance, blending expert-level knowledge of physiology, biomechanics, and human performance 
                  with the relentless day-to-day grind of elite sport. The physical, mental, and relational demands were immense. It required an unwavering commitment that shaped nearly every aspect of our lives.
                </p>
                <p className="mt-6 italic font-bold">
                  I consider this the greatest achievement of my life.
                </p>
              </div>
            </div>
          </section>

          {/* Intercollegiate Athletics */}
          <div className="text-foreground p-6 mb-6">
            <IconHeading Icon={Trophy} title="Intercollegiate Athletics" subtitle="St. Cloud State University"/>
            <div className="space-y-3">
              <div>
                <p className="text-md mt-4 mb-2 font-medium text-foreground-bright">5x First-Team Academic All-American</p>
                <div className="flex flex-wrap gap-2">
                  <Pills labels={["Track & Field (3)", "Football (2)"]} />
                </div>
                 
                <p className="text-md mt-4 mb-2 font-medium text-foreground-bright">NCAA Division II National Student-Athlete of the Year</p>
                <Pills labels={["2006"]} />

                <p className="text-md mt-4 mb-2 font-medium text-foreground-bright">Athletic Hall of Fame</p>
                <Pills labels={["Inducted 2025"]} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
