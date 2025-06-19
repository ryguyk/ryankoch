import Image from "next/image"
import { MapPin } from "lucide-react"
import Pills from "@/components/Pills"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-h-500 min-h-screen">
        {/* Main Content */}
        <main className="p-6 pb-24">
          {/* Profile Section */}
          <div className="text-center mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
              <Image
                src="/headshot_cartoon.png"
                alt="Cartoon headshot of Ryan Koch"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl text-foreground-bright font-bold mb-2">Ryan Koch</h2>
            <p className="mb-3">Senior Software Engineer</p>
            <div className="flex items-center justify-center text-sm">
              <MapPin className="h-4 w-4 mr-1" />
              <span>Twin Cities, MN</span>
            </div>
          </div>

          {/* About Text */}
          <div className="mb-12">
            <p className="leading-relaxed text-center">
              I'm a passionate software engineer with over 15 years of experience building web applications. I have a
              background in full-stack development and a strong understanding of modern web technologies. I'm always
              looking for new challenges and opportunities to learn and grow as a developer.
            </p>
          </div>

          {/* Skills Section */}
          <div className="text-center">
            <h3 className="text-xl text-foreground-bright font-bold mb-6">Skills</h3>
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
          </div>
        </main>
      </div>
    </div>
  )
}
