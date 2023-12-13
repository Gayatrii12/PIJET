import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { Link } from "@react-email/link";

const HomePage = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 text-justify">
            <h1 className="text-4xl font-bold mb-4 text-pijet-blue">Welcome to PIJET</h1>

            <div className="flex py-4">
                <div className="w-1/2 pr-4">
                    <img src="/pict_awards.jpg" alt="Static Image" className="w-full h-auto" />
                </div>
                <div className="w-1/2 px-3 py-8">
                    <div className="text-xl text-left">
                        <p>
                            <strong>Journal Information:</strong>
                        </p>
                        <br />
                        <p>
                            <strong>Email Queries to:</strong> <Link href="mailto:pijet@pict.edu">pijet@pict.edu</Link>
                        </p>
                        {/* <p>
                            <strong>Scopus Official Link:</strong> <a href="https://www.scopus.com/sourceid/16200154732" target="_blank" rel="noopener noreferrer">https://www.scopus.com/sourceid/16200154732</a>
                        </p> */}
                        {/* <p><strong>Acceptance Rate:</strong> y%</p> */}
                        <p><strong>Open Access & Peer Reviewed Journal</strong></p>
                        <p><strong>Bi-Annually Published Issues</strong></p>
                        {/* <p>
                            <strong>Impact Factor:</strong> 6.3
                        </p> */}
                        <br />
                        <strong>Frequent Links:</strong>
                        <br/>
                        <div className="flex text-s justify-evenly">
                            <p><a href="/PIJET_COPYRIGHT.pdf" className="text-blue-500">Copyright Form</a></p>
                            <p><a href="/guideline" className="text-blue-500">Registration Form</a></p>
                            <p><a href="/Sample_Manuscript_PIJET.docx" className="text-blue-500">Sample Manuscript</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-5">
                <h1 className="text-4xl font-bold mb-4 text-pijet-blue py-3">About PIJET:</h1>

                <p className="mb-2 text-xl">
                    PICT's International Journal of Engineering and Technology (PIJET) represents a pioneering platform that embodies the commitment to fostering cutting-edge research and scholarly exploration in the fields of engineering and technology. With a vision to bridge the gap between theoretical knowledge and practical application, PIJET aims to serve as a catalyst for innovation and advancement, propelling the boundaries of scientific understanding and technological development. Dedicated to promoting interdisciplinary collaboration and academic excellence, PIJET seeks to publish high-impact research that not only contributes to the global knowledge pool but also addresses critical challenges and emerging trends in the ever-evolving landscape of tech. By fostering a culture of intellectual curiosity and fostering a dynamic exchange of ideas, PIJET endeavors to be at the forefront of technological innovation, driving transformative change and facilitating solutions that have real-world implications and applications.
                    <br /><br />
                    The journal's scope encompasses a wide array of interdisciplinary domains within the realm of engineering and technology, including but not limited to Computer Engineering, Electronics & Telecommunication Engineering, Information Technology, Data Science, and Wireless Communication Technology. With a strong emphasis on original research, experimental findings, and innovative solutions, PIJET aims to become a premier platform for scholars, researchers, and practitioners to disseminate their groundbreaking discoveries, engage in scholarly discourse, and contribute to the collective advancement of the global scientific community.
                </p>
            </div>

            <div className="py-5">
                <h1 className="text-4xl font-bold mb-4 text-pijet-blue py-3 text-center">Journal Particulars</h1>

                <img src="/home_page_table.png" alt="Static Image" className="w-full h-auto" />
            </div>

            <div className="py-5">
                <h1 className="text-4xl font-bold mb-4 text-pijet-blue py-3">Scopus</h1>

                <p className="mb-2 text-xl">
                    Our commitment to delivering high-caliber scholarly content is evident through our emphasis on rigorous peer-reviewed publications, papers, and colloquiums spanning various academic disciplines.
                </p>
                <br />
                <p className="mb-2 text-xl">
                    We're on a mission to make our journal recognized worldwide. In the initial phase, PIJET is set to be indexed by IJRASET, a testament to our dedication to quality work and the dissemination of impactful research. Looking ahead, we have a long-term plan to secure indexing in renowned databases such as Scopus or SCI. This strategic vision underscores our ambition to elevate PIJET to a global platform, ensuring that our published content not only meets the highest academic standards but also reaches a widespread international audience.
                </p>
            </div>
        </div>
    );
};

export default HomePage;
