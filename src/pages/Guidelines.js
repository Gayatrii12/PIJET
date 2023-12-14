import React from 'react';
import 'tailwindcss/tailwind.css';
import { Link } from "@react-email/link"; 

const Guidelines = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 text-justify">
            <div className="py-4">
                <h1 className="text-4xl font-bold mb-4 text-pijet-blue text-center py-4">MANUSCRIPT GUIDELINES</h1>
                <div className="mb-6">
                    <li className="text-xl"><strong className="text-xl font-bold mb-2">Formatting Requirements: </strong>
                        Use Times New Roman, Font Size 15 for the main title. Subtitles should be in Bold with Font Size 10, and the body in Font Size 10. The manuscript should be limited to 6 pages.</li>

                    <li className="text-xl"><strong className="text-xl font-bold mb-2">Text Structure: </strong>
                        All paragraphs should be justified, in a single column, with single-line spacing. Organize your content into Heading, Abstract, Keywords, Introduction, Materials and Methods, Results and Discussion, Conclusion, Acknowledgment, and References.</li>

                    <li className="text-xl"><strong className="text-xl font-bold mb-2">Visual Elements: </strong>
                        Include tables and pictures in JPEG format with high resolution. Strictly avoid any type of copy paste from the Internet or other sources. Redraw new/different figures with minimum 300 DPI resolution and then insert in the manuscript.</li>

                    <li className="text-xl"><strong className="text-xl font-bold mb-2">Competing Interests: </strong>
                        Authors should declare any competing interests.</li>

                    <li className="text-xl"><strong className="text-xl font-bold mb-2">Submission Limits: </strong>
                        Your manuscript should not exceed 6 pages.</li>

                    <li className="text-xl"><strong className="text-xl font-bold mb-2">File Formats: </strong>
                        Submit in both PDF and MS Word formats.</li>

                    <li className="text-xl"><strong className="text-xl font-bold mb-2">Plagiarism: </strong> Submissions are allowed a maximum tolerance of 10% for text plagiarism and 10% for AI-generated text. It is crucial that the remaining 90% of the content is original and not sourced from external materials.</li>

                    <li className="text-xl"><strong className="text-xl font-bold mb-2">Review and Proofread: </strong>
                        Authors must ensure compliance with submission guidelines. Review and proofread your manuscript before submission. Refer to our <a href="/ethics-policies" className="underline text-blue-500">Ethics and Policies</a> for more information.</li>
                </div>

                <div className="py-4">
                    <p className="text-xl"><strong className="text-xl font-bold mb-2">Sample Manuscript: </strong>
                        For a sample manuscript, refer to <a href="/Sample_Manuscript_PIJET.docx" className="text-blue-500 underline">Standard Manuscript Template</a>.</p>
                </div>

                <div className="py-4 text-center">
                    <p className="underline text-2xl font-bold mb-2"><strong>IMPORTANT: MANUSCRIPT SUBMISSIONS THAT DO NOT ADHERE TO THE SUBMISSION GUIDELINES WILL FACE DESK REJECTION. </strong></p>
                </div>
            </div>

            <div className="py-4">
                <h1 className="text-4xl font-bold mb-4 text-pijet-blue text-center">MANUSCRIPT SUBMISSION</h1>
                <div className="mb-8 py-4 text-xl">
                Authors are required to submit their manuscripts by filling the <a href="/register" className="underline text-blue-500">Manuscript Submission Form</a>. Once received, the manuscripts undergo thorough scrutiny by the editorial board and reviewer committee, who subsequently provide responses via email, indicating either acceptance, rejection, or additional clarifications and changes. In the event of acceptance, authors are promptly notified and requested to submit the copyright form simultaneously along with the final manuscript copy. Upon receiving the completed copyright form, the accepted manuscript proceeds through the publishing process and is made available in the prospective issue.
                </div>
            </div>

            <div className="py-4">
                <h1 className="text-4xl font-bold mb-4 text-pijet-blue text-center">MANUSCRIPT REVIEW PROCEDURE</h1>
                <div className="mb-8 text-xl py-4">
                    <img src="/flowchart_manuscript_publishing.jpg" alt="Static Image" className="w- h-auto mx-auto" />
                </div>
            </div>
            <div className="py-4">
                <h1 className="text-4xl font-bold mb-4 text-pijet-blue text-center">THERE ARE NO SUBMISSION CHARGES, PROCESSING FEES, OR HIDDEN CHARGES FOR PAPER SUBMISSION IN PIJET.<br/> PUBLICATION IS FREE OF COST FOR ALL AUTHORS</h1>
            </div>
        </div>
    );
};

export default Guidelines;
