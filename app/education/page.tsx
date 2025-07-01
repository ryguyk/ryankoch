import Pills from "@/components/Pills/Pills";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import React from "react";
import PageSection from "@/components/PageSection";
import { PageSubsectionProps } from "@/components/PageSubsection";

type EducationProps = {
  institution: string;
  location: string;
  degree?: string;
  period?: string;
  degreeDate?: string;
  gpa?: string;
  majors?: string[];
  minors?: string[];
}

const education: EducationProps[] = [
  {
    institution: "St. Cloud State University",
    degree: "Bachelor of Science",
    period: "September 2001 - May 2006",
    majors: ["Computer Science"],
    minors: ["Mathematics", "Spanish"],
    location: "St. Cloud, MN",
    gpa: "4.0"
  }
];

export default function EducationPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-h-500 min-h-screen">
        {/* Main Content */}
        <main className="p-6 pb-24">
            {education.map(({
              institution,
              location,
              degree,
              period,
              degreeDate,
              gpa,
              majors,
              minors,
            }, index) => {
            let subsections = [];

            if (degree) {
              const degreeSubsection: PageSubsectionProps = {
                headingLevel: 'h3',
                heading1: degreeDate ? degree : 'Degree',
                tags: degreeDate ? [degreeDate] : [degree],
              };
              subsections.push(degreeSubsection);
            }
            
            if (majors) {
              const majorSubsection: PageSubsectionProps = {
                headingLevel: 'h3',
                heading1: majors.length > 1 ? 'Majors' : 'Major',
                tags: majors,
              };
              subsections.push(majorSubsection);
            }

            if (minors) {
              const minorSubsection: PageSubsectionProps = {
                headingLevel: 'h3',
                heading1: minors.length > 1 ? 'Minors' : 'Minor',
                tags: minors,
              };
              subsections.push(minorSubsection);
            }
            
            if (gpa) {
              const gpaSubsection: PageSubsectionProps = {
                headingLevel: 'h3',
                heading1: 'GPA',
                tags: [gpa],
              };
              subsections.push(gpaSubsection);
            }

            return (
              <PageSection
                key={index}
                headingLevel="h2"
                icon={GraduationCap}
                heading={institution}
                subheading1={location}
                subheading1Icon={MapPin}
                pageSubsections={subsections}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
