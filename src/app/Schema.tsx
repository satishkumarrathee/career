import React from 'react';
import Head from 'next/head';

const Schema: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Find career and admission online",
    "description": "Certainly! Below is a description for a website offering career and admission guidance online.",
    "url": "https://www.careerdefiner.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.careerdefiner.com/s?k={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "hasPart": [
      {
        "@type": "ItemList",
        "name": "Career Definer About",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "url": "https://careerdefiner.com/about"
          }
        ]
      },
      {
        "@type": "ItemList",
        "name": "Career Definer Admission",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "url": "https://careerdefiner.com/admission"
          }
        ]
      },
      {
        "@type": "ItemList",
        "name": "Career Definer Coaching",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "url": "https://careerdefiner.com/coaching"
          }
        ]
      },
      {
        "@type": "ItemList",
        "name": "Career Definer Exam",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "url": "https://careerdefiner.com/exam"
          }
        ]
      },
      {
        "@type": "ItemList",
        "name": "Career Definer Career",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "url": "https://careerdefiner.com/career"
          }
        ]
      }
    ]
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData).replace(/</g, '\\u003c') }}
      />
    </Head>
  );
};

export default Schema;
