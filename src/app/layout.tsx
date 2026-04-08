import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/Navigation"
import ScrollToTop from "@/components/ScrollToTop"
import { ClickBurstEffect } from "@/components/glitter-overlay"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://kumod-portfolio.vercel.app"),
  title: {
    default: "Kumod Kumar Sharma - Full Stack Web Developer",
    template: "%s | Kumod Kumar Sharma",
  },
  description:
    "Kumod Kumar Sharma — Full Stack Web Developer (MERN Stack). Skilled in React, Node.js, MongoDB, Express.js. Based in India. Explore projects, skills, and experience.",
  keywords: [
    "Kumod",
    "Kumod Kumar",
    "Kumod Kumar Sharma",
    "Kumod Sharma",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Web Developer India",
    "kumod1164",
    "kumodsharma",
  ],
  authors: [{ name: "Kumod Kumar Sharma", url: "https://kumod-portfolio.vercel.app" }],
  creator: "Kumod Kumar Sharma",
  publisher: "Kumod Kumar Sharma",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://kumod-portfolio.vercel.app",
  },
  openGraph: {
    title: "Kumod Kumar Sharma - Full Stack Web Developer",
    description:
      "Kumod Kumar Sharma — Full Stack Web Developer specializing in MERN stack. React, Node.js, MongoDB, Express.js.",
    url: "https://kumod-portfolio.vercel.app",
    siteName: "Kumod Kumar Sharma Portfolio",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/pp.jpg",
        width: 1200,
        height: 630,
        alt: "Kumod Kumar Sharma - Full Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumod Kumar Sharma - Full Stack Web Developer",
    description:
      "Full Stack Web Developer specializing in MERN stack — React, Node.js, MongoDB, Express.js.",
    images: ["/images/pp.jpg"],
  },
  verification: {
    google: "socFTOKau70JvrKSj0d1fzF_K5ECAtrKiJdhch3epFc",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kumod Kumar Sharma",
  alternateName: ["Kumod", "Kumod Kumar", "Kumod Sharma", "kumod1164"],
  url: "https://kumod-portfolio.vercel.app",
  sameAs: [
    "https://github.com/kumod1164",
    "https://kumod1164.github.io",
    "https://www.linkedin.com/in/kumod-kumar-sharma",
  ],
  jobTitle: "Full Stack Web Developer",
  description:
    "Full Stack Web Developer with expertise in MERN stack — MongoDB, Express.js, React.js, Node.js.",
  knowsAbout: [
    "React.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "JavaScript",
    "Full Stack Development",
    "MERN Stack",
  ],
  email: "kumodsharma1164@gmail.com",
  nationality: "Indian",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://kumod-portfolio.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-white text-gray-900`}>
        <ClickBurstEffect />
        <Navigation />
        <main>{children}</main>
        <ScrollToTop />
      </body>
    </html>
  )
}
