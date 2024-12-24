"use client";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-20 md:py-28" style={{ padding: "5rem 0" }}>
      <div className="grid md:grid-cols-2 gap-8 items-center" style={{ display: "grid", gap: "2rem", alignItems: "center" }}>
        <div className="space-y-6" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900" style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#111827" }}>
            Hi, I'm <span className="text-blue-600" style={{ color: "#2563EB" }}>Jon Halverson</span>
          </h1>
          <p className="text-xl text-gray-600" style={{ fontSize: "1.25rem", color: "#4B5563" }}>
            A passionate full-stack developer crafting beautiful and functional web experiences
          </p>
          <div className="flex gap-4" style={{ display: "flex", gap: "1rem" }}>
            <Link
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              style={{ padding: "0.75rem 1.5rem", backgroundColor: "#2563EB", color: "white", borderRadius: "0.5rem" }}
              aria-label="View my work"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              style={{ padding: "0.75rem 1.5rem", border: "2px solid #2563EB", color: "#2563EB", borderRadius: "0.5rem" }}
              aria-label="Contact me"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="flex justify-center" style={{ display: "flex", justifyContent: "center" }}>
          <div 
            className="relative w-48 h-48 md:w-64 md:h-64" 
            style={{ 
              position: "relative", 
              width: "16rem", 
              height: "16rem",
              maxWidth: "100%",
              overflow: "hidden",
              borderRadius: "9999px",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
            }}
          >
            <Image
              src="/Portfolio/IMG_0008.JPG"
              alt="Profile picture"
              fill
              className="object-cover rounded-full shadow-lg"
              priority
              sizes="(max-width: 768px) 192px, 256px"
              style={{ 
                objectFit: "cover",
                borderRadius: "9999px"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 