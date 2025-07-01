// components/Analytics.jsx
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    const _window = window as any;
    if (_window.gtag) {
      _window.gtag('config', 'G-YEWZDHJJM4', {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
