'use client';

import React from 'react';
import {
  Mail,
  Globe,
  FileText,
  ExternalLink,
  Copy,
  Check,
  Share2,
  Sparkles,
  ArrowUpRight,
  Search,
  MessageCircle,
} from 'lucide-react';
import { LinkItem } from '@/types/link';

interface LinkIconProps {
  name: LinkItem['icon'] | string;
  className?: string;
}

export function LinkIcon({ name, className = 'w-5 h-5' }: LinkIconProps) {
  switch (name) {
    case 'github':
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24m1.39 9.74v-8.37H5.07v8.37h2.78z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case 'mail':
      return <Mail className={className} />;
    case 'globe':
      return <Globe className={className} />;
    case 'file-text':
      return <FileText className={className} />;
    case 'velog':
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6l8 12 8-12" />
        </svg>
      );
    case 'notion':
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.047-.327L17.876 2.06c-.42-.327-1.074-.653-2.193-.56L2.918 2.666c-.373.047-.466.326-.326.513l1.867 1.029zm1.4 3.313v12.274c0 .653.373.933 1.167.886l13.355-.793c.793-.047.886-.606.886-1.166V6.587c0-.56-.28-.84-.793-.793l-13.774.84c-.56.046-.84.373-.84.887zm12.368.513c.093.42 0 .84-.42.887l-.933.14v8.587c0 .56-.28.84-.793.84-.373 0-.653-.187-.84-.513l-4.573-7.094v6.86c.42.094.653.327.653.653 0 .42-.327.56-.7.56l-2.427.14c-.093-.374 0-.747.373-.84l.84-.14V9.928c-.373-.047-.606-.233-.606-.56 0-.373.327-.513.7-.56l2.753-.14 4.573 7.047V9.695l-.7-.14c-.047-.373.187-.7.653-.746l2.053-.14z" />
        </svg>
      );
    default:
      return <Globe className={className} />;
  }
}

export {
  ExternalLink,
  Copy,
  Check,
  Share2,
  Sparkles,
  ArrowUpRight,
  Search,
  MessageCircle,
};
