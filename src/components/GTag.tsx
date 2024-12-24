import React from 'react';

import { Script } from 'gatsby';

import { ReactNode } from 'react';

export const Seo = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-E29WYJVHJN"
        strategy="off-main-thread"
        forward={['gtag']}
      />
      <Script
        id="gtag-config"
        strategy="off-main-thread"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E29WYJVHJN');
          `
        }}
      />
      {children}
    </>
  );
};
