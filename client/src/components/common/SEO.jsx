import { Helmet } from 'react-helmet-async';
import { COMPANY } from '@/constants';

const SEO = ({
  title,
  description,
  keywords,
  ogImage,
  ogType = 'website',
  canonical,
  noindex = false,
}) => {
  const fullTitle = title ? `${title} | ${COMPANY.shortName}` : `${COMPANY.name} — ${COMPANY.tagline}`;
  const metaDescription = description || COMPANY.description;
  const metaKeywords = keywords || 'Seravo, Life Sciences, Nutraceuticals, Clinical Nutrition, Pharmaceutical, Healthcare';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={ogType} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
};

export default SEO;
