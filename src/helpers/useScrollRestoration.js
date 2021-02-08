import { useEffect, useLayoutEffect } from "react";

export const useScrollRestoration = (key) => {
  useLayoutEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem(key, window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [key]);

  useEffect(() => {
    const scroll = parseInt(sessionStorage.getItem(key));
    window.scrollTo({ top: scroll });
  });
};
