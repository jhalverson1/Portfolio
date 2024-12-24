"use client";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Hi, I'm <span className="text-blue-600">Jon Halverson</span>
          </h1>
          <p className="text-xl text-gray-600">
            A passionate full-stack developer crafting beautiful and functional web experiences
          </p>
          <div className="flex gap-4">
            <Link
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              aria-label="View my work"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              aria-label="Contact me"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <Image
              src="/IMG_0008.JPG"
              alt="Profile picture"
              fill
              className="object-cover rounded-full shadow-lg"
              priority
              sizes="(max-width: 768px) 192px, 256px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 