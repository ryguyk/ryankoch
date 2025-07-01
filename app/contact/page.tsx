import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import IconHeading from "@/components/IconHeading";
import SocialLinks from '@/components/SocialLinks';

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
              <IconHeading icon={Mail} heading="Email" subheading2="ryan.koch.0213@gmail.com" />
              <IconHeading icon={Phone} heading="Phone" subheading2="608-213-1570" />
              <IconHeading icon={MapPin} heading="Location" subheading2="Minneapolis, MN" />
            </div>
          </div>

          <SocialLinks variant="circles"/>
        </main>
      </div>
    </div>
  );
}
