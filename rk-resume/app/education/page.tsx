import Pills from "@/components/Pills";
import { GraduationCap, Trophy, MapPin, Calendar } from "lucide-react";
import React from "react";
import IconHeading from "@/components/IconHeading";

export default function EducationPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-h-500 min-h-screen">
        {/* Main Content */}
        <main className="p-6 pb-24">
          {/* University Section */}
          <div className="border-b-1 text-foreground p-6 pb-10 mb-6">
            <IconHeading Icon={GraduationCap} title="St. Cloud State University" SubtitleIcon={MapPin} subtitle="St. Cloud, MN" />
            <div className="space-y-3">
              <div>
                <h3 className="text-base font-semibold text-foreground-bright">Bachelor of Science</h3>
                <div className="flex items-center text-sm mt-1">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>May 2006</span>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mt-4 mb-2 text-foreground-bright">Major</p>
                <Pills labels={["Computer Science"]} />
              </div>

              <div>
                <p className="text-sm font-medium mb-2 text-foreground-bright">Minors</p>
                <div className="flex flex-wrap gap-2">
                  <Pills labels={["Mathematics", "Spanish"]} variant="secondary" />
                </div>
              </div>

              <div className="pt-2 mt-8 text-foreground-bright">
                <span className="text-lg font-medium">GPA: 4.0</span>
              </div>
            </div>
          </div>

          {/* Activities & Awards Section */}
          <div className="text-foreground p-6 mb-6">
            <IconHeading Icon={Trophy} title="Activities & Awards" subtitle="Intercollegiate Athletics" />
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
