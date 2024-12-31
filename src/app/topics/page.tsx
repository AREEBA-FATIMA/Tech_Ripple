"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function HotTopicsSection() {
  const cards = [
    { topic: "technical-tutorials", title: "Technical Tutorials", articles: "4 Articles", img: "/images/tc.png" },
    { topic: "optimization-tips", title: "Optimization Tips", articles: "4 Articles", img: "/images/ot.png" },
    { topic: "use-case", title: "Use-case", articles: "5 Articles", img: "/images/uc.png" },
    { topic: "case-studies", title: "Case Studies", articles: "4 Articles", img: "/images/cs.png" },
    { topic: "problem-solving", title: "Problem-Solving", articles: "3 Articles", img: "/images/ps.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4); // Default for large screens

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1); // Small screens
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // Medium screens
      } else {
        setCardsPerView(4); // Large screens
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, cards.length - cardsPerView)
    );
  };

  return (
    <section className="bg-gray-900 text-white py-8 px-4 md:py-16 md:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Sidebar */}
        <div className="md:w-1/5 w-full text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold">Hot Topics</h2>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Explore the latest insights, tips, and expert guides on technology, innovation, and problem-solving strategies.
          </p>
          <div className="flex justify-center md:justify-start items-center space-x-3 mt-6">
            <button
              onClick={handlePrev}
              className={`w-8 h-8 md:w-10 md:h-10 flex justify-center items-center rounded-full ${
                currentIndex === 0
                  ? "bg-gray-600 cursor-not-allowed"
                  : "hover:bg-gray-700 bg-indigo-500"
              } transition duration-300`}
              disabled={currentIndex === 0}
            >
              <span className="text-lg md:text-xl">&#8592;</span>
            </button>
            <button
              onClick={handleNext}
              className={`w-8 h-8 md:w-10 md:h-10 flex justify-center items-center rounded-full ${
                currentIndex >= cards.length - cardsPerView
                  ? "bg-gray-600 cursor-not-allowed"
                  : "hover:bg-gray-700 bg-indigo-500"
              } transition duration-300`}
              disabled={currentIndex >= cards.length - cardsPerView}
            >
              <span className="text-lg md:text-xl">&#8594;</span>
            </button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="md:w-4/5 w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${
                (currentIndex * 100) / cardsPerView
              }%)`,
            }}
          >
            {cards.map((card) => (
              <Link
                key={card.topic}
                href={`/blog/${card.topic}`}
                className="min-w-full sm:min-w-[calc(100%-8px)] md:min-w-[calc(50%-8px)] lg:min-w-[calc(25%-8px)] bg-gray-800 rounded-lg overflow-hidden shadow-md mx-2"
              >
                <div>
                  <div className="h-32 sm:h-48">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg sm:text-xl font-semibold">{card.title}</h3>
                    <p className="text-gray-400 mt-2 text-sm sm:text-base">
                      {card.articles}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
