import { Laptop, MapPin } from "lucide-react";
import React, { JSX } from "react";
import IconHeading from "@/components/IconHeading";
import Pills from "@/components/Pills";

const experiences = [
  {
    company: "Agile Six",
    location: "Remote",
    projects: [
      {
        title: "Department of Veterans Affairs - Form Engine",
        position: "Engineering Lead",
        period: "May 2024 - May 2025",
        techStack: ["React", "PHP", "Drupal 10", "GraphQL", "Ruby on Rails"],
        description: "Engineered a dynamic form-building framework that abstracted complex logic behind a user-friendly interface, enabling non-technical stakeholders to publish forms independently.",
        achievements: [
          "Conceived, architected, and independently developed the prototype that secured the project contract, transforming an abstract need into a compelling product vision.",
          "Led the client pitch, effectively communicating the product vision and technical approach that convinced stakeholders to award the contract.",
          "Directed engineering efforts with a focus on rapid, high-quality product delivery.",
          "Collaborated closely with the client product owner to shape and refine product direction.",
          "Led cross-functional team through major technical and organizational challenges to ensure successful delivery.",
          "Navigated multiple staffing changes while maintaining team momentum and project continuity.",
        ],
      },
      {
        title: "Department of Veterans Affairs - Accelerated Publishing",
        position: "Senior Full-Stack Engineer",
        period: "April 2023 - May 2024",
        techStack: ["TypeScript", "React", "Next.js", "PHP", "Drupal 9", "GraphQL", "JSON:API"],
        description: "Key contributor to a full-stack Next.js initiative that accelerated static-page build times for a site comprising tens of thousands of pages.",
        achievements: [
          "Owned complex feature development in Next.js, leveraging its inherently full-stack architecture to deliver seamless integration and robust client-server functionality.",
          "Tackled the most challenging business logic and technical problems, serving as the team’s key resource for difficult implementations.",
          "Designed and implemented advanced TypeScript mapped types to improve static analysis and reduce bugs.",
        ],
      },
      {
        title: "Department of Veterans Affairs - Sitewide Team",
        position: "Senior Full-Stack Engineer",
        period: "October 2021 - April 2023",
        techStack: ["React", "Node.js", "Liquid", "PHP", "Drupal 9", "SQL", "GraphQL"],
        description: "Front-end engineering lead on a full-stack team responsible for the Department of Veterans Affairs' public-facing website, which serves millions of Veterans and their families.",
        achievements: [
          "Led front-end engineering for a team of ~15, driving high-impact development efforts.",
          "Contributed across the full tech stack, with a leadership focus on front-end development.",
          "Collaborated across numerous external teams to improve Veterans' access to high-quality, accurate information.",
          "Provided ecosystem-wide support to front-end developers, strengthening overall code quality and developer experience.",
          "Took full ownership of architecting solutions to complex technical challenges and strategically assigned components to engineers based on their strengths and expertise.",
        ],
      }
    ],
  },
  {
    company: "Aviation International News",
    location: "Remote",
    projects: [
      {
        position: "Senior Full-Stack Engineer",
        period: "August 2013 - October 2021",
        techStack: ["React", "Next.js", "PHP", "Drupal 7", "SQL", "CSS-in-JS"],
        description: "Developed and maintained three separate company websites for a leading digital publication, ensuring high availability, performance, and a seamless user experience across all platforms.",
        achievements: [
          "Played a key role in migrating the company to a digital publication platform, significantly expanding AINonline.com’s reach as a leading aviation news site attracting thousands of additional monthly readers.",
          "Developed and maintained three company websites, all powered by Drupal CMS.",
          "Contributed over five years as a full-stack developer primarily on two traditional, coupled Drupal 7 sites, focusing heavily on custom module development.",
          "Led the greenfield development of a third, decoupled site built with Next.js, driving tech-stack decisions, architecting the front end, implementing the majority of the code, and mentoring a junior developer.",
          "Architected and engineered numerous custom React applications and widgets to address complex, domain-specific challenges.",
          "Implemented a design system from scratch to ensure UI consistency and scalability.",
          "Designed and implemented integrations with third-party services such as Stripe, AWS Cognito, and HubSpot, within a modular architecture.",
          "Solely responsible for a SQL-intensive reader-survey application, delivering a seamless survey experience and sophisticated results calculations and visualizations.",
        ],
      }
    ],
  },
  {
    company: "Strategic Insight",
    location: "New York, NY",
    projects: [
      {
        position: "VBA Developer",
        period: "August 2010 - August 2013",
        techStack: ["VBA", ".NET"],
        description: "Automated the aggregation of mutual-fund data from multiple sources and engineered a robust desktop application that enabled consumers to view and analyze the data.",
      }
    ],
  },
  {
    company: "Athletes for Success in the Classroom",
    location: "St. Cloud, MN",
    projects: [
      {
        position: "IT Development/Support",
        period: "August 2010 - August 2013",
        techStack: ["VBA", ".NET"],
        description: "Sole developer responsible for delivering a custom, end-to-end attendance management system for an on-campus study program supporting intercollegiate athletes.",
      }
    ],
  },
  {
    company: "Securian Financial Group",
    location: "St. Paul, MN",
    projects: [
      {
        position: "Senior Programmer/Analyst",
        period: "May 2007 - September 2007",
      },
      {
        position: "Programmer/Analyst",
        period: "August 2006 - May 2007",
      },
      {
        position: "IT Intern",
        period: "June 2005 - August 2005",
        techStack: ["Java"],
        description: "Supported the development of web applications enabling customers to manage their insurance policies online."
      }
    ],
  }
];

function ProjectItem({
  headingLevel: Heading = "h3",
  title,
  position,
  period,
  techStack,
  description = "",
  achievements = [],
}: {
  headingLevel?: keyof JSX.IntrinsicElements;
  title?: string;
  position: string;
  period: string;
  techStack?: string[];
  description?: string;
  achievements?: string[];
}) {
  return (
    <section className="mb-6">
      <div className="mb-4">
        { title && (
          <div className="text-lg font-semibold text-foreground-bright">
            <Heading>{title}</Heading>
          </div>
        )}
        <div>
          <span className="text-foreground-bright">{position}</span>
          <span className="mx-2">|</span>
          <span>{period}</span>
        </div>
      </div>
      { techStack && (
        <div className="mb-4">
          <Pills labels={techStack} />
        </div>
      )}
      <div>
        <p className="text-sm mb-3 italic text-foreground-bright">{description}</p>
        {achievements.length > 0 && (
          <ul className="list-disc pl-5 space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-sm">{achievement}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
  
function ExperienceItem({
  company,
  location,
  projects,
}: {
  company: string;
  location: string;
  projects: {
    title?: string;
    position: string;
    period: string;
    techStack?: string[];
    description?: string;
    achievements?: string[];
  }[];
}) {
  return (
    <section className="border-b-1 last:border-b-0 text-foreground p-6 pb-10 mb-6">
      <IconHeading
        Icon={Laptop}
        title={company}
        headingLevel = "h2"
        SubtitleIcon={MapPin}
        subtitle={location}
      />      
      {projects.map((project, index) => (
        <ProjectItem
          key={index}
          title={project.title}
          position={project.position}
          period={project.period}
          techStack={project.techStack}
          description={project.description}
          achievements={project.achievements}
        />
      ))}
    </section>
  );
}

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-h-500 min-h-screen">
        {/* Main Content */}
        <main className="p-6 pb-24">
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={index}
              company={experience.company}
              location={experience.location}
              projects={experience.projects}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
