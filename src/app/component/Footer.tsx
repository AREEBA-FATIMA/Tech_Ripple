import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 border-t border-gray-700 py-8">
        {/* Single Row: Logo & Name | Quick Links | Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* First Column: Logo & Name | About */}
          <div className="text-center lg:text-left">
            {/* Logo and Name Section */}
            <div className="w-12 h-12 rounded-full overflow-hidden border-4 border-white mx-auto lg:mx-0">
              <Image
                src="/images/logo.png"
                alt="Tech Ripple Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-sm text-gray-400">Tech Ripple</p>

            {/* About Section */}
            <h3 className="font-semibold text-lg mt-6 mb-4">About</h3>
            <p className="text-gray-400 text-sm">
              Tech Ripple is a blog dedicated to bringing you insightful articles on technology, creativity, and innovation. We aim to share the latest trends and deep dives into exciting topics.
            </p>
          </div>

          {/* Second Column: Quick Links | Contact */}
          <div className="text-center lg:text-left">
            {/* Quick Links Section */}
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog/technical-tutorials">
                  <div className="hover:underline text-gray-400">Popular Posts</div>
                </Link>
              </li>
              <li>
                <Link href="#category">
                  <div className="hover:underline text-gray-400">Blog Categories</div>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <div className="hover:underline text-gray-400">Contact Us</div>
                </Link>
              </li>
            </ul>

            {/* Contact Section */}
            <h3 className="font-semibold text-lg mt-6 mb-4">Contact</h3>
            <p className="text-gray-400 text-sm">Email: support@techripple.com</p>
            <p className="text-gray-400 text-sm">Phone: +1 (123) 456-7890</p>
            <p className="text-gray-400 text-sm">Location: 123 Tech Street, Innovation City</p>
          </div>

          {/* Third Column: Newsletter */}
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to our newsletter and never miss a blog post.
            </p>
            <form className="flex flex-col sm:flex-row justify-center lg:justify-start">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 text-gray-900 rounded-l-md focus:outline-none mb-4 sm:mb-0 sm:mr-2 text-sm w-72"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700 transition duration-300 text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 mb-6" />

        {/* Bottom Section: Copyright */}
        <p className="text-center text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} Tech Ripple. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
