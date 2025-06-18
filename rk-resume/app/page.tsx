import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, MapPin, Home, User, Briefcase, Mail } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile-first container */}
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-sm">
        {/* Header */}
        <header className="flex items-center justify-between p-4 border-b border-gray-100">
          <button className="p-2 -ml-2">
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <h1 className="text-lg font-medium text-gray-900">About Me</h1>
          <div className="w-10"></div> {/* Spacer for centering */}
        </header>

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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Ryan Koch</h2>
            <p className="text-gray-600 mb-3">Senior Software Engineer</p>
            <div className="flex items-center justify-center text-gray-500 text-sm">
              <MapPin className="h-4 w-4 mr-1" />
              <span>Twin Cities, MN</span>
            </div>
          </div>

          {/* About Text */}
          <div className="mb-12">
            <p className="text-gray-700 leading-relaxed text-center">
              I'm a passionate software engineer with over 15 years of experience building web applications. I have a
              background in full-stack development and a strong understanding of modern web technologies. I'm always
              looking for new challenges and opportunities to learn and grow as a developer.
            </p>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Skills</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                JavaScript
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                TypeScript
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                React
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Next.js
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Node.js
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                HTML
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                CSS
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Git
              </span>
            </div>
          </div>
        </main>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200">
          <div className="flex items-center justify-around py-3">
            <Link href="/" className="flex flex-col items-center p-2">
              <Home className="h-6 w-6 text-gray-400" />
              <span className="text-xs text-gray-400 mt-1">Home</span>
            </Link>
            <Link href="/experience" className="flex flex-col items-center p-2">
              <Briefcase className="h-6 w-6 text-gray-400" />
              <span className="text-xs text-gray-400 mt-1">Experience</span>
            </Link>
            <Link href="/about" className="flex flex-col items-center p-2">
              <User className="h-6 w-6 text-blue-500" />
              <span className="text-xs text-blue-500 mt-1">Education</span>
            </Link>
            <Link href="/contact" className="flex flex-col items-center p-2">
              <Mail className="h-6 w-6 text-gray-400" />
              <span className="text-xs text-gray-400 mt-1">Contact</span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}
