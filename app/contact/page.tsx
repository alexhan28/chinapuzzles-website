import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Instagram, Linkedin, Mail, Globe } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the ChinaPuzzles team. We'd love to hear from you with any questions, feedback, or collaboration ideas.",
};

const ContactPage = () => {
  const contacts = [
    {
      icon: <Instagram className="h-6 w-6 text-zinc-400" />,
      label: "Instagram",
      value: "@chinapuzzles",
      href: "#", // Replace with your Instagram URL
    },
    {
      icon: <Mail className="h-6 w-6 text-zinc-400" />,
      label: "Email",
      value: "info@chinapuzzles.com",
      href: "mailto:info@chinapuzzles.com",
    },
    {
      icon: <Linkedin className="h-6 w-6 text-zinc-400" />,
      label: "LinkedIn",
      value: "China Puzzles",
      href: "#", // Replace with your LinkedIn URL
    },
    {
      icon: <Globe className="h-6 w-6 text-zinc-400" />,
      label: "Website",
      value: "chinapuzzles.com",
      href: "https://chinapuzzles.com",
    },
  ];

  return (
    <MaxWidthWrapper className="mt-28 sm:mt-40 flex flex-col items-center">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl text-center font-montserrat">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-zinc-400 text-center">
          We'd love to hear from you. Here's how you can reach us.
        </p>
        <div className="mt-12 bg-zinc-800/50 rounded-2xl p-8 space-y-6">
          {contacts.map((contact, index) => (
            <div key={index} className="flex items-center">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg bg-zinc-700">
                {contact.icon}
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-zinc-400">{contact.label}</p>
                <a 
                  href={contact.href}
                  className="text-lg font-semibold text-white hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.value}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ContactPage;