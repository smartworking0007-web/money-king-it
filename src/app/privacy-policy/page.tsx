import React from "react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-lg rounded-xl border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 border-b pb-4">
          Privacy Policy
        </h1>

        <div className="text-sm text-gray-500 mb-6 space-y-1">
          <p>
            <strong>Effective Date:</strong> 14 August 2026
          </p>
          <p>
            <strong>Last Updated:</strong> 14 August 2026
          </p>
        </div>

        <div className="space-y-8 text-gray-700 leading-relaxed text-sm md:text-base">
          <section className="space-y-3">
            <p>
              Skky Loom Digital Technology Pvt. Ltd. (&quot;Skky Loom Digital
              Technology Pvt. Ltd.&quot;, &quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;) respects your privacy and is committed to
              protecting the personal and business information entrusted to us.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, store, process
              and protect information when you visit our website, contact us,
              purchase or use our IT services, use our software or SaaS
              products, submit an enquiry, or otherwise interact with Skky Loom Digital Technology Pvt. Ltd.
            </p>
            <p>
              By accessing or using our website or services, you acknowledge
              that you have read and understood this Privacy Policy.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              1. About Skky Loom Digital Technology Pvt. Ltd.
            </h2>
            <p className="mb-2">
              Skky Loom Digital Technology Pvt. Ltd. provides technology and
              digital services, which may include:
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Website design and development</li>
              <li>Web application development</li>
              <li>Mobile application development</li>
              <li>Software development</li>
              <li>CRM and business software</li>
              <li>SaaS solutions</li>
              <li>API and third-party integrations</li>
              <li>Cloud and hosting-related services</li>
              <li>Digital marketing</li>
              <li>Search Engine Optimization (SEO)</li>
              <li>Performance marketing</li>
              <li>Social media services</li>
              <li>Technology consulting</li>
              <li>IT support and maintenance</li>
              <li>Other technology and digital services</li>
            </ul>
            <p className="mt-3">
              The exact services available may vary from time to time.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-4">
              Depending on how you interact with us, we may collect the
              following information.
            </p>

            <div className="space-y-4 pl-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  A. Personal Information
                </h3>
                <p className="mb-2">This may include:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Full name</li>
                  <li>Company name</li>
                  <li>Job title/designation</li>
                  <li>Email address</li>
                  <li>Mobile/telephone number</li>
                  <li>Business address</li>
                  <li>City and country</li>
                  <li>Contact preferences</li>
                  <li>Information provided in enquiries or communications</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  B. Account Information
                </h3>
                <p className="mb-2">
                  If you create an account or use one of our software products,
                  we may collect:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Username</li>
                  <li>Email address</li>
                  <li>Login information</li>
                  <li>Account preferences</li>
                  <li>Profile information</li>
                  <li>Subscription information</li>
                  <li>Account activity</li>
                </ul>
                <p className="mt-2 text-sm italic">
                  We do not intentionally store passwords in plain text.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  C. Business Information
                </h3>
                <p className="mb-2">
                  When you use our business or technology services, you may
                  provide:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Company information</li>
                  <li>Business requirements</li>
                  <li>Project details</li>
                  <li>Business documents</li>
                  <li>Customer or employee information</li>
                  <li>Website/application requirements</li>
                  <li>Technical specifications</li>
                  <li>
                    Other information necessary to provide the requested service
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  D. Payment Information
                </h3>
                <p className="mb-2">
                  If you purchase our services, we may collect information
                  necessary to process or verify payments, such as:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Billing name</li>
                  <li>Billing address</li>
                  <li>Invoice details</li>
                  <li>Transaction reference</li>
                  <li>Subscription information</li>
                </ul>
                <p className="mt-2">
                  Where payments are processed through third-party payment
                  providers, payment information may be handled directly by
                  those providers according to their own privacy policies.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  E. Technical Information
                </h3>
                <p className="mb-2">
                  When you access our website or software, we may automatically
                  collect:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Device type</li>
                  <li>Operating system</li>
                  <li>Language preference</li>
                  <li>Approximate location</li>
                  <li>Pages visited</li>
                  <li>Website activity</li>
                  <li>Referral information</li>
                  <li>Date and time of access</li>
                  <li>Error and diagnostic information</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              3. How We Collect Information
            </h2>
            <p className="mb-2">We may collect information when you:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Visit our website</li>
              <li>Submit a contact or enquiry form</li>
              <li>Request a quotation</li>
              <li>Create an account</li>
              <li>Purchase a service</li>
              <li>Subscribe to software or SaaS products</li>
              <li>Contact customer support</li>
              <li>Communicate with our team</li>
              <li>Submit project requirements</li>
              <li>Participate in surveys or promotional activities</li>
              <li>Use our applications or software</li>
              <li>Interact with our emails or digital communications</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              4. How We Use Your Information
            </h2>
            <p className="mb-2">
              We may use information collected for purposes including:
            </p>
            <ol className="list-decimal ml-6 space-y-1">
              <li>Providing and delivering our IT services.</li>
              <li>Creating and managing customer accounts.</li>
              <li>Developing, configuring and maintaining software.</li>
              <li>Processing service requests and projects.</li>
              <li>Providing customer support.</li>
              <li>Sending quotations, invoices and service communications.</li>
              <li>Processing subscriptions and payments.</li>
              <li>Communicating with customers regarding projects.</li>
              <li>Improving our website, software and services.</li>
              <li>Monitoring system performance and security.</li>
              <li>
                Detecting and preventing fraud, abuse and unauthorized activity.
              </li>
              <li>Performing analytics and business reporting.</li>
              <li>Sending marketing communications where permitted.</li>
              <li>
                Complying with applicable legal and regulatory requirements.
              </li>
              <li>Protecting our rights, property and systems.</li>
            </ol>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              5. Customer Data
            </h2>
            <p className="mb-3">
              Customers may provide their own data to Skky Loom Digital
              Technology Pvt. Ltd. while using our software, development,
              hosting, CRM or other services.
            </p>
            <p className="mb-2">
              Such data may include information relating to:
            </p>
            <ul className="list-disc ml-6 space-y-1 mb-3">
              <li>Customers</li>
              <li>Employees</li>
              <li>Leads</li>
              <li>Business contacts</li>
              <li>Transactions</li>
              <li>Projects</li>
              <li>Documents</li>
              <li>Communications</li>
              <li>Other business information</li>
            </ul>
            <p className="mb-2">
              Where Skky Loom Digital Technology Pvt. Ltd. processes customer
              data on behalf of a customer, we will generally process such
              information according to the customer&apos;s instructions and the
              applicable agreement between the parties.
            </p>
            <p>
              The customer remains responsible for ensuring that it has the
              necessary rights, permissions and lawful basis to provide such
              information to us.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              6. Software and SaaS Services
            </h2>
            <p className="mb-2">
              For our software or SaaS products, we may collect information
              relating to:
            </p>
            <ul className="list-disc ml-6 space-y-1 mb-3">
              <li>User accounts</li>
              <li>Login activity</li>
              <li>Usage activity</li>
              <li>Features accessed</li>
              <li>System logs</li>
              <li>Subscription status</li>
              <li>Technical errors</li>
              <li>Device and browser information</li>
            </ul>
            <p>
              This information may be used to operate, secure, maintain and
              improve the software.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              7. Cookies and Similar Technologies
            </h2>
            <p className="mb-2">
              Our website may use cookies and similar technologies to:
            </p>
            <ul className="list-disc ml-6 space-y-1 mb-3">
              <li>Keep the website functioning properly</li>
              <li>Remember user preferences</li>
              <li>Improve website performance</li>
              <li>Understand website traffic</li>
              <li>Analyze user behavior</li>
              <li>Measure advertising and marketing performance</li>
              <li>Improve user experience</li>
              <li>Maintain security</li>
            </ul>
            <p>
              You may control or disable cookies through your browser settings.
              Some website functionality may be affected if cookies are
              disabled.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              8. Analytics and Advertising
            </h2>
            <p className="mb-2">
              We may use third-party analytics and advertising technologies to
              understand website usage and measure marketing campaigns.
            </p>
            <p className="mb-2">
              These services may collect information such as:
            </p>
            <ul className="list-disc ml-6 space-y-1 mb-3">
              <li>Device information</li>
              <li>Browser information</li>
              <li>IP address</li>
              <li>Pages visited</li>
              <li>Website interactions</li>
              <li>Advertising identifiers</li>
              <li>Conversion information</li>
            </ul>
            <p>
              Third-party services process information according to their
              respective privacy policies and terms.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              9. Sharing of Information
            </h2>
            <p className="mb-2">
              We may share information with trusted third parties where
              reasonably necessary to provide our services, including:
            </p>
            <ul className="list-disc ml-6 space-y-1 mb-3">
              <li>Cloud hosting providers</li>
              <li>Software and technology providers</li>
              <li>Payment processors</li>
              <li>Email service providers</li>
              <li>Communication providers</li>
              <li>Analytics providers</li>
              <li>Security providers</li>
              <li>CRM and business tools</li>
              <li>IT infrastructure providers</li>
              <li>Professional advisors</li>
              <li>Contractors and service providers</li>
            </ul>
            <p className="mb-2">
              We may also disclose information where required by law, court
              order, government authority or lawful request.
            </p>
            <p>
              We do not sell personal information merely for the purpose of
              selling personal data.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              10. Third-Party Services
            </h2>
            <p className="mb-2">
              Our website or software may integrate with or link to third-party
              services such as:
            </p>
            <ul className="list-disc ml-6 space-y-1 mb-3">
              <li>Payment gateways</li>
              <li>Cloud platforms</li>
              <li>Email services</li>
              <li>Communication platforms</li>
              <li>Analytics tools</li>
              <li>Advertising platforms</li>
              <li>CRM platforms</li>
              <li>Social media platforms</li>
              <li>API providers</li>
            </ul>
            <p className="mb-2">
              Third-party services operate independently and may have their own
              privacy policies and terms.
            </p>
            <p>
              We recommend reviewing the privacy policies of third-party
              services before using them.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              11. Data Security
            </h2>
            <p className="mb-2">
              We take reasonable technical and organizational measures to
              protect information against:
            </p>
            <ul className="list-disc ml-6 space-y-1 mb-3">
              <li>Unauthorized access</li>
              <li>Unauthorized disclosure</li>
              <li>Loss</li>
              <li>Misuse</li>
              <li>Alteration</li>
              <li>Destruction</li>
              <li>Security incidents</li>
            </ul>
            <p className="mb-2">
              Depending on the service, security measures may include access
              controls, authentication mechanisms, encryption where appropriate,
              backups, monitoring and restricted administrative access.
            </p>
            <p>
              However, no internet-based service or electronic storage system
              can be guaranteed to be completely secure.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              12. Data Retention
            </h2>
            <p className="mb-2">
              We retain personal and business information only for as long as
              reasonably necessary for:
            </p>
            <ul className="list-disc ml-6 space-y-1 mb-3">
              <li>Providing our services</li>
              <li>Maintaining customer accounts</li>
              <li>Completing projects</li>
              <li>Providing support</li>
              <li>Maintaining financial and business records</li>
              <li>Resolving disputes</li>
              <li>Preventing fraud and abuse</li>
              <li>Complying with legal obligations</li>
              <li>Protecting our legitimate business interests</li>
            </ul>
            <p>
              When information is no longer required, we may delete, anonymize
              or securely dispose of it, subject to applicable legal and
              contractual requirements.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              13. International Data Processing
            </h2>
            <p className="mb-2">
              Depending on the technology providers and infrastructure used to
              provide our services, information may be processed or stored in
              locations outside your state or country.
            </p>
            <p>
              Where applicable, we take reasonable steps to ensure that such
              processing is carried out in accordance with applicable law and
              contractual obligations.
            </p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              14. Your Privacy Rights
            </h2>
            <p className="mb-2">
              Subject to applicable law, you may have rights relating to your
              personal information, including:
            </p>
            <ul className="list-disc ml-6 space-y-1 mb-3">
              <li>Requesting access to personal information</li>
              <li>Requesting correction of inaccurate information</li>
              <li>Requesting deletion where applicable</li>
              <li>Requesting information regarding processing</li>
              <li>Withdrawing consent where processing is based on consent</li>
              <li>Requesting restriction or objection where applicable</li>
              <li>Raising a privacy-related grievance</li>
            </ul>
            <p className="mb-2">
              To exercise applicable rights, please contact us using the details
              provided below.
            </p>
            <p>
              We may request reasonable information to verify your identity
              before processing certain requests.
            </p>
          </section>

          {/* Section 15 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              15. Marketing Communications
            </h2>
            <p className="mb-2">We may send information about:</p>
            <ul className="list-disc ml-6 space-y-1 mb-3">
              <li>New products</li>
              <li>Software updates</li>
              <li>IT services</li>
              <li>Offers</li>
              <li>Webinars</li>
              <li>Events</li>
              <li>Company announcements</li>
              <li>Other business-related communications</li>
            </ul>
            <p className="mb-2">
              Where required, we will obtain appropriate consent for promotional
              communications.
            </p>
            <p className="mb-2">
              You may opt out of marketing communications at any time using the
              unsubscribe option or by contacting us.
            </p>
            <p>
              Service-related communications may still be sent when necessary to
              provide an active service.
            </p>
          </section>

          {/* Section 16 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              16. Children&apos;s Privacy
            </h2>
            <p className="mb-2">
              Our website and services are primarily intended for businesses and
              users who are legally capable of using our services.
            </p>
            <p className="mb-2">
              We do not knowingly collect personal information from children in
              violation of applicable law.
            </p>
            <p>
              If you believe that a child has provided personal information to
              us without appropriate authorization, please contact us.
            </p>
          </section>

          {/* Section 17 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              17. Links to Other Websites
            </h2>
            <p className="mb-2">
              Our website may contain links to third-party websites.
            </p>
            <p>
              Skky Loom Digital Technology Pvt. Ltd. is not responsible for the
              privacy practices, security or content of third-party websites. We
              recommend reviewing the privacy policy of each third-party website
              you visit.
            </p>
          </section>

          {/* Section 18 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              18. Data Breach and Security Incidents
            </h2>
            <p className="mb-2">
              If we become aware of a personal-data security incident that
              requires notification under applicable law, we will take
              appropriate steps in accordance with applicable legal and
              regulatory requirements.
            </p>
            <p>
              We may also take reasonable measures to investigate, contain and
              mitigate the incident.
            </p>
          </section>

          {/* Section 19 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              19. Business Transfers
            </h2>
            <p className="mb-2">
              If Skky Loom Digital Technology Pvt. Ltd. is involved in a merger,
              acquisition, restructuring, sale of assets or similar corporate
              transaction, information may be transferred as part of the
              transaction, subject to applicable law.
            </p>
            <p>
              Where legally required, appropriate notice or consent mechanisms
              will be followed.
            </p>
          </section>

          {/* Section 20 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              20. Changes to This Privacy Policy
            </h2>
            <p className="mb-2">
              We may update this Privacy Policy from time to time to reflect:
            </p>
            <ul className="list-disc ml-6 space-y-1 mb-3">
              <li>Changes in our services</li>
              <li>Changes in technology</li>
              <li>Changes in business practices</li>
              <li>Legal or regulatory requirements</li>
              <li>Changes in privacy standards</li>
            </ul>
            <p>
              The updated policy will be published on our website with a revised
              &quot;Last Updated&quot; date.
            </p>
          </section>

          {/* Section 21 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              21. Contact Us
            </h2>
            <p className="mb-3">
              For privacy questions, requests or grievances, please contact:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-1">
              <p className="font-semibold text-gray-900">
                Skky Loom Digital Technology Pvt. Ltd.
              </p>
              <p>
                <strong>Address:</strong> A39, 2nd Floor, Sector 63, Noida,
                Gautam Buddha Nagar, Uttar Pradesh – 201301, India
              </p>
              <p>
                <strong>Email:</strong> [Insert official email address]
              </p>
              <p>
                <strong>Phone:</strong> [Insert official phone number]
              </p>
              <p>
                <strong>Privacy/Grievance Contact:</strong> [Insert designated
                person or department]
              </p>
            </div>
          </section>

          {/* Section 22 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              22. Consent
            </h2>
            <p className="mb-2">
              By using our website, submitting information, creating an account
              or using our services, you acknowledge that you have read this
              Privacy Policy.
            </p>
            <p>
              Where applicable law requires consent, we will obtain consent
              through appropriate mechanisms before processing personal
              information based on such consent.
            </p>
          </section>

          {/* Section 23 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              23. Disclaimer
            </h2>
            <p className="mb-2">
              Skky Loom Digital Technology Pvt. Ltd. provides technology and
              digital services. Unless expressly stated in a separate agreement,
              Skky Loom Digital Technology Pvt. Ltd. does not guarantee
              uninterrupted availability, error-free operation or compatibility
              of third-party platforms, APIs, hosting services or external
              software.
            </p>
            <p>
              Specific services, security obligations, data-processing
              responsibilities and service levels may also be governed by
              separate contracts, Terms of Service, Master Service Agreements,
              Data Processing Agreements or other applicable agreements.
            </p>
          </section>

          {/* Copyright */}
          <div className="pt-4 border-t text-sm text-gray-500 text-center font-medium">
            © 2026 Skky Loom Digital Technology Pvt. Ltd.. All Rights Reserved.
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-12 pt-6 border-t text-center">
          <Link
            href="/"
            className="text-blue-600 font-semibold hover:underline inline-flex items-center justify-center gap-2"
          >
            <span>←</span> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
