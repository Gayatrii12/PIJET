import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import 'tailwindcss/tailwind.css';

const EthicsAndPolicies = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const getArrowIcon = (sectionId) => {
    return expandedSections[sectionId] ? faAngleUp : faAngleDown;
  };

  return (
    <div className="max-w-7xl mx-auto p-6 text-justify">
      <h1 className="text-4xl font-bold mb-4 text-pijet-blue">PIJET Ethics and Policies Code</h1>

      <p className="mb-6 text-xl">
        At PICT's International Journal on Engineering and Technology (PIJET), we are committed to upholding
        the highest standards of ethical conduct in the field of computing and engineering. Our Ethics and Policies
        Code serves as a guiding framework to ensure transparency, integrity, and fairness in all aspects of the
        publication process.
      </p>

      <p className="mb-6 text-xl">
        We invite authors, reviewers, and readers to familiarize themselves with our ethical principles outlined below.
        The content is organized into sections for easy navigation, and each topic is presented in an expandable format.
      </p>

      <div className="mb-6">
        <h2
          className="text-3xl font-bold mb-2 cursor-pointer text-pijet-blue"
          onClick={() => toggleSection('researchMisconduct')}
        >
          1. Research Misconduct 
          <FontAwesomeIcon
            icon={getArrowIcon('researchMisconduct')}
            className="ml-2"
          />
        </h2>
        {expandedSections['researchMisconduct'] && (
          <>
            <p className="mb-2 text-xl">
              Authors submitting to PIJET are expected to present their research results honestly,
              refraining from fabricating, falsifying, or selectively reporting data to mislead or deceive.
            </p>
            <p className="mb-2 text-xl">
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
          className="text-3xl font-bold mb-2 cursor-pointer text-pijet-blue"
          onClick={() => toggleSection('authorship')}
        >
          2. Authorship
          <FontAwesomeIcon
            icon={getArrowIcon('authorship')}
            className="ml-2"
          />
        </h2>
        {expandedSections['authorship'] && (
          <>
            <p className="mb-2 text-xl">
              The authorship policy emphasizes inclusivity, ensuring that all individuals who have made a
              significant contribution to the research are given the opportunity to be cited as authors.
            </p>
            <p className="mb-2 text-xl">
              Furthermore, contributors to the work should be acknowledged appropriately. The full institutional
              affiliations of all authors, encompassing both academic and corporate affiliations, should be
              clearly stated in submitted articles.
            </p>
          </>
        )}
      </div>

      <div className="mb-6">
        <h2
          className="text-3xl font-bold mb-2 cursor-pointer text-pijet-blue"
          onClick={() => toggleSection('competingInterests')}
        >
          3. Competing Interests
          <FontAwesomeIcon
            icon={getArrowIcon('competingInterests')}
            className="ml-2"
          />
        </h2>
        {expandedSections['competingInterests'] && (
          <>
            <p className="mb-2 text-xl">
              PIJET places a strong emphasis on transparency regarding competing interests. Authors, referees,
              and editors are required to openly declare any conflicting interests that may compromise the objectivity,
              integrity, or perceived value of the publication.
            </p>
          </>
        )}
      </div>

      <div className="mb-6">
        <h2
          className="text-3xl font-bold mb-2 cursor-pointer text-pijet-blue"
          onClick={() => toggleSection('peerReview')}
        >
          4. Peer Review
          <FontAwesomeIcon
            icon={getArrowIcon('peerReview')}
            className="ml-2"
          />
        </h2>
        {expandedSections['peerReview'] && (
          <>
            <p className="mb-2 text-xl">
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
          className="text-3xl font-bold mb-2 cursor-pointer text-pijet-blue"
          onClick={() => toggleSection('recommendedCitations')}
        >
          5. Recommended Citations in Peer Review
          <FontAwesomeIcon
            icon={getArrowIcon('recommendedCitations')}
            className="ml-2"
          />
        </h2>
        {expandedSections['recommendedCitations'] && (
          <>
            <p className="mb-2 text-xl">
              Authors retain control over their work, deciding whether to incorporate suggested references during the peer
              review process. PIJET discourages coercive citation practices and encourages authors to resist undue pressure
              to include references solely for the purpose of boosting citation numbers.
            </p>
          </>
        )}
      </div>

      <div className="mb-6">
        <h2
          className="text-3xl font-bold mb-2 cursor-pointer text-pijet-blue"
          onClick={() => toggleSection('plagiarism')}
        >
          6. Plagiarism
          <FontAwesomeIcon
            icon={getArrowIcon('plagiarism')}
            className="ml-2"
          />
        </h2>
        {expandedSections['plagiarism'] && (
          <>
            <p className="mb-2 text-xl">
              PIJET strictly prohibits plagiarism and self-plagiarism. Authors are expected to submit original work, and
              the journal employs tools such as CrossCheck to identify and address any instances of plagiarism.
            </p>
          </>
        )}
      </div>

      <div className="mb-6">
        <h2
          className="text-3xl font-bold mb-2 cursor-pointer text-pijet-blue"
          onClick={() => toggleSection('duplicateSubmission')}
        >
          7. Duplicate Submission
          <FontAwesomeIcon
            icon={getArrowIcon('duplicateSubmission')}
            className="ml-2"
          />
        </h2>
        {expandedSections['duplicateSubmission'] && (
          <>
            <p className="mb-2 text-xl">
              Simultaneous submissions of the same manuscript to different journals are not allowed, ensuring the exclusivity
              and originality of the research submitted to PIJET.
            </p>
          </>
        )}
      </div>

      <div className="mb-6">
        <h2
          className="text-3xl font-bold mb-2 cursor-pointer text-pijet-blue"
          onClick={() => toggleSection('correctionsRetractions')}
        >
          8. Corrections and Retractions
          <FontAwesomeIcon
            icon={getArrowIcon('correctionsRetractions')}
            className="ml-2"
          />
        </h2>
        {expandedSections['correctionsRetractions'] && (
          <>
            <p className="mb-2 text-xl">
              Authors are obligated to cooperate with editors for retractions or corrections, especially in cases where there
              is clear evidence of unreliable findings, redundant publication, plagiarism, or unethical research. The journal
              issues retractions or errata based on the nature of the issue.
            </p>
          </>
        )}
      </div>

      <div className="mb-6">
        <h2
          className="text-3xl font-bold mb-2 cursor-pointer text-pijet-blue"
          onClick={() => toggleSection('handlingResearchMisconduct')}
        >
          9. Handling Research Misconduct
          <FontAwesomeIcon
            icon={getArrowIcon('handlingResearchMisconduct')}
            className="ml-2"
          />
        </h2>
        {expandedSections['handlingResearchMisconduct'] && (
          <>
            <p className="mb-2 text-xl">
              The primary responsibility for addressing research misconduct lies with the employers of the researchers.
              Formal investigations may occur based on evidence, and minor misdemeanors are expected to be corrected by teachers
              and mentors.
            </p>
          </>
        )}
      </div>

      <div className="mb-6">
        <h2
          className="text-3xl font-bold mb-2 cursor-pointer text-pijet-blue"
          onClick={() => toggleSection('dataSharing')}
        >
          10. Data Sharing
          <FontAwesomeIcon
            icon={getArrowIcon('dataSharing')}
            className="ml-2"
          />
        </h2>
        {expandedSections['dataSharing'] && (
          <>
            <p className="mb-2 text-xl">
              Authors are encouraged to share their data in accordance with relevant privacy regulations. Data availability
              statements should confirm the presence or absence of shared data, promoting transparency and collaboration
              within the research community.
            </p>
          </>
        )}
      </div>

      <div className="mb-6">
        <h2
          className="text-3xl font-bold mb-2 cursor-pointer text-pijet-blue"
          onClick={() => toggleSection('submissions')}
        >
          11. Submissions
          <FontAwesomeIcon
            icon={getArrowIcon('submissions')}
            className="ml-2"
          />
        </h2>
        {expandedSections['submissions'] && (
          <>
            <p className="mb-2 text-xl">
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
