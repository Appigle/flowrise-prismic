'use client';

import Script from 'next/script';

declare global {
  interface Window {
    embeddedservice_bootstrap: {
      settings: {
        language: string;
      };
      init: (
        orgId: string,
        embeddedServiceName: string,
        baseUrl: string,
        options?: {
          scrt2URL?: string;
        }
      ) => void;
    };
  }
}

export default function EmbeddedMessaging() {
  const initEmbeddedMessaging = () => {
    try {
      if (typeof window !== 'undefined' && window.embeddedservice_bootstrap) {
        window.embeddedservice_bootstrap.settings.language = 'en_US'; // For example, enter 'en' or 'en-US'

        window.embeddedservice_bootstrap.init(
          '00DAq000007r0c9',
          'Test_Prismic_Chat',
          'https://medcan--uat.sandbox.my.site.com/ESWTestPrismicChat1770662160599',
          {
            scrt2URL: 'https://medcan--uat.sandbox.my.salesforce-scrt.com'
          }
        );
      }
    } catch (err) {
      console.error('Error loading Embedded Messaging: ', err);
    }
  };

  return (
    <Script
      src="https://medcan--uat.sandbox.my.site.com/ESWTestPrismicChat1770662160599/assets/js/bootstrap.min.js"
      strategy="lazyOnload"
      onLoad={initEmbeddedMessaging}
    />
  );
}

