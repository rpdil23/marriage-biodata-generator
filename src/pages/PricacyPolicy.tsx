export default function TermsAndPrivacy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Privacy Policy Section */}
      <section>
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4 text-gray-600">
          This Privacy Policy describes how we handle the information you
          provide on the Marriage Biodata Generator website (hereinafter
          referred to as the "Service").
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          1. Information We Collect
        </h2>
        <p className="mb-4 text-gray-600">
          Your privacy is very important to us. This Service does not collect,
          store, or process any personal information you input (such as name,
          date of birth, address, etc.) on our servers for the purpose of
          generating biodata.
        </p>
        <ul className="list-disc ml-6 text-gray-600">
          <li>
            All information you enter is processed locally within your browser
            only
          </li>
          <li>
            All input data is permanently deleted once you close the page or
            your browser
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          2. Use of Information
        </h2>
        <p className="mb-4 text-gray-600">
          Since we do not collect any personal information, we do not use,
          share, or sell your information. The information you provide is used
          solely for the purpose of generating your biodata and allowing you to
          download it as a PDF.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Cookies</h2>
        <p className="mb-4 text-gray-600">
          This website does not use cookies for its core functionality. However,
          if any third-party services are utilized for website analytics or
          performance monitoring (e.g., Google Analytics), they may use cookies.
          If so, you should review the privacy policies of such third-party
          services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          4. Links to Third-Party Websites
        </h2>
        <p className="mb-4 text-gray-600">
          Our Service may contain links to other websites. We are not
          responsible for the content, privacy policies, or practices of any
          such third-party sites. We strongly advise you to review the Privacy
          Policy of every site you visit.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          5. Children's Privacy
        </h2>
        <p className="mb-4 text-gray-600">
          Our Service is not intended for anyone under the age of 13. We do not
          knowingly collect personally identifiable information from anyone
          under 13. If you are a parent or guardian and you are aware that your
          child has provided us with personal information, please contact us.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          6. Changes to This Privacy Policy
        </h2>
        <p className="mb-4 text-gray-600">
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page. You are
          advised to review this Privacy Policy periodically for any changes.
        </p>
        <p className="mb-2 text-gray-600">
          Address: <br />
          {/* Phone: <br /> */}
          Email:
        </p>
      </section>
    </div>
  );
}
