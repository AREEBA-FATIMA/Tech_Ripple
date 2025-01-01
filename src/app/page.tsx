"use client";

import Head from "next/head";
import HotTopicsSection from "./topics/page";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <div className="relative">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/video/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[.3] -z-10"></div>

      <Head>
        <title>Tech Ripple</title>
        <meta name="description" content="A stunning blog homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* Body Content */}
      <main className="flex items-center justify-center min-h-screen text-center text-white z-10 relative">
        <div className="space-y-8">
          <h1 className="text-4xl p-4 lg:p-0 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-600">
            Welcome to Tech Ripple
          </h1>
          <p className="text-lg p-4 lg:p-0 max-w-2xl mx-auto">
            Discover insightful articles on technology, creativity, and more.
            Our blog is dedicated to providing the latest trends, tips, and deep
            dives into exciting topics.
          </p>
          <button className="px-6 py-2 text-lg font-medium text-white border border-indigo-600 hover:bg-indigo-700 transition duration-300">
            Explore Blogs
          </button>
        </div>
      </main>

      <div id="category">
        <HotTopicsSection />
      </div>
      <Footer />
    </div>
  );
}
