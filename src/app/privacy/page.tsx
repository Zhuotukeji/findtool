import { Metadata } from 'next';
import { JsonLdBreadcrumb } from '@/components/seo/JsonLd';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://toolfinder.vercel.app';

export const metadata: Metadata = {
  title: 'Privacy Policy - ToolFinder',
  description: 'Privacy Policy for ToolFinder. Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <JsonLdBreadcrumb
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Privacy Policy', url: `${siteUrl}/privacy` },
        ]}
      />
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-gray-500 mb-8">Last updated: April 4, 2026</p>

      <div className="prose prose-gray max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            AI Tool Finder (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting 
            your personal data. This privacy policy explains how we collect, use, and safeguard your information 
            when you visit our website aitoolfinder.com (the &quot;Site&quot;).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">2.1 Information You Provide</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Contact information (name, email) when you subscribe to our newsletter</li>
            <li>Feedback and correspondence when you contact us</li>
            <li>Account information if you create an account</li>
          </ul>
          <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-4">2.2 Automatically Collected Information</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent</li>
            <li>Referring website addresses</li>
            <li>IP address (anonymized)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>To provide and maintain our service</li>
            <li>To improve and personalize your experience</li>
            <li>To send newsletters and updates (with your consent)</li>
            <li>To analyze usage patterns and optimize our content</li>
            <li>To respond to your inquiries and support requests</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Cookies</h2>
          <p className="text-gray-700 leading-relaxed">
            We use cookies and similar tracking technologies to enhance your browsing experience. 
            You can control cookie preferences through your browser settings. Essential cookies are 
            required for the Site to function properly. Analytics cookies help us understand how 
            visitors interact with our Site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Third-Party Services</h2>
          <p className="text-gray-700 leading-relaxed">
            We may use third-party services such as Google Analytics to analyze Site usage. 
            These services may collect information about your use of the Site. We also display 
            links to third-party AI tools; when you visit those sites, their respective privacy 
            policies apply.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Data Security</h2>
          <p className="text-gray-700 leading-relaxed">
            We implement appropriate technical and organizational measures to protect your personal 
            data against unauthorized access, alteration, disclosure, or destruction. However, no 
            method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Your Rights</h2>
          <p className="text-gray-700 leading-relaxed mb-2">You have the right to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt out of marketing communications</li>
            <li>Lodge a complaint with a supervisory authority</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">8. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:privacy@aitoolfinder.com" className="text-blue-600 hover:underline">
              privacy@aitoolfinder.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
