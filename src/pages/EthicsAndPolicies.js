// src/components/EthicsAndPolicies.js

import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const EthicsAndPolicies = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 text-justify">
      <h1 className="text-4xl font-bold mb-4">PIJET Ethics and Policies Code</h1>

      <div className="mb-6">
        <h2
          className="text-3xl font-bold mb-2 cursor-pointer"
          onClick={() => toggleSection('researchMisconduct')}
        >
          Research Misconduct
        </h2>
        {expandedSections['researchMisconduct'] && (
          <>
            <p className="mb-2">
              Authors submitting to PIJET are expected to present their research results honestly,
              refraining from fabricating, falsifying, or selectively reporting data to mislead or deceive.
            </p>
            <p className="mb-2">
              Maintaining the integrity of the data is crucial, and theft of data or research results from others
              is considered unethical. Authors are encouraged to record and maintain their research findings
              for transparency, analysis, and review. Exceptions for privacy, patent protection, or similar
              reasons may be considered, provided they are appropriately justified.
            </p>
          </>
        )}
      </div>

      <div className="mb-6">
        <h2
          className="text-3xl font-bold mb-2 cursor-pointer"
          onClick={() => toggleSection('authorship')}
        >
          Authorship
        </h2>
        {expandedSections['authorship'] && (
          <>
            <p className="mb-2">
              The authorship policy emphasizes inclusivity, ensuring that all individuals who have made a
              significant contribution to the research are given the opportunity to be cited as authors.
            </p>
            <p className="mb-2">
              Furthermore, contributors to the work should be acknowledged appropriately. The full institutional
              affiliations of all authors, encompassing both academic and corporate affiliations, should be
              clearly stated in submitted articles.
            </p>
          </>
        )}
      </div>

      <div className="mb-6">
        <h2
          className="text-3xl font-bold mb-2 cursor-pointer"
          onClick={() => toggleSection('competingInterests')}
        >
          Competing Interests
        </h2>
        {expandedSections['competingInterests'] && (
          <>
            <p className="mb-2">
              PIJET places a strong emphasis on transparency regarding competing interests. Authors, referees,
              and editors are required to openly declare any conflicting interests that may compromise the objectivity,
              integrity, or perceived value of the publication.
            </p>
          </>
        )}
      </div>

      <div className="mb-6">
        <h2
          className="text-3xl font-bold mb-2 cursor-pointer"
          onClick={() => toggleSection('peerReview')}
        >
          Peer Review
        </h2>
        {expandedSections['peerReview'] && (
          <>
            <p className="mb-2">
              Submissions undergo a rigorous peer review process involving at least two experts, as suggested by the
              editorial board. Simultaneous submissions of the same manuscript to different journals are not permitted,
              ensuring the exclusivity of submissions to PIJET. Manuscripts outside the scope of the journal will not be
              considered for review. Editors may seek additional reviews when necessary, maintaining the confidentiality
              of the peer review process.
            </p>
          </>
        )}
      </div>

      <div className="mb-6">
        <h2
          className="text-3xl font-bold mb-2 cursor-pointer"
          onClick={() => toggleSection('recommendedCitations')}
        >
          Recommended Citations in Peer Review
        </h2>
        {expandedSections['recommendedCitations'] && (
          <>
            <p className="mb-2">
              Authors retain control over their work, deciding whether to incorporate suggested references during the peer
              review process. PIJET discourages coercive citation practices and encourages authors to resist undue pressure
              to include references solely for the purpose of boosting citation numbers.
            </p>
          </>
        )}
      </div>

      <div className="mb-6">
        <h2
          className="text-3xl font-bold mb-2 cursor-pointer"
          onClick={() => toggleSection('plagiarism')}
        >
          Plagiarism
        </h2>
        {expandedSections['plagiarism'] && (
          <>
            <p className="mb-2">
              PIJET strictly prohibits plagiarism and self-plagiarism. Authors are expected to submit original work, and
              the journal employs tools such as CrossCheck to identify and address any instances of plagiarism.
            </p>
          </>
        )}
      </div>

      <div className="mb-6">
        <h2
          className="text-3xl font-bold mb-2 cursor-pointer"
          onClick={() => toggleSection('duplicateSubmission')}
        >
          Duplicate Submission
        </h2>
        {expandedSections['duplicateSubmission'] && (
          <>
            <p className="mb-2">
              Simultaneous submissions of the same manuscript to different journals are not allowed, ensuring the exclusivity
              and originality of the research submitted to PIJET.
            </p>
          </>
        )}
      </div>

      <div className="mb-6">
        <h2
          className="text-3xl font-bold mb-2 cursor-pointer"
          onClick={() => toggleSection('correctionsRetractions')}
        >
          Corrections and Retractions
        </h2>
        {expandedSections['correctionsRetractions'] && (
          <>
            <p className="mb-2">
              Authors are obligated to cooperate with editors for retractions or corrections, especially in cases where there
              is clear evidence of unreliable findings, redundant publication, plagiarism, or unethical research. The journal
              issues retractions or errata based on the nature of the issue.
            </p>
          </>
        )}
      </div>

      <div className="mb-6">
        <h2
          className="text-3xl font-bold mb-2 cursor-pointer"
          onClick={() => toggleSection('handlingResearchMisconduct')}
        >
          Handling Research Misconduct
        </h2>
        {expandedSections['handlingResearchMisconduct'] && (
          <>
            <p className="mb-2">
              The primary responsibility for addressing research misconduct lies with the employers of the researchers.
              Formal investigations may occur based on evidence, and minor misdemeanors are expected to be corrected by teachers
              and mentors.
            </p>
          </>
        )}
      </div>

      <div className="mb-6">
        <h2
          className="text-3xl font-bold mb-2 cursor-pointer"
          onClick={() => toggleSection('dataSharing')}
        >
          Data Sharing
        </h2>
        {expandedSections['dataSharing'] && (
          <>
            <p className="mb-2">
              Authors are encouraged to share their data in accordance with relevant privacy regulations. Data availability
              statements should confirm the presence or absence of shared data, promoting transparency and collaboration
              within the research community.
            </p>
          </>
        )}
      </div>

      <div className="mb-6">
        <h2
          className="text-3xl font-bold mb-2 cursor-pointer"
          onClick={() => toggleSection('submissions')}
        >
          Submissions
        </h2>
        {expandedSections['submissions'] && (
          <>
            <p className="mb-2">
              To foster inclusivity and accessibility, PIJET supports the principle that submissions to the journal are
              free of cost, eliminating financial barriers for authors and promoting a diverse range of contributions.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default EthicsAndPolicies;
