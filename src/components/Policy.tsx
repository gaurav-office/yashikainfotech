const Policy = () => {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg shadow-2xl">
      <h1 className="text-5xl font-extrabold mb-6 text-center">
        Privacy Policy
      </h1>
      <p className="text-lg text-center mb-8 bg-white bg-opacity-20 p-4 rounded-lg">
        <strong>Yashika Infotech Services</strong> ("we," "our," or "us") values
        your privacy and is committed to protecting your personal information.
        This Privacy Policy explains what data we collect, how we use it, and
        the measures we take to safeguard your information. By using our website
        or services, you agree to the terms outlined below.
      </p>
      <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Information We Collect</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Personal Information:</strong> Your name, email address,
            phone number, and postal address.
          </li>
          <li>
            <strong>Payment Information:</strong> If you make a purchase, we may
            collect payment details, such as credit card information.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about your interaction with
            our website, including IP address, browser type, operating system,
            and access times.
          </li>
          <li>
            <strong>Other Information:</strong> Any additional data you provide,
            such as responses to surveys or contact form submissions.
          </li>
        </ul>
      </div>

      <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg mt-6">
        <h2 className="text-3xl font-semibold mb-4">
          How We Use Your Information
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>To deliver our services effectively.</li>
          <li>To process payments securely.</li>
          <li>
            To communicate with you about our services, offers, and promotions.
          </li>
          <li>To enhance and personalize your experience on our website.</li>
          <li>To comply with legal and regulatory requirements.</li>
        </ul>
      </div>

      <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg mt-6">
        <h2 className="text-3xl font-semibold mb-4">
          How We Protect Your Information
        </h2>
        <p>
          We implement industry-standard security measures to protect your
          personal data from unauthorized access, alteration, disclosure, or
          destruction. However, no method of data transmission or storage is
          100% secure, and we cannot guarantee absolute security.
        </p>
      </div>

      <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg mt-6">
        <h2 className="text-3xl font-semibold mb-4">
          How We Share Your Information
        </h2>
        <p>
          We do not sell your personal information. However, we may share your
          data with:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Trusted Third-Party Service Providers</strong> who assist us
            in payment processing, email marketing, and website analytics.
          </li>
          <li>
            <strong>Affiliates and Business Partners</strong> to improve our
            services and customer experience.
          </li>
          <li>
            <strong>Legal Authorities</strong> if required by law or to protect
            our rights, safety, or property.
          </li>
        </ul>
      </div>

      <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg mt-6">
        <h2 className="text-3xl font-semibold mb-4">
          Cookies & Tracking Technologies
        </h2>
        <p>
          We use cookies and similar tracking technologies to improve your
          browsing experience and analyze website traffic. You can manage or
          disable cookies through your browser settings, though doing so may
          impact website functionality.
        </p>
      </div>

      <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg mt-6">
        <h2 className="text-3xl font-semibold mb-4">
          Links to Third-Party Websites
        </h2>
        <p>
          Our website may include links to external sites that are not operated
          by us. We are not responsible for the privacy practices of these
          third-party websites, so we encourage you to review their privacy
          policies before providing any personal information.
        </p>
      </div>

      <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg mt-6">
        <h2 className="text-3xl font-semibold mb-4">Children’s Privacy</h2>
        <p>
          Our services are not intended for individuals under the age of 13. We
          do not knowingly collect personal information from children. If you
          believe we have inadvertently collected such data, please contact us
          immediately to request its removal.
        </p>
      </div>

      <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg mt-6">
        <h2 className="text-3xl font-semibold mb-4">
          Changes to This Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy periodically. Any modifications will
          be posted on this page with an updated effective date. By continuing
          to use our website or services after changes are made, you consent to
          the revised policy.
        </p>
      </div>

      <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg mt-6">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p>
          If you have any questions, concerns, or requests related to this
          Privacy Policy, please contact us at:
        </p>
        <p className="mt-2">
          <strong>📧 Email:</strong>{" "}
          <a
            href="mailto:contact@yashikainfotech.com"
            className="text-yellow-300"
          >
            contact@yashikainfotech.com
          </a>
        </p>
        <p>
          <strong>📍 Company:</strong> Yashika Infotech Services
        </p>
      </div>

      <p className="text-center mt-8 text-xl font-semibold">
        Thank you for trusting <strong>Yashika Infotech Services</strong> with
        your information!
      </p>
    </div>
  );
};

export default Policy;

