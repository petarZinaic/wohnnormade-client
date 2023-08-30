import { useEffect, useState } from "react";
import { Navbar, TopBar } from "./components";

export default function Navigation() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const TABLET_BREAKPOINT = "1024px";

  const handleWindowSizeCheck = (e: MediaQueryListEvent) => {
    setIsMobileOrTablet(e.matches);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${TABLET_BREAKPOINT})`);

    mediaQuery.addEventListener("change", handleWindowSizeCheck);
  }, []);

  return <>{isMobileOrTablet ? <TopBar /> : <Navbar />}</>;
}
