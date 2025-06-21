import Pills from "@/components/Pills";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import Link from "next/link";
import IconHeading from "@/components/IconHeading";
import { LinkedIn, GitHub } from "@/components/Icons";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-h-500 min-h-screen">
        {/* Main Content */}
        <main className="p-6 pb-24">
          {/* Contact Info */}
          <div className="border-b-1 text-foreground p-6 pb-10 mb-6">
            <h2 className="text-xl font-bold text-foreground-bright mb-6">Get in Touch</h2>
            <div>
              <IconHeading Icon={Mail} title="Email" subtitle="ryan.koch.0213@gmail.com" />
              <IconHeading Icon={Phone} title="Phone" subtitle="608-213-1570" />
              <IconHeading Icon={MapPin} title="Location" subtitle="Twin Cities, MN" />
            </div>
          </div>

          {/* Social Links */}
          <div className="text-foreground p-6 pb-10 mb-6">
            <h3 className="text-lg font-bold text-foreground-bright mb-4">Connect</h3>
            <div className="flex gap-4">
              <Link
                href="https://github.com/ryguyk"
                className="flex items-center justify-center w-12 h-12 border-3 border-primary rounded-full"
                target="_blank"
              >
                <GitHub className="h-6 w-6 text-primary" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/ryanakoch/"
                className="flex items-center justify-center w-12 h-12 border-3 border-primary rounded-full"
                target="_blank"
              >
                <LinkedIn className="h-6 w-6 text-primary" />
              </Link>
              <Link
                href="mailto:ryan.koch.0213@gmail.com"
                className="flex items-center justify-center w-12 h-12 border-3 border-primary rounded-full"
                target="_blank"
              >
                <Mail className="h-6 w-6 text-primary" />
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
