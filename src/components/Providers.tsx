"use client";

import { useState, useEffect, ReactNode } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import PageTransition from "@/components/PageTransition";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = sessionStorage.getItem("portfolio-visited");
    if (hasVisited) {
      setIsLoading(false);
      setLoaded(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem("portfolio-visited", "true");
    setLoaded(true);
  };

  return (
    <SmoothScroll>
      {isLoading && !loaded && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}
      <CustomCursor />
      <PageTransition>
        {children}
      </PageTransition>
    </SmoothScroll>
  );
}