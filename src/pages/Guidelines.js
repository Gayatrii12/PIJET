import React from 'react';
import 'tailwindcss/tailwind.css';

const Guidelines = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 text-justify">
            <h1 className="text-4xl font-bold mb-4 text-pijet-blue text-center">AUTHOR GUIDELINES</h1>

            <div className="mb-8">
                <li className="text-xl"><strong className="text-xl font-bold mb-2">Submission Details: </strong> Submit your manuscript as a doc/pdf to:  pijet@pict.edu.</li>

                <li className="text-xl"><strong className="text-xl font-bold mb-2">Formatting Requirements: </strong>
                    Use Times New Roman, Font Size 15 for the main title. Subtitles should be in Bold with Font Size 10, and the body in Font Size 10. The manuscript should be limited to 6 pages.</li>

                <li className="text-xl"><strong className="text-xl font-bold mb-2">Text Structure: </strong>
                    All paragraphs should be justified, in a single column, with single-line spacing. Organize your content into Heading, Abstract, Keywords, Introduction, Materials and Methods, Results and Discussion, Conclusion, Acknowledgment, and References.</li>

                <li className="text-xl"><strong className="text-xl font-bold mb-2">Visual Elements: </strong>
                    Include tables and pictures in JPEG format with high resolution.</li>

                <li className="text-xl"><strong className="text-xl font-bold mb-2">Competing Interests: </strong>
                    Authors should declare any competing interests.</li>

                <li className="text-xl"><strong className="text-xl font-bold mb-2">Submission Limits: </strong>
                    Your manuscript should not exceed 6 pages.</li>

                <li className="text-xl"><strong className="text-xl font-bold mb-2">File Formats: </strong>
                    Submit in both PDF and MS Word formats.</li>

                <li className="text-xl"><strong className="text-xl font-bold mb-2">Email for Submission: </strong>
                    Send submissions to pijet@pict.edu.</li>

                <li className="text-xl"><strong className="text-xl font-bold mb-2">Review and Proofread: </strong>
                    Ensure compliance with submission guidelines. Review and proofread your manuscript before submission.</li>
            </div>

            <div>
                <p className="text-xl"><strong className="text-xl font-bold mb-2">Sample Manuscript: </strong>
                    For a sample manuscript, refer to <a href="/path-to-your-sample-manuscript" className="text-blue-500">Sample Manuscript Document</a>.</p>
            </div>

            <h1 className="text-4xl font-bold mb-4 text-pijet-blue text-center">HOW TO PUBLISH A PAPER IN PIJET</h1>

            <h1 className="text-4xl font-bold mb-4 text-pijet-blue text-center">ARTICLE PROCESSING</h1>

            <h1 className="text-4xl font-bold mb-4 text-pijet-blue text-center">HOW TO PUBLISH A PAPER IN PIJET</h1>
        </div>
    );
};

export default Guidelines;
