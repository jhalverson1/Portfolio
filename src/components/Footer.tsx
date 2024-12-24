import Link from "next/link";
import { SocialLinkType } from "@/types";

const socialLinks: SocialLinkType[] = [
  {
    platform: "GitHub",
    url: "https://github.com/jonhalverson",
    icon: "github",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/jonhalverson",
    icon: "linkedin",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link 
              href="/"
              className="text-xl font-bold"
              aria-label="Home"
            >
              Jon Halverson
            </Link>
            <p className="mt-2 text-gray-400">
              Building digital experiences that matter
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <Link
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={`Visit my ${link.platform} profile`}
              >
                <span className="sr-only">{link.platform}</span>
                {/* You can add icons here using your preferred icon library */}
                {link.platform}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {currentYear} Jon Halverson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 