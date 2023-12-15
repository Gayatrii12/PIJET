import React from 'react';
import 'tailwindcss/tailwind.css';
import { Topic } from '../data/topics';
import { TopicCard } from '../components/topicCard';
import { Link } from "react-router-dom";

const CallForPapers = () => {

    return (
      <div className="max-w-7xl mx-auto p-6 text-justify">
        <h1 className="text-4xl font-bold mt-4 mb-8 text-center text-pijet-blue">
          CALL FOR PAPERS
        </h1>
        <p className="text-xl">
          We invite researchers, academics, and industry experts to contribute
          articles in PICT's International Journal of Engineering and Technology, focusing on the latest
          advancements in Computer Science, Information Technology, Electronics,
          and Telecommunication. This call encompasses a broad spectrum of
          topics within these domains, providing a platform to showcase
          innovative research, practical applications, and emerging trends. Authors are required to submit their manuscripts by filling the <Link to="/register" className="underline text-blue-500">Manuscript Submission Form</Link>.
        </p>
        <h1 className="text-3xl font-bold mt-16 text-center text-pijet-blue">
          TOPICS
        </h1>
        <div class="mx-6 my-auto grid sm:grid-cols-1 lg:grid-cols-2 gap-1 pt-12  ">
          {Topic.map((topic, index) => {
            return <TopicCard details={topic} key={index} />;
          })}
        </div>
      </div>
    );
};

export default CallForPapers;