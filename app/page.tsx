import Image from "next/image"
import { MapPin } from "lucide-react"
import Pills from "@/components/Pills/Pills"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-h-500 min-h-screen">
        {/* Main Content */}
        <main className="p-6 pb-24">
          {/* Profile Section */}
          <section className="text-center mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
              <Image
                src="/headshot_cartoon.png"
                alt="Cartoon headshot of Ryan Koch"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-4xl text-foreground-bright font-bold mb-2">Ryan Koch</h2>
            <p className="text-xl mb-3">Senior Software Engineer</p>
            <div className="flex items-center justify-center text-lg">
              <MapPin className="h-4 w-4 mr-1" />
              <span>Minneapolis, MN</span>
            </div>

            {/* About Text */}
            <div className="mt-8 mb-12">
              <p className="leading-relaxed text-center">
                I'm a passionate software engineer with over 10 years of experience building web applications, from full-stack systems to finely tuned user interfaces. I thrive on solving complex problems and take pride in writing thoughtful, maintainable code that scales.
              </p>
              <p className="leading-relaxed text-center mt-10">
                Some of my proudest accomplishments are outside of tech. I've coached at the Olympic Games, I've built a meaningful friendship in a foreign language, and I've had the tremendous honor of officiating four weddings. These experiences, alongside my professional work, reflect the depth of my character and the richness I pursue in every part of life.
              </p>
            </div>

            {/* Skills Section */}
            <section className="text-center">
              <h3 className="text-3xl text-foreground-bright font-bold mb-6">Skills</h3>
              <Pills className="justify-center" labels={[
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "HTML",
                "CSS",
                "Tailwind",
                "GraphQL",
                "REST APIs",
                "SQL",
                "PHP",
                "Drupal",
                "Git"
              ]} />
            </section>
          </section>
        </main>
      </div>
    </div>
  )
}
