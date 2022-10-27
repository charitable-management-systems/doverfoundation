import React, { useEffect, useState } from 'react';

export type Breakpoint = 'small' | 'medium' | 'large';

const Context = React.createContext<Breakpoint>('large');

export default ({ children }: React.ProviderProps<Breakpoint>) => {
  const isBrowser = typeof window !== "undefined";
  const determineBreakpoint = () => {
    if (!isBrowser) return 'large';

    if (window.innerWidth > 900) {
      return 'large';
    }
    if (window.innerWidth > 600) {
      return 'medium';
    }

    return 'small';
  };
  const [breakpoint, setBreakpoint] =
    useState<Breakpoint>(determineBreakpoint());

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => setBreakpoint(determineBreakpoint());
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
    return () => {};
  });

  return (
    <Context.Provider value={breakpoint}>
      {children}
    </Context.Provider>
  );
};

export const useBreakpointContext = () => React.useContext(Context);