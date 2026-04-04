import { Metadata } from 'next';
import { JsonLdBreadcrumb } from '@/components/seo/JsonLd';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://toolfinder.vercel.app';

export const metadata: Metadata = {
  title: 'Terms of Service - ToolFinder',
  description: 'Terms of Service for ToolFinder. Please read these terms carefully before using our website.',
  alternates: {
    canonical: `${siteUrl}/terms`,
  },
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <JsonLdBreadcrumb
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Terms of Service', url: `${siteUrl}/terms` },
        ]}
      />
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
      <p className="text-gray-500 mb-8">Last updated: April 4, 2026</p>

      <div className="prose prose-gray max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing and using AI Tool Finder (&quot;the Site&quot;), you accept and agree to be bound 
            by these Terms of Service. If you do not agree to these terms, please do not use the Site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Description of Service</h2>
          <p className="text-gray-700 leading-relaxed">
            AI Tool Finder is a directory and comparison platform for artificial intelligence tools 
            and services. We provide information, reviews, ratings, and comparison features to help 
            users discover and evaluate AI tools. We do not develop or operate the AI tools listed 
            on our platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">3. User Conduct</h2>
          <p className="text-gray-700 leading-relaxed mb-2">You agree not to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Use the Site for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to any part of the Site</li>
            <li>Scrape or collect data from the Site without permission</li>
            <li>Submit false or misleading information</li>
            <li>Interfere with the proper functioning of the Site</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed">
            All content on the Site, including text, graphics, logos, and software, is the property 
            of AI Tool Finder or its content suppliers and is protected by intellectual property laws. 
            You may not reproduce, distribute, or create derivative works without our express written consent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Third-Party Links</h2>
          <p className="text-gray-700 leading-relaxed">
            The Site contains links to third-party websites and AI tools. We are not responsible for 
            the content, privacy policies, or practices of these third-party sites. Visiting these 
            links is at your own risk, and we encourage you to review their terms and policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Disclaimer of Warranties</h2>
          <p className="text-gray-700 leading-relaxed">
            The Site and its content are provided &quot;as is&quot; and &quot;as available&quot; without warranties of 
            any kind. We do not guarantee the accuracy, completeness, or reliability of any information, 
            reviews, or ratings on the Site. AI tool features, pricing, and availability may change 
            without notice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed">
            To the fullest extent permitted by law, AI Tool Finder shall not be liable for any indirect, 
            incidental, special, or consequential damages arising from your use of the Site or reliance 
            on any information provided.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">8. Affiliate Disclosure</h2>
          <p className="text-gray-700 leading-relaxed">
            Some links on the Site may be affiliate links. This means we may earn a commission if you 
            click on a link and make a purchase. This does not affect our editorial independence or 
            the accuracy of our reviews and ratings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">9. Changes to Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to modify these Terms of Service at any time. Changes will be effective 
            immediately upon posting to the Site. Your continued use of the Site after changes constitutes 
            acceptance of the modified terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">10. Contact</h2>
          <p className="text-gray-700 leading-relaxed">
            For questions about these Terms of Service, please contact us at{' '}
            <a href="mailto:legal@aitoolfinder.com" className="text-blue-600 hover:underline">
              legal@aitoolfinder.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
