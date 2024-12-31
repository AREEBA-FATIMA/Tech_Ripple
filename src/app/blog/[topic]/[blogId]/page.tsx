"use client";

import Image from "next/image";
import { use, useState, useEffect } from "react";
import { FiTrash2 } from "react-icons/fi";

const blogData = {
  "technical-tutorials": {
    "blog-1": {
      title: "Understanding React Hooks",
      content: `
        React Hooks have revolutionized the way developers write functional components, enabling state management and side-effect handling directly within the component body. Hooks such as useState and useEffect allow for concise and readable code while maintaining the full capabilities of a class-based component. The true power of Hooks lies in their composability, enabling developers to create reusable logic that can be shared across components. Understanding how to properly implement and optimize hooks is essential for creating dynamic and maintainable React applications.

        Beyond the basics, advanced usage of React Hooks can lead to better performance and cleaner architecture. For instance, useReducer is ideal for handling complex state logic, while useMemo and useCallback can prevent unnecessary re-renders. However, with great power comes responsibility—misusing hooks can introduce bugs and performance bottlenecks. A solid understanding of their lifecycle and dependencies is crucial to avoid pitfalls, making mastery of React Hooks a valuable skill in modern web development.
      `,
      img: "/images/tc-1.png",
    },
    "blog-2": {
      title: "Next.js Routing Guide",
      content: `
        Next.js simplifies routing by adopting a file-based routing system, eliminating the need for external libraries like react-router-dom. Every file inside the pages directory automatically becomes a route, making navigation intuitive and effortless. Dynamic routing further extends this capability, allowing developers to create flexible and scalable URL structures. This system aligns seamlessly with modern SEO requirements, offering built-in support for server-side rendering and static site generation.

        Deep diving into Next.js routing reveals advanced features such as API routes and middleware for custom logic. Nested routes can be easily managed using folders, and parameterized routes make it simple to handle dynamic data. Whether building a multi-page application or a single-page one, Next.js offers the tools needed to enhance performance and user experience through efficient routing strategies.
      `,
      img: "/images/tc-2.png",
    },
    "blog-3": {
      title: "Advanced TypeScript",
      content: `
        TypeScript’s strong typing system is a game-changer for large-scale applications, providing developers with confidence in their code by catching errors during development. Features like interfaces, enums, and advanced types allow for precise type definitions, ensuring data consistency across the application. With TypeScript, teams can write self-documenting code, improve collaboration, and reduce runtime errors significantly.

        Moving beyond the basics, advanced TypeScript features such as conditional types, utility types, and mapped types offer unparalleled flexibility. These capabilities make it easier to write generic, reusable code that adapts to various use cases. However, mastering these features requires a deep understanding of the type system, making it crucial to invest time in exploring TypeScript’s extensive documentation and best practices.
      `,
      img: "/images/tc-3.png",
    },
    "blog-4": {
      title: "Building Scalable Apps",
      content: `
        Scalability is at the core of modern app development, ensuring that an application can handle increasing user demands without degradation in performance. Designing scalable architecture involves using microservices, caching mechanisms, and load balancers to distribute workloads effectively. Developers must also consider database scaling strategies, such as sharding and replication, to maintain data integrity and performance.

        Beyond architecture, building scalable apps requires a focus on code quality and modularity. Implementing proper design patterns and adhering to clean code principles ensure that the application remains maintainable as it grows. Tools like Docker and Kubernetes can further simplify deployment and scaling processes, making it easier to adapt to evolving business needs.
      `,
      img: "/images/tc-4.png",
    },
  },
  "optimization-tips": {
    "blog-1": {
      title: "Improving Performance",
      content: `
        Performance optimization is a critical aspect of web development, directly impacting user experience and retention. Techniques such as lazy loading, image optimization, and code splitting ensure faster loading times and improved interactivity. Leveraging modern tools like Lighthouse for performance audits can help identify bottlenecks and areas for improvement, enabling developers to deliver smooth and efficient applications.

        Beyond frontend techniques, backend optimization plays a crucial role. Efficient database queries, caching mechanisms, and server optimization significantly reduce response times. Adopting strategies such as content delivery networks (CDNs) and asynchronous processing can further enhance performance, ensuring that the application scales seamlessly under varying loads.
      `,
      img: "/images/ot-1.png",
    },
    "blog-2": {
      title: "Reducing Load Times",
      content: `
        Reducing load times is essential in today’s fast-paced digital environment, where users demand immediate results. Key techniques include minifying CSS and JavaScript, eliminating render-blocking resources, and optimizing server responses through HTTP/2 or server-side rendering. Using lightweight frameworks and removing unnecessary third-party dependencies can also greatly reduce the initial load.

        For mobile-first applications, employing strategies like prefetching and prioritizing critical content ensures that users see meaningful content quickly. Browser caching and deferred loading of non-essential scripts provide a seamless experience, even on slower networks. Combined with a robust performance monitoring strategy, these practices ensure consistently fast load times.
      `,
      img: "/images/ot-2.png",
    },
    "blog-3": {
      title: "SEO Best Practices",
      content: `
        SEO best practices revolve around creating content that is both user-friendly and search-engine-optimized. Structuring your website with clear headings, descriptive URLs, and meta tags helps search engines index your content effectively. Additionally, incorporating relevant keywords naturally within the content improves its discoverability. Beyond text, optimizing images with alt tags and using accessible designs ensures broader reach and better rankings.

        Technical SEO focuses on improving the underlying structure of your website. Fast loading speeds, mobile responsiveness, and HTTPS protocols are critical factors in ranking algorithms. Advanced strategies like schema markup, canonical tags, and XML sitemaps provide additional context to search engines, improving your site’s visibility and ranking on search result pages.
      `,
      img: "/images/ot-3.png",
    },
    "blog-4": {
      title: "Database Optimization Techniques",
      content: `
        Optimizing databases is essential for maintaining high performance in data-driven applications. Indexing columns that are frequently queried, normalizing database structures, and avoiding redundant data reduce query times and improve efficiency. Proper use of stored procedures and database triggers ensures that the server processes requests faster without overloading resources.

        Scaling databases involves adopting advanced techniques like partitioning, replication, and sharding. While replication improves redundancy and read performance, sharding allows the database to handle vast amounts of data by distributing it across multiple servers. Monitoring and analyzing database performance metrics with tools like Query Analyzer help ensure a consistently optimized environment.
      `,
      img: "/images/ot-4.png",
    },
  },
  "use-case": {
    "blog-1": {
      title: "Real-world Applications of AI",
      content: `
        Artificial Intelligence is transforming industries by providing solutions that enhance efficiency and decision-making. In healthcare, AI-powered tools assist in diagnosing diseases, predicting patient outcomes, and personalizing treatment plans. In retail, AI enables inventory optimization, dynamic pricing, and recommendation systems, providing a competitive edge in a rapidly evolving market.

        Beyond traditional industries, AI’s applications extend to creative fields such as music composition, art generation, and content creation. Autonomous vehicles and drones demonstrate AI’s potential in transportation and logistics, while natural language processing powers chatbots and virtual assistants. These diverse applications underscore AI's versatility and transformative potential across domains.
      `,
      img: "/images/uc-1.png",
    },
    "blog-2": {
      title: "Blockchain in FinTech",
      content: `
        Blockchain technology is revolutionizing FinTech by offering transparent, secure, and decentralized solutions. From cryptocurrencies like Bitcoin and Ethereum to decentralized finance (DeFi) platforms, blockchain ensures secure transactions without intermediaries. This innovation reduces costs and increases accessibility for users globally.

        Beyond cryptocurrencies, blockchain enables smart contracts, which automate agreements based on predefined conditions. Use cases such as cross-border payments, fraud detection, and digital identity verification highlight its potential to streamline financial operations. As the technology matures, its applications will likely extend into other sectors, redefining the global financial landscape.
      `,
      img: "/images/uc-2.png",
    },
    "blog-3": {
      title: "IoT in Smart Homes",
      content: `
      The Internet of Things (IoT) has brought transformative advancements to the concept of smart homes, turning everyday devices into interconnected, intelligent systems. Through IoT technology, household items such as lights, thermostats, refrigerators, and security systems are able to communicate with one another, often through smartphones or voice-controlled assistants like Amazon Alexa or Google Home. This seamless interaction enables users to control various aspects of their home environment remotely, optimizing energy use, enhancing security, and improving convenience. For instance, smart thermostats learn user preferences and adjust heating or cooling systems to maximize efficiency, while smart cameras and doorbells provide real-time monitoring and notifications, enhancing home security.
      `,
      img: "/images/uc-3.png",
    },
    "blog-4": {
      title: "Augmented Reality in Retail",
      content: `      
      Augmented Reality (AR) is rapidly changing the retail landscape by offering immersive experiences that blend the digital and physical worlds. In retail, AR allows customers to virtually try on products before purchasing them, whether it's clothing, makeup, or even furniture. With AR-powered apps, customers can visualize how a piece of furniture will look in their living room or see how a pair of shoes fits without ever trying them on physically. This level of interactivity not only enhances the shopping experience but also reduces the likelihood of returns, as customers make more informed purchasing decisions.
      `,
      img: "/images/uc-4.png",
    },

    "blog-5": {
      title: "5G Use Cases in Connectivity",
      content: `
      The rollout of 5G networks promises to redefine connectivity, providing faster speeds, lower latency, and the ability to support a vastly larger number of devices simultaneously. One of the most exciting use cases for 5G is its impact on the Internet of Things (IoT), where it will enable smart cities, autonomous vehicles, and connected devices to communicate more efficiently and in real time. With ultra-low latency, 5G can facilitate instant communication between devices, crucial for applications such as self-driving cars, where split-second decisions are necessary for safety. Similarly, 5G's high-speed capabilities will significantly enhance virtual and augmented reality experiences, offering real-time streaming without lag, which is essential for immersive environments like remote surgeries or high-quality gaming.
      `,
      img: "/images/uc-5.png",
    },
  },
  "case-studies": {
    "blog-1": {
      title: "Tesla’s Innovation in EV",
      content: `
        Tesla has revolutionized the electric vehicle (EV) industry with groundbreaking innovations in battery technology, software integration, and design. By prioritizing research and development, Tesla has achieved industry-leading ranges for its EVs, significantly reducing range anxiety among consumers. The company’s proprietary battery technology and gigafactories have also set new benchmarks for energy efficiency and production scalability.

        Beyond hardware, Tesla’s software-centric approach has been a game-changer. Features like over-the-air updates, advanced driver-assistance systems, and full self-driving capabilities demonstrate the company’s commitment to continuous innovation. Tesla’s approach to building a seamless ecosystem of energy solutions, including solar panels and Powerwalls, positions it as a leader in sustainable energy adoption.
      `,
      img: "/images/cs-1.png",
    },
    "blog-2": {
      title: "Apple’s UX Strategy",
      content: `
        Apple’s success is deeply rooted in its unparalleled user experience (UX) strategy. By focusing on simplicity, consistency, and intuitive design, Apple has created products that are easy to use yet highly functional. Features like the seamless integration across the Apple ecosystem, from iPhones to Macs, enhance user satisfaction and loyalty. This emphasis on UX is further reflected in Apple’s clean and minimalist interfaces, which prioritize user needs over unnecessary complexity.

        Apple’s approach extends beyond software to its retail and customer service experience. The company’s physical stores, designed with aesthetics and interactivity in mind, offer customers a hands-on experience with products. By combining innovative hardware with meticulously designed software and services, Apple continues to set the standard for user-centric design across industries.
      `,
      img: "/images/cs-2.png",
    },
    "blog-3": {
      title: "Netflix's Recommendation Engine",
      content: `
        Netflix has redefined content consumption with its sophisticated recommendation engine, which uses advanced algorithms to predict user preferences. By analyzing vast amounts of data, including viewing history, ratings, and search behavior, Netflix offers personalized recommendations that keep users engaged. This approach has significantly reduced churn rates and increased viewer satisfaction.

        The recommendation engine’s success lies in its ability to adapt and learn over time. Through techniques such as collaborative filtering, content-based filtering, and deep learning models, Netflix continuously refines its predictions. This innovation not only enhances user experience but also informs content creation, ensuring that Netflix invests in shows and movies that align with audience preferences.
      `,
      img: "/images/cs-3.png",
    },
    "blog-4": {
      title: "SpaceX Reusable Rockets",
      content: `
        SpaceX has disrupted the aerospace industry with its development of reusable rockets, drastically reducing the cost of space exploration. The Falcon 9 rocket, designed to land vertically after launch, represents a significant leap forward in sustainability and efficiency. By reusing key components, SpaceX has made space missions more affordable and accessible.

        The implications of this innovation extend far beyond cost savings. Reusable rockets have accelerated the pace of launches, enabling SpaceX to undertake ambitious projects such as satellite constellations and Mars exploration. SpaceX’s approach demonstrates the power of engineering innovation to transform industries and redefine what is possible in space exploration.
      `,
      img: "/images/cs-4.png",
    },
  },
  "problem-solving": {
    "blog-1": {
      title: "How to Debug Efficiently",
      content: `
        Debugging is an essential skill for any developer, involving systematic techniques to identify and resolve issues in code. Tools like debuggers, logging frameworks, and breakpoints allow developers to trace errors and understand program behavior step by step. Writing clear and descriptive error messages further aids in diagnosing problems quickly, minimizing downtime during development.

        Efficient debugging also involves understanding the broader context of the code. Sometimes, issues arise due to incorrect assumptions or poor design choices. By thoroughly reviewing code and collaborating with teammates, developers can uncover hidden bugs and improve code quality. Building a strong knowledge of debugging tools and practices helps developers quickly identify root causes, leading to faster resolutions and more efficient workflows.
      `,
      img: "/images/ps-1.png",
    },
    "blog-2": {
      title: "Breaking Down Complex Problems",
      content: `
        Breaking down complex problems into smaller, manageable parts is a fundamental strategy for efficient problem-solving. When faced with an overwhelming challenge, it helps to dissect the issue into individual components, each of which can be tackled independently. Tools such as flowcharts, diagrams, and pseudocode assist in visualizing the problem from multiple angles, providing a structured path forward. This process reduces the complexity of the problem, making it easier to identify patterns and interdependencies that might otherwise go unnoticed. Additionally, working through each part step by step ensures that solutions are both comprehensive and effective, reducing the risk of overlooking key details.
      `,
      img: "/images/ps-2.png",
    },
    "blog-3": {
      title: "Collabration for solutions",
      content: `
        Collaboration is a cornerstone of successful problem-solving, especially in dynamic team environments. When multiple minds come together, they bring diverse skills, perspectives, and experiences that can lead to innovative solutions. Effective collaboration fosters creativity by encouraging the free exchange of ideas, allowing for more comprehensive and holistic problem-solving. Tools like version control systems, real-time collaborative coding platforms, and project management software help streamline communication and ensure that everyone is aligned on the same objectives, ultimately driving efficiency and clarity in the solution-building process.
      `,
      img: "/images/ps-3.png",
    },
  },
};

interface Comment {
  name: string;
  img: string;
  text: string;
}

interface BlogParams {
  topic: keyof typeof blogData;
  blogId: string;
}

export default function BlogPage({ params }: { params: Promise<BlogParams> }) {
  // Unwrap the Promise to access the params
  const { topic, blogId } = use(params);

  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [filePreview, setFilePreview] = useState<string | null>(null);

  const topicData = blogData[topic];
  const blog = topicData ? topicData[blogId as keyof typeof topicData] : null;

  useEffect(() => {
    const storedComments = localStorage.getItem(`comments-${blogId}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, [blogId]);

  const handleAddComment = () => {
    if (newComment.trim() && userName.trim() && filePreview) {
      const updatedComments = [...comments, { name: userName, img: filePreview, text: newComment }];
      setComments(updatedComments);
      setNewComment("");
      setUserName("");
      setFilePreview(null);
      localStorage.setItem(`comments-${blogId}`, JSON.stringify(updatedComments));
    }
  };

  const handleDeleteComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
    localStorage.setItem(`comments-${blogId}`, JSON.stringify(updatedComments));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFilePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6">
      <h1 className="text-3xl font-bold text-center sm:text-left">{blog.title}</h1>
  
      <div className="flex flex-col sm:flex-row sm:flex-row-reverse mt-8">
        {/* Image Section */}
        <div className="w-full sm:w-1/3 lg:mt-10">
          <Image
            src={blog.img}
            alt={blog.title}
            className="w-full h-64 object-cover rounded-lg shadow-md sm:ml-10"
            height={256}
            width={256}
          />
        </div>
  
        {/* Main Content */}
        <div className="w-full sm:w-2/3">
          <p className="mt-4 text-justify">{blog.content}</p>
        </div>
      </div>
  
      {/* Comments Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-center sm:text-left">Comments</h2>
        <div className="mt-4">
          {comments.length === 0 ? (
            <p className="text-center sm:text-left">No comments yet.</p>
          ) : (
            <ul className="space-y-4">
              {comments.map((comment, index) => (
                <li
                  key={index}
                  className="p-4 bg-gray-100 rounded-md shadow-sm flex flex-col sm:flex-row items-start sm:items-center sm:justify-between"
                >
                  <div className="flex items-center space-x-4 w-full">
                    <img
                      src={comment.img}
                      alt={comment.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-semibold">{comment.name}</p>
                      <p className="text-sm text-gray-600">{comment.text}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeleteComment(index)}
                    className="text-red-500 hover:text-red-700 mt-2 sm:mt-0"
                  >
                    <FiTrash2 size={20} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
  
        {/* Add Comment Section */}
        <div className="mt-4">
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md mb-2"
            placeholder="Your name"
          />
  
          {/* File input for image */}
          <div className="mb-2">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="border border-gray-300 rounded-md p-2"
            />
            {filePreview && (
              <img
                src={filePreview}
                alt="Preview"
                className="w-12 h-12 mt-2 rounded-full object-cover"
              />
            )}
          </div>
  
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md mb-2"
            placeholder="Add a comment..."
            rows={4}
          />
          <button
            onClick={handleAddComment}
            className="mt-2 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 w-full sm:w-auto"
          >
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
   
}
