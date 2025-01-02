import Link from "next/link";

interface BlogData {
  [key: string]: {
    title: string;
    blogs: { id: string; title: string; img: string }[];
  };
}

interface TopicPageProps {
  params: Promise<{
    topic: string;
  }>;
}

export default async function TopicPage({ params }: TopicPageProps) {
  const resolvedParams = await params;

  const blogData: BlogData = {
    "technical-tutorials": {
      title: "Technical Tutorials",
      blogs: [
        { id: "blog-1", title: "Understanding React Hooks", img: "/images/tc-1.png" },
        { id: "blog-2", title: "Next.js Routing Guide", img: "/images/tc-2.png" },
        { id: "blog-3", title: "Advanced TypeScript", img: "/images/tc-3.png" },
        { id: "blog-4", title: "Building Scalable Apps", img: "/images/tc-4.png" },
      ],
    },
    "optimization-tips": {
      title: "Optimization Tips",
      blogs: [
        { id: "blog-1", title: "Improving Performance", img: "/images/ot-1.png" },
        { id: "blog-2", title: "Reducing Load Times", img: "/images/ot-2.png" },
        { id: "blog-3", title: "SEO Best Practices", img: "/images/ot-3.png" },
        { id: "blog-4", title: "Database Optimization Techniques", img: "/images/ot-4.png" },
      ],
    },
    "use-case": {
      title: "Use-case",
      blogs: [
        { id: "blog-1", title: "Real-world Applications of AI", img: "/images/uc-1.png" },
        { id: "blog-2", title: "Blockchain in FinTech", img: "/images/uc-2.png" },
        { id: "blog-3", title: "IoT in Smart Homes", img: "/images/uc-3.png" },
        { id: "blog-4", title: "Augmented Reality in Retail", img: "/images/uc-4.png" },
        { id: "blog-5", title: "5G Use Cases in Connectivity", img: "/images/uc-5.png" },
      ],
    },
    "case-studies": {
      title: "Case Studies",
      blogs: [
        { id: "blog-1", title: "Tesla's Innovation in EV", img: "/images/cs-1.png" },
        { id: "blog-2", title: "Apple's UX Strategy", img: "/images/cs-2.png" },
        { id: "blog-3", title: "Netflix's Recommendation Engine", img: "/images/cs-3.png" },
        { id: "blog-4", title: "SpaceX's Reusable Rockets", img: "/images/cs-4.png" },
      ],
    },
    "problem-solving": {
      title: "Problem-Solving",
      blogs: [
        { id: "blog-1", title: "How to Debug Efficiently", img: "/images/ps-1.png" },
        { id: "blog-2", title: "Breaking Down Complex Problems", img: "/images/ps-2.png" },
        { id: "blog-3", title: "Collaboration for Solutions", img: "/images/ps-3.png" },
      ],
    },
  };

  const topic = blogData[resolvedParams.topic];

  if (!topic) {
    return <p>Topic not found.</p>;
  }

  return (
    <div className="max-w-full min-h-screen py-16 px-6 bg-gradient-to-r from-indigo-900 via-gray-800 to-black">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">{topic.title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {topic.blogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blog/${resolvedParams.topic}/${blog.id}`}
            className="block bg-white shadow-sm shadow-indigo-200 rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-gray-800 border-t">
              <h3 className="text-xl font-semibold text-white">{blog.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
