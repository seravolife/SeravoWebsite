import { Helmet } from 'react-helmet-async';
import { COMPANY } from '@/constants';

const BASE_URL = 'https://seravolifesciences.com';

const SEO = ({
  title,
  description,
  keywords,
  ogImage,
  ogType = 'website',
  canonical,
  noindex = false,
  structuredData,
}) => {
  const fullTitle = title ? `${title} | ${COMPANY.shortName}` : `${COMPANY.name} — ${COMPANY.tagline}`;
  const metaDescription = description || COMPANY.description;
  const metaKeywords = keywords ||
    'Seravo Life Sciences, nutraceuticals India, clinical nutrition manufacturer, pharmaceutical manufacturer Pune, orthopedic nutrition, pregnancy nutraceutical, ICU recovery formula, WHO-GMP certified, FSSAI certified, healthcare products India, Seravo Ortho Plus, weight gain supplement India';
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
  const ogImageUrl = ogImage || `${BASE_URL}/og-image.png`;

  // Default Organization Structured Data
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY.name,
    url: BASE_URL,
    logo: `${BASE_URL}/favicon.svg`,
    description: COMPANY.description,
    foundingDate: COMPANY.founded,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${COMPANY.address.line2}`,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.state,
      postalCode: COMPANY.address.zip,
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY.phone,
      contactType: 'customer service',
      email: COMPANY.email,
    },
    sameAs: [
      COMPANY.socialLinks.linkedin,
      COMPANY.socialLinks.instagram,
      COMPANY.socialLinks.facebook,
      COMPANY.socialLinks.youtube,
    ],
  };

  const jsonLd = structuredData || defaultStructuredData;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={COMPANY.name} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={COMPANY.name} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default SEO;
