import React, { useState } from "react";

const Accept = () => {
  const [showSampleEmail, setShowSampleEmail] = useState(false);

  const emailBody = `
  Dear PIJET Editorial Team,

  Please find below the details of my manuscript submission for 
  PIJET Volume 1 Issue 2 - June 2024:

  Paper Title: [Enter Paper Title Here]

  Author List:
  1. [Author Name], [Organisation], [Author Email]
  2. [Author Name], [Organisation], [Author Email]
  3. [Author Name], [Organisation], [Author Email]
  (Include as many authors as necessary)

  Thank you for considering my manuscript for publication.

  Best regards,
  [Your Name]
  [Your Contact Information] 
  `.trim();

  const mailToLink = `mailto:pijet@pict.edu?subject=Paper%20Submission%20for%20Volume%201%20Issue%202%20-%20June%202024&body=${encodeURIComponent(
    emailBody
  )}`;

  const sampleEmail = `
    Dear PIJET Editorial Team,

    Please find below the details of my manuscript submission for 
    PIJET Volume 1 Issue 2 - June 2024:

    Paper Title: [Enter Paper Title Here]

    Author List:
    1. [Author Name], [Organisation], [Author Email]
    2. [Author Name], [Organisation], [Author Email]
    3. [Author Name], [Organisation], [Author Email]
    (Include as many authors as necessary)

    Thank you for considering my manuscript for publication.

    Best regards,
    [Your Name]
    [Your Contact Information]
  `;

  return (
    <div className="my-24">
      <h3 className="text-pijet-blue text-4xl font-bold">
        We are only accepting manuscripts for PIJET Volume 1 Issue 2 - June
        2024.
      </h3>
      <h3 className="text-pijet-blue text-4xl font-bold my-8">
        Submit Your Manuscript at{" "}
        <a href={mailToLink} className="underline">
          pijet@pict.edu
        </a>
      </h3>
      <button
        onClick={() => setShowSampleEmail(!showSampleEmail)}
        className="bg-pijet-blue text-white font-bold py-2 px-4 rounded"
      >
        {showSampleEmail ? "Hide" : "Show"} Sample Email Format
      </button>
      {showSampleEmail && (
        <div>
          <div className="mt-8 mx-auto bg-gray-100 w-3/5 p-4 border rounded">
            <pre className="whitespace-pre-wrap text-left">{sampleEmail}</pre>
          </div>
          <div>
            <h3 className="text-pijet-blue text-2xl mt-2 font-bold">
              Please replace the placeholders with your manuscript details.
            </h3>
            {/* Note: Make sure to attach your manuscript pdf with the email */}
            <h4 className="text-pijet-blue text-xl my-2 font-bold">
              Note: Make sure to attach your manuscript pdf with the email.
            </h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accept;
