import Pill, { Pills } from "@/components/Pill";
import { GraduationCap, Trophy, MapPin, Calendar } from "lucide-react";
import React, { ReactNode, ComponentType, JSX } from "react";

export default function EducationPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-h-500 min-h-screen">
        {/* Main Content */}
        <main className="p-6 pb-24">
          {/* University Section */}
          <div className="border-b-1 text-foreground p-6 pb-10 mb-6">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-bold mb-1 text-foreground-bright">St. Cloud State University</h2>
                <div className="flex items-center text-sm mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>St. Cloud, MN</span>
                </div>
              </div>
            </div>

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
                <Pill label="Computer Science" />
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
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-bold mb-1 text-foreground-bright">Activities & Awards</h2>
                <div className="flex items-center text-sm mb-2">
                  <span>Intercollegite Athletics</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-md mt-4 mb-2 font-medium text-foreground-bright">5x First-Team Academic All-American</p>
                <div className="flex flex-wrap gap-2">
                  <Pills labels={["Track & Field (3)", "Football (2)"]} variant="secondary" />
                </div>
                 
                <p className="text-md mt-4 mb-2 font-medium text-foreground-bright">Athletic Hall of Fame</p>
                <Pill label="Inducted 2025" variant="secondary" />

              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
