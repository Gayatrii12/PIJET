import React from 'react';
import 'tailwindcss/tailwind.css';
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 text-justify">


            <div className="md:flex py-4 ">
                <div className="w-full md:w-1/2  md:pr-4 ">
                    <img src="/front_page.png" alt="Static" className="w- h-auto border-solid border-2 border-black" />
                </div>
                <div className="w-full md:w-1/2 py-4">
                    <div className="text-xl text-left">
                        <p className="text-2xl text-pijet-blue pb-2 ">
                            <strong>Journal Particulars:</strong>
                        </p>

                        {/* <li><strong>ISSN Number:</strong> ABCD-EFGH</li>
                        <li><strong>Impact Factor:</strong> 6.3</li>
                        <li><strong>Acceptance Rate:</strong> 12%</li> */}
                        <li><strong>Publication Mode:</strong> Online</li>
                        <li><strong>Open Access Publication</strong></li>
                        <li><strong>Peer Reviewed Journal</strong></li>
                        <li><strong>Bi-Annually Published Issues</strong></li>
                        <li><strong>Issuing/Publishing Body:</strong>
                            <div className='px-2'>
                                &emsp; SCTR's Pune Institute of Computer Technology
                                <br />&emsp; Survey No-27, Near Trimurti Chowk,
                                <br />&emsp; Dhankawadi, Pune-411043 (India)
                                <br />&emsp; Phone No: 24371101 (Ext 104)
                                <br />&emsp; Dr. S. T. Gandhe
                                <br />&emsp; Principal, PICT, Pune.
                                <br />&emsp; <a className='text-blue-500' href="mailto:principal@pict.edu">principal@pict.edu</a>
                            </div>
                        </li>

                        <li><strong>Institution/Organization: </strong> <Link to="https://www.pict.edu" target="_blank" className="text-blue-500">SCTR's Pune Institute of Computer Technology</Link></li>
                        <li><strong>Current Issue:</strong> Volume 1 - Issue 1 (<Link to="/archives" className="text-blue-500">View in Archives</Link>)</li>
                        <li><strong>Language:</strong> English</li>
                        <br />
                        <p><strong>Important Links and Forms:</strong></p>
                        <br />
                        <div className="text-s justify-evenly">
                            <li><a href="/PIJET_COPYRIGHT.pdf" className="text-blue-500">Copyright Form</a></li>
                            <li><Link to="/register" className="text-blue-500">Manuscript Submission Form</Link></li>
                            <li><a href="/Standard_Manuscript_Template.docx" className="text-blue-500">Standard Manuscript Template</a></li>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-5">
                <h1 className="text-4xl font-bold mb-4 text-pijet-blue py-3">About PICT's International Journal of Engineering and Technology:</h1>

                <p className="mb-2 text-xl">
                    PICT's International Journal of Engineering and Technology (PIJET) represents a pioneering platform that embodies the commitment to fostering cutting-edge research and scholarly exploration in the fields of engineering and technology. With a vision to bridge the gap between theoretical knowledge and practical application, PIJET aims to serve as a catalyst for innovation and advancement, propelling the boundaries of scientific understanding and technological development. Dedicated to promoting interdisciplinary collaboration and academic excellence, PIJET seeks to publish high-impact research that not only contributes to the global knowledge pool but also addresses critical challenges and emerging trends in the ever-evolving landscape of tech. By fostering a culture of intellectual curiosity and fostering a dynamic exchange of ideas, PIJET endeavors to be at the forefront of technological innovation, driving transformative change and facilitating solutions that have real-world implications and applications.
                    <br /><br />
                    The journal's expansive scope spans a multitude of interdisciplinary domains within the realm of Engineering and Technology, encompassing thrust areas like Machine Learning, Cybersecurity, Cloud Computing, IoT, Blockchain,5G, Embedded Systems, Optical Networking, VLSI Design, Robotics, and many more. This diverse coverage reflects the dynamic landscape of contemporary research, addressing not only foundational areas but also delving into cutting-edge topics that shape the future of global connectivity and technological innovation. With a strong emphasis on original research, experimental findings, and innovative solutions, PIJET aims to become a premier platform for scholars, researchers, and practitioners to disseminate their groundbreaking discoveries, engage in scholarly discourse, and contribute to the collective advancement of the global scientific community.
                </p>
            </div>

            <div className="py-5">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-pijet-blue py-3">About SCTR's Pune Institute of Computer Technology:</h1>

                <p className="mb-2 text-xl">
                    Nestled in the heart of Pune- the “Oxford of the East”, a city known for its rich cultural heritage and dynamic tech industry, lies  <Link to="https://www.pict.edu">SCTR's Pune Institute of Computer Technology</Link>. With a laser-sharp focus on academic excellence, research, and innovation, PICT has earned a reputation as one of India's premier institutions for computer education, attracting a diverse and driven student body from around the country. PICT stands as a beacon of academic excellence, propelled by a vision to be the leader in higher technical education and research of international repute. At the heart of our mission is the commitment to becoming the most sought-after institute for education and research in emerging engineering and technology disciplines. PICT's research potential is underscored by its status as a recognized research center by Savitribai Phule Pune University (SPPU) and its continuous engagement in diverse research projects funded by prestigious organizations like DST, AICTE, DRDO, and RGSTC.
                    <br /><br />
                    Founded in 1983 by visionary stalwarts- Shri. Gopal Krishna, Shri. N. Ramakrishna, and Shri. R. S. Kothavale- PICT has been at the forefront of computer education and research for almost four decades. PICT's recognition in national rankings and accreditation, coupled with its dedicated faculty, places it at the forefront of technological education and research, making it an ideal destination for those aspiring to contribute to cutting-edge advancements in computer science and technology.
                </p>
            </div>

            {/* <div className="py-5">
                <h1 className="text-4xl font-bold mb-4 text-pijet-blue py-3">Scopus</h1>

                <p className="mb-2 text-xl">
                    Our commitment to delivering high-caliber scholarly content is evident through our emphasis on rigorous peer-reviewed publications, papers, and colloquiums spanning various academic disciplines.
                </p>
                <br />
                <p className="mb-2 text-xl">
                    We're on a mission to make our journal recognized worldwide. In the initial phase, PIJET is set to be indexed by IJRASET, a testament to our dedication to quality work and the dissemination of impactful research. Looking ahead, we have a long-term plan to secure indexing in renowned databases such as Scopus or SCI. This strategic vision underscores our ambition to elevate PIJET to a global platform, ensuring that our published content not only meets the highest academic standards but also reaches a widespread international audience.
                </p>
            </div> */}
        </div>
    );
};

export default HomePage;
