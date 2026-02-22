import gpLogo from "@/assets/gp-logo.png";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-hero-gradient py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-6">
            <img src={gpLogo} alt="Gemma Partners Logo" className="w-14 h-14" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
            Privacy Policy
          </h1>
          <p className="text-primary-foreground/80 text-lg">Last Updated: February 22, 2026</p>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-16 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-10">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="space-y-10 text-foreground">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              This Privacy Policy applies to the mobile applications (collectively referred to as "the App") developed and maintained by Gemma Partners LLC ("the Developer," "we," "us," or "our"). We are committed to protecting your privacy and ensuring a secure user experience. This policy explains our practices regarding the collection, use, and disclosure of information through the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">2. Information Collection and Use</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The App does not collect, store, or transmit any Personal Data.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Personal Data:</strong> We do not collect "Personal Data," which is information that identifies you as an individual or relates to an identifiable individual (such as name, email address, phone number, or precise location).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Device Permissions:</strong> The App may request access to certain device features (e.g., Camera, Photo Library) only when strictly necessary for the App's functionality. Any data processed via these permissions remains locally on your device and is never uploaded to our servers or shared with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">3. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              The App is distributed via the Apple App Store. Apple may collect certain diagnostic, usage, and telemetry data as part of its standard operating procedures. This data collection is governed by Apple's Privacy Policy. We do not have access to individual user data provided to Apple, only aggregated, anonymized analytics provided through App Store Connect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">4. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our App does not knowingly collect any personal information from children under the age of 13 (or the applicable age in your jurisdiction). Because the App does not collect any personal data, it is inherently compliant with the Children's Online Privacy Protection Act (COPPA) and the General Data Protection Regulation (GDPR) regarding minors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">5. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              Although we do not collect your data, we take the security of your user experience seriously. We utilize standard Apple-provided frameworks to ensure that any local data processing is handled within the secure sandbox environment of the iOS operating system.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">6. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update our Privacy Policy from time to time. You are advised to review this page periodically for any changes. Any updates are effective immediately upon being published at this URL.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">7. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions or suggestions about this Privacy Policy, please do not hesitate to contact us at{" "}
              <a href="mailto:info@gemma-partners.com" className="text-primary hover:underline">
                info@gemma-partners.com
              </a>.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg opacity-80 mb-6">
            Transforming businesses through expert IT and management consulting
          </p>
          <div className="flex justify-center space-x-8 text-lg opacity-70">
            <span>© 2014-2025 Gemma Partners. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
