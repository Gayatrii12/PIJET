import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DCard = ({ imageUrl, name, role, linkedin, github, portfolio }) => {
  return (
    <div className="text-center text-gray-500 dark:text-gray-400">
      <img
        className="mx-auto mb-4 w-36 h-36 rounded-full"
        src={imageUrl}
        alt={`${name} Avatar`}
      />
      <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h3>
      <p>{role}</p>
      <ul className="flex items-center justify-center mt-4 space-x-4">
        {linkedin && (
          <li className="hover:scale-110 transition-transform ease-in-out">
            <Link
              to={linkedin}
              target="_blank"
              className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
            >
              <img className="h-5 " alt="linkedin" src="/icons/link.svg" />
            </Link>
          </li>
        )}
        {github && (
          <li className="hover:scale-110 transition-transform ease-in-out">
            <Link
              target="_blank"
              to={github}
              className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {/* GitHub icon */}
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </li>
        )}
        {portfolio && (
          <li className="hover:scale-110 transition-transform ease-in-out">
            <Link
              target="_blank"
              to={portfolio}
              className="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white "
            >
              <img
                className="h-5 invert"
                src="/briefcase.png"
                alt="portfolio"
              />
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

const Developers = () => {
  const developersData = [
    {
      imageUrl: "ay.jpeg",
      name: "Ayush Gala",
      role: "Full Stack Developer",
      linkedin: "https://www.linkedin.com/in/ayush-gala/", // Example LinkedIn link
      github: "https://github.com/Ayush-Gala", // Example GitHub link
      portfolio: "", // Example portfolio link
    },
    {
      imageUrl: "/at.JPG",
      name: "Atharva Pardeshi",
      role: "Full Stack Developer",
      linkedin: "https://www.linkedin.com/in/atharva-pardeshi-01054b237/", // Example LinkedIn link
      github: "https://github.com/asp21k", // Example GitHub link
      portfolio: "https://asp21k-portfolio.vercel.app/", // Example portfolio link
    },
    {
      imageUrl: "g.jpg",
      name: "Gayatri Sawant",
      role: "Full Stack Developer",
      linkedin: "https://www.linkedin.com/in/gayatri-sawant-115689179/", // Example LinkedIn link
      github: "https://github.com/gayatrii12", // Example GitHub link
      portfolio: "https://gayatrisawant.vercel.app/", // Example portfolio link
    },
    {
      imageUrl: "/r.jpg",
      name: "Rucha Rajmane",
      role: "Full Stack Developer",
      linkedin: "https://www.linkedin.com/in/rucha-rajmane-894689234/", // Example LinkedIn link
      github: "https://github.com/rucharajmane", // Example GitHub link
      portfolio: "", // Example portfolio link
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <motion.div
        className="py-6 px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          type: "inetia",
          stiffness: 100,
          duration: 0.5,
        }}
      >
        <div className="mx-auto mb-8 max-w-screen-xl lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our team
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Discover the creative minds behind our website's design and
            development. Meet our team of talented individuals who collaborated
            to bring our vision to life through captivating logos, innovative
            designs, and cohesive platform.
          </p>
        </div>
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {developersData.map((developer, index) => (
            <DCard
              key={index}
              imageUrl={developer.imageUrl}
              name={developer.name}
              role={developer.role}
              linkedin={developer.linkedin}
              github={developer.github}
              portfolio={developer.portfolio}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Developers;
