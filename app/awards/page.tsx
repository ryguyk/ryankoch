import Pills from "@/components/Pills/Pills";
import { Medal, Trophy, MapPin, Calendar } from "lucide-react";
import React, { ComponentType } from 'react';
import IconHeading from "@/components/IconHeading";
import PageSection from "@/components/PageSection";
import { Subheading2 } from "@/components/HeadingWithSubheading/HeadingWithSubheading.stories";

type AwardSubsectionProps = {
  heading: string;
  subheading?: string;
  tags?: string[];
  description?: string[];
}

type AwardProps = {
  heading: string,
  subheading?: string,
  subheadingIcon?: ComponentType<{ className?: string }>;
  subsections: AwardSubsectionProps[];
}

const awards: AwardProps[] = [
  {
    heading: '2016 Olympic Games',
    subheading: 'Rio de Janeiro',
    subheadingIcon: MapPin,
    subsections: [
      {
        heading: 'Personal Coach',
        tags: ['Track & Field'],
        description: [
          'Coached wife, Olympian Heather Miller-Koch, for six years leading up to and including qualification to the 2016 Olympic Games in Rio de Janeiro, Brazil. Oversaw all aspects of training design and execution.',
          'This was a multi-year pursuit that demanded absolute precision, resilience, and emotional endurance, blending expert-level knowledge of physiology, biomechanics, and human performance with the relentless day-to-day grind of elite sport. The physical, mental, and relational demands were immense. It required an unwavering commitment that shaped nearly every aspect of our lives.',
          'I consider this the greatest achievement of my life.',
        ],
      }
    ]
  },
  {
    heading: 'Intercollegiate Athletics',
    subheading: 'St. Cloud State University',
    subsections: [
      {
        heading: '5x First-Team Academic All-American',
        tags: ['Track & Field (3)', 'Football (2)'],
      },
      {
        heading: 'NCAA Division II National Student-Athlete of the Year',
        tags: ['NCAA'],
      },
      {
        heading: 'Athletic Hall of Fame',
        tags: ['Inducted 2025'],
      },
    ],
  },
];

export default function AwardsPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-h-500 min-h-screen">
        <main className="p-6 pb-24">
          {awards.map(({
            heading,
            subheading,
            subheadingIcon,
            subsections,
          }, index) => (
            <PageSection
              key={index}
              icon={Medal}
              heading={heading}
              headingLevel="h2"
              subheading2={subheading}
              subheading2Icon={subheadingIcon}
              pageSubsections={subsections.map(subsection => ({
                heading1: subsection.heading,
                subheading2: subsection.subheading,
                tags: subsection.tags,
                description: subsection.description,
              }))}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
