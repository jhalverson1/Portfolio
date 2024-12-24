"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import type { IconType } from "react-icons";

interface SocialLink {
  icon: IconType;
  url: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: FaGithub,
    url: "https://github.com/jhalverson1",
    label: "GitHub"
  },
  {
    icon: FaLinkedin,
    url: "https://linkedin.com/in/jonhalverson",
    label: "LinkedIn"
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400">© 2024 Jon Halverson. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={`Visit my ${link.label} profile`}
              >
                <link.icon className="w-6 h-6" />
                <span className="sr-only">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 