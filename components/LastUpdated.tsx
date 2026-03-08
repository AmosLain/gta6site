import { LAST_UPDATED } from "@/lib/utils";

interface LastUpdatedProps {
  className?: string;
}

export default function LastUpdated({ className = "" }: LastUpdatedProps) {
  return (
    <div className={`flex items-center justify-center gap-2 text-xs text-gray-600 ${className}`}>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
        <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2" />
        <path d="M6 3v3l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
      <span>Last updated: <time dateTime="2025-07-14">{LAST_UPDATED}</time></span>
    </div>
  );
}

