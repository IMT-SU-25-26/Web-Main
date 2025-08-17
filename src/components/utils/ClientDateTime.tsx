"use client";
import { useEffect, useState } from "react";

interface ClientDateTimeProps {
  dateTime: string;
  className?: string;
}

export default function ClientDateTime({ 
  dateTime, 
  className 
}: ClientDateTimeProps) {
  const [formattedDateTime, setFormattedDateTime] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const date = new Date(dateTime);
    const dateStr = date.toLocaleDateString();
    const timeStr = date.toLocaleTimeString();
    setFormattedDateTime(`${dateStr} at ${timeStr}`);
    setIsLoading(false);
  }, [dateTime]);

  if (isLoading) {
    return (
      <span className={`${className} animate-pulse`}>
        Loading...
      </span>
    );
  }

  return (
    <span className={className}>
      {formattedDateTime}
    </span>
  );
}
