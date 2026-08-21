import React from "react";
import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-12 sm:py-16 px-4 sm:px-6 lg:px-8 font-lexend">
      <div className="max-w-4xl mx-auto bg-white p-5 sm:p-8 md:p-12 shadow-lg rounded-xl sm:rounded-2xl border border-gray-100">
        {/* Header Section */}
        <div className="border-b pb-6 mb-8 text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight">
            TERMS &amp; CONDITIONS
          </h1>
          <p className="text-blue-600 font-semibold uppercase tracking-wide text-xs sm:text-sm">
            Skky Loom Digital Technology Pvt. Ltd.
          </p>
          <div className="text-gray-500 text-xs mt-2 space-y-1">
            <p>Effective Date: 14/08/2026</p>
            <p>Last Updated: 14/08/2026</p>
          </div>
        </div>

        <div className="space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
          {/* Welcome Text */}
          <section>
            <p>
              Welcome to <strong>Skky Loom Digital Technology Pvt. Ltd.</strong>{" "}
              (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;). These Terms &amp; Conditions (&quot;Terms&quot;)
              govern your access to and use of our website, software, SaaS
              products, technology solutions, and IT services.
            </p>
            <p>
              By accessing our website or purchasing/using our services, you
              agree to these Terms.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 uppercase tracking-tight">
              1. About Our Services
            </h2>
            <p className="mb-2">
              Skky Loom Digital Technology Pvt. Ltd. provides digital and
              technology services, which may include:
            </p>
            <ul className="list-disc ml-5 sm:ml-6 space-y-1">
              <li>Website and web application development</li>
              <li>Mobile application development</li>
              <li>Software development</li>
              <li>CRM and business management solutions</li>
              <li>SaaS products</li>
              <li>Cloud and technology solutions</li>
              <li>AI and automation solutions</li>
              <li>API and software integrations</li>
              <li>Digital transformation services</li>
              <li>UI/UX design</li>
              <li>Software maintenance and support</li>
              <li>Other IT and digital services agreed with the client</li>
            </ul>
            <p className="mt-3">
              Specific services, deliverables, timelines and pricing may be
              defined in a separate quotation, proposal, Statement of Work
              (&quot;SOW&quot;), purchase order, or service agreement.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 uppercase tracking-tight">
              2. Eligibility
            </h2>
            <p className="mb-3">
              You must have the legal capacity to enter into a binding agreement
              to purchase or use our services.
            </p>
            <p>
              If you are using our services on behalf of a company or
              organisation, you confirm that you have authority to bind that
              organisation to these Terms.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 uppercase tracking-tight">
              3. Account and Access
            </h2>
            <p className="mb-2">
              Certain services may require you to create an account or provide
              information such as your name, business details, email address and
              contact information.
            </p>
            <p className="mb-2 font-semibold">You are responsible for:</p>
            <ul className="list-disc ml-5 sm:ml-6 space-y-1 mb-3">
              <li>Providing accurate information</li>
              <li>Maintaining the confidentiality of login credentials</li>
              <li>Preventing unauthorised access</li>
              <li>Informing us promptly of any suspected security breach</li>
            </ul>
            <p>
              We may suspend or restrict access where we reasonably believe
              there has been misuse, fraud, security risk, or violation of these
              Terms.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 uppercase tracking-tight">
              4. Project Scope
            </h2>
            <p className="mb-3">
              For custom development projects, the agreed scope will be
              described in the applicable proposal, quotation, SOW, or
              agreement.
            </p>
            <p className="mb-3">
              Any work outside the agreed scope may be treated as additional
              work and may result in additional charges and/or changes to the
              delivery timeline.
            </p>
            <p>
              Changes requested after project approval may require written
              confirmation from both parties.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 uppercase tracking-tight">
              5. Pricing and Payment
            </h2>
            <p className="mb-3">
              All prices will be communicated through our quotation, proposal,
              invoice, subscription plan, or applicable agreement.
            </p>
            <p className="mb-2 font-semibold">
              Depending on the service, payment may be required:
            </p>
            <ul className="list-disc ml-5 sm:ml-6 space-y-1 mb-3">
              <li>In advance</li>
              <li>In milestones</li>
              <li>Monthly or annually</li>
              <li>Upon completion of agreed deliverables</li>
              <li>
                According to the payment schedule specified in the agreement
              </li>
            </ul>
            <p className="mb-3">
              For international clients, payments may be made through supported
              bank transfers, payment gateways, or other approved payment
              methods.
            </p>
            <p>
              Applicable taxes, bank charges, currency conversion charges,
              payment gateway fees, and other transaction charges may be payable
              by the client unless otherwise agreed.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 uppercase tracking-tight">
              6. International Payments
            </h2>
            <p className="mb-3">
              For clients outside India, invoices may be issued in currencies
              such as USD, EUR, GBP, SAR, AED, or another agreed currency.
            </p>
            <p className="mb-3">
              International transactions are subject to applicable banking,
              foreign-exchange, tax, GST, and regulatory requirements.
            </p>
            <p>
              The Company may request information or documents reasonably
              required for processing international payments and maintaining
              regulatory records.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 uppercase tracking-tight">
              7. Refund and Cancellation
            </h2>
            <p className="mb-3">
              Refund eligibility will depend on the nature of the service and
              the applicable agreement.
            </p>
            <p className="mb-3">
              Custom software development, design, consulting, implementation,
              and other professional services may not be refundable once the
              relevant work has commenced, except where otherwise agreed in
              writing or required by applicable law.
            </p>
            <p className="mb-3">
              For SaaS subscriptions, cancellation will be governed by the
              applicable subscription plan.
            </p>
            <p>
              Any approved refund may be subject to applicable
              payment-processing, transaction, or administrative charges where
              legally permissible.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 uppercase tracking-tight">
              8. Delivery and Timelines
            </h2>
            <p className="mb-2">
              We will make reasonable efforts to deliver services within the
              timelines agreed with the client.
            </p>
            <p className="mb-2 font-semibold">
              Delivery timelines may be affected by:
            </p>
            <ul className="list-disc ml-5 sm:ml-6 space-y-1 mb-3">
              <li>
                Delays in receiving information or approvals from the client
              </li>
              <li>Changes in project requirements</li>
              <li>Third-party services</li>
              <li>Technical dependencies</li>
              <li>Force majeure events</li>
              <li>
                Delays caused by external vendors or infrastructure providers
              </li>
            </ul>
            <p>
              We will not be responsible for delays caused primarily by
              circumstances outside our reasonable control.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 uppercase tracking-tight">
              9. Client Responsibilities
            </h2>
            <p className="mb-3">
              The client agrees to provide all information, content,
              credentials, approvals, access, and other materials reasonably
              required to perform the services.
            </p>
            <p>
              The client is responsible for ensuring that any content, data,
              images, software, trademarks, documents, or other materials
              supplied to us do not violate applicable law or third-party
              rights.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 uppercase tracking-tight">
              10. Intellectual Property
            </h2>
            <p className="mb-2 font-semibold">
              Unless otherwise agreed in writing:
            </p>
            <ul className="list-disc ml-5 sm:ml-6 space-y-2 mb-3">
              <li>
                The Company retains ownership of its pre-existing software,
                frameworks, libraries, templates, tools, methodologies, systems,
                know-how, and reusable components.
              </li>
              <li>
                Client-specific deliverables may be transferred or licensed to
                the client according to the applicable project agreement and
                payment status.
              </li>
              <li>
                Third-party software, libraries, APIs, fonts, plugins, and other
                components remain subject to their respective licences.
              </li>
            </ul>
            <p>
              No intellectual-property transfer will be considered complete
              until all applicable amounts due to the Company have been paid,
              unless otherwise agreed in writing.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 uppercase tracking-tight">
              11. Client Data
            </h2>
            <p className="mb-3">
              Where we process information or data on behalf of a client, the
              client remains responsible for ensuring that it has the
              appropriate rights, permissions, notices, and lawful basis to
              provide such data.
            </p>
            <p>
              We will process client data in accordance with applicable
              agreements and our Privacy Policy.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 uppercase tracking-tight">
              12. Privacy and Data Protection
            </h2>
            <p className="mb-3">
              Your use of our website and services may involve the collection
              and processing of personal information.
            </p>
            <p>
              Please refer to our Privacy Policy for information regarding how
              we collect, use, store, and protect personal information.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 uppercase tracking-tight">
              13. Third-Party Services
            </h2>
            <p className="mb-3">
              Our services may integrate with third-party platforms, APIs, cloud
              providers, payment gateways, communication platforms, hosting
              providers, or other services.
            </p>
            <p className="mb-3">
              We do not control third-party services and cannot guarantee their
              continuous availability, functionality, pricing, or policies.
            </p>
            <p>
              Any use of third-party services may also be subject to the third
              party&apos;s own terms and policies.
            </p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 uppercase tracking-tight">
              14. Prohibited Use
            </h2>
            <p className="mb-2 font-semibold">
              You must not use our services to:
            </p>
            <ul className="list-disc ml-5 sm:ml-6 space-y-1 mb-3">
              <li>Conduct unlawful activities</li>
              <li>Commit fraud or financial crimes</li>
              <li>Distribute malware or harmful software</li>
              <li>Gain unauthorised access to systems</li>
              <li>Violate intellectual-property rights</li>
              <li>Abuse, attack, or disrupt systems or networks</li>
              <li>Store or transmit unlawful content</li>
              <li>Circumvent security controls</li>
              <li>
                Use our services for any purpose prohibited by applicable law
              </li>
            </ul>
            <p>
              We reserve the right to suspend or terminate services where
              prohibited or abusive activity is reasonably suspected.
            </p>
          </section>

          {/* Section 15 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 uppercase tracking-tight">
              15. Security
            </h2>
            <p className="mb-3">
              We take reasonable technical and organisational measures to
              protect our systems and services.
            </p>
            <p className="mb-3">
              However, no internet-based system can be guaranteed to be
              completely secure.
            </p>
            <p>
              Clients are responsible for maintaining appropriate security
              practices for their own systems, accounts, devices, credentials,
              and data.
            </p>
          </section>

          {/* Section 16 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 uppercase tracking-tight">
              16. Service Availability
            </h2>
            <p className="mb-3">
              We aim to provide reliable and continuous services but do not
              guarantee that websites, SaaS products, APIs, servers, or other
              technology services will always be available without interruption.
            </p>
            <p>
              Maintenance, upgrades, technical failures, third-party outages,
              security incidents, and circumstances beyond our reasonable
              control may temporarily affect availability.
            </p>
          </section>

          {/* Section 17 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 uppercase tracking-tight">
              17. Warranty Disclaimer
            </h2>
            <p className="mb-3">
              Except where expressly provided in a written agreement, our
              services are provided on an &quot;as available&quot; and &quot;as
              agreed&quot; basis.
            </p>
            <p>
              We do not guarantee that a particular technology solution will
              achieve a specific business result, revenue level, customer
              acquisition target, ranking, conversion rate, or other commercial
              outcome.
            </p>
          </section>

          {/* Section 18 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 uppercase tracking-tight">
              18. Limitation of Liability
            </h2>
            <p className="mb-3">
              To the maximum extent permitted by applicable law, Skky Loom
              Digital Technology Pvt. Ltd. will not be liable for indirect,
              incidental, special, consequential, or loss-of-profit damages
              arising from the use of our website or services.
            </p>
            <p className="mb-3">
              Our aggregate liability relating to a particular service or
              project will, where legally permissible, be limited to the amount
              actually paid by the client for that specific service during the
              applicable period, unless otherwise agreed in writing.
            </p>
            <p>
              Nothing in these Terms excludes liability that cannot legally be
              excluded.
            </p>
          </section>

          {/* Section 19 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 uppercase tracking-tight">
              19. Confidentiality
            </h2>
            <p className="mb-3">
              Both parties may receive confidential business, technical,
              financial, operational, or commercial information.
            </p>
            <p>
              Each party agrees to use reasonable measures to protect
              confidential information and not disclose it to unauthorised third
              parties, except where disclosure is required by law or permitted
              by the applicable agreement.
            </p>
          </section>

          {/* Section 20 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 uppercase tracking-tight">
              20. Force Majeure
            </h2>
            <p>
              We will not be responsible for failure or delay caused by
              circumstances beyond our reasonable control, including natural
              disasters, war, terrorism, government actions, internet or
              telecommunications failures, major infrastructure outages,
              epidemics, labour disruptions, or third-party service failures.
            </p>
          </section>

          {/* Section 21 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 uppercase tracking-tight">
              21. Suspension and Termination
            </h2>
            <p className="mb-2">
              We may suspend or terminate access to services where:
            </p>
            <ul className="list-disc ml-5 sm:ml-6 space-y-1 mb-3">
              <li>The client materially breaches these Terms</li>
              <li>Payments remain unpaid</li>
              <li>The service is being used unlawfully</li>
              <li>There is a significant security risk</li>
              <li>Fraudulent or abusive activity is suspected</li>
            </ul>
            <p>
              Termination will not affect rights or obligations that accrued
              before termination.
            </p>
          </section>

          {/* Section 22 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 uppercase tracking-tight">
              22. Changes to Services and Terms
            </h2>
            <p className="mb-3">
              We may modify, update, discontinue, or introduce features to our
              services from time to time.
            </p>
            <p>
              We may also update these Terms when necessary. The updated version
              will be published on our website with a revised “Last Updated”
              date.
            </p>
          </section>

          {/* Section 23 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 uppercase tracking-tight">
              23. Governing Law
            </h2>
            <p className="mb-3">
              Unless a separate written agreement provides otherwise, these
              Terms shall be governed by the laws of India.
            </p>
            <p className="mb-3">
              Subject to applicable law, courts having jurisdiction in Noida,
              Uttar Pradesh, India shall have jurisdiction over disputes
              arising from these Terms.
            </p>
            <p>
              For international clients, the parties may agree to a separate
              dispute-resolution mechanism, arbitration clause, or jurisdiction
              in the applicable service agreement.
            </p>
          </section>

          {/* Section 24 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 uppercase tracking-tight">
              24. Severability
            </h2>
            <p>
              If any provision of these Terms is determined to be invalid or
              unenforceable, the remaining provisions will continue to remain
              effective.
            </p>
          </section>

          {/* Section 25 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 uppercase tracking-tight">
              25. Entire Agreement
            </h2>
            <p className="mb-3">
              These Terms, together with any applicable quotation, proposal,
              SOW, purchase order, subscription agreement, privacy policy, and
              other written agreement, constitute the understanding between the
              Company and the client regarding the relevant services.
            </p>
            <p>
              Where there is a conflict, the specific written agreement for the
              relevant service will prevail to the extent of that conflict.
            </p>
          </section>

          {/* Section 26 - Contact */}
          <section>
            <h2>
              26. Contact Us
            </h2>
            <div>
              <div>
                <p>
                  Skky Loom Digital Technology Pvt. Ltd.
                </p>
                <p>
                  Registered/Business Address:
                </p>
                <p>
                  A39, 2nd Floor, Sector 63, Noida, Uttar Pradesh – 201301,
                  India
                </p>
              </div>
              <div>
                <p>
                  <strong className="text-gray-300">Email:</strong>{" "}
                  <a
                    href="mailto:info@moneykingfinancial.com"
                    className="hover:underline text-blue-300 break-all"
                  >
                    info@moneykingfinancial.com
                  </a>
                </p>
                <p>
                  <strong className="text-gray-300">Website:</strong>{" "}
                  <a
                    href="https://www.skkyloomdigital.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-blue-300 break-all"
                  >
                    https://www.skkyloomdigital.com/
                  </a>
                </p>
                <p>
                  <strong className="text-gray-300">Phone:</strong>{" "}
                  <a
                    href="tel:+919311284229"
                    className="hover:underline text-blue-300"
                  >
                    +91 9311284229
                  </a>
                </p>
              </div>
              <p className="text-xs text-gray-400 pt-3 border-t border-gray-700">
                For questions regarding these Terms, please contact us using the
                details above.
              </p>
            </div>
          </section>

          {/* Copyright */}
          <div className="pt-4 border-t text-xs sm:text-sm text-gray-500 text-center font-medium">
            © {new Date().getFullYear()} Skky Loom Digital Technology Pvt. Ltd. All Rights Reserved.
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-8 sm:mt-12 pt-6 border-t text-center">
          <Link
            href="/"
            className="text-blue-600 font-semibold hover:text-blue-800 inline-flex items-center justify-center gap-2 transition-all text-sm sm:text-base"
          >
            <span>←</span> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}