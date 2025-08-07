"use client";
import { useEffect, useState } from "react";

interface ClientDateProps {
  createdAt: string;
  className?: string;
  format?: 'relative' | 'full';
}

export default function ClientDate({ 
  createdAt, 
  className,
  format = 'relative'
}: ClientDateProps) {
  const [dateString, setDateString] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const date = new Date(createdAt);
    
    if (format === 'relative') {
      const now = Date.now();
      const diffInMs = now - date.getTime();
      const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
      
      if (diffInDays === 0) {
        setDateString('Today');
      } else if (diffInDays === 1) {
        setDateString('1 day ago');
      } else if (diffInDays < 30) {
        setDateString(`${diffInDays} days ago`);
      } else if (diffInDays < 365) {
        const months = Math.ceil(diffInDays / 30);
        setDateString(months === 1 ? '1 month ago' : `${months} months ago`);
      } else {
        const years = Math.ceil(diffInDays / 365);
        setDateString(years === 1 ? '1 year ago' : `${years} years ago`);
      }
    } else {
      setDateString(date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }));
    }
    
    setIsLoading(false);
  }, [createdAt, format]);

  if (isLoading) {
    // Show a placeholder while calculating on client
    return (
      <span className={`${className} animate-pulse`}>
        {format === 'relative' ? 'Loading...' : 'Loading date...'}
      </span>
    );
  }

  return (
    <span className={className}>
      {dateString}
    </span>
  );
}
