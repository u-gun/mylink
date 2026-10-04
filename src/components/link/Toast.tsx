'use client';

import React from 'react';
import { Check } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export function Toast({ message }: ToastProps) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none animate-in fade-in slide-in-from-bottom-3 duration-200">
      <div className="flex items-center gap-2.5 rounded-full bg-[#191F28]/95 px-5 py-3 text-sm font-medium text-white shadow-2xl backdrop-blur-md border border-white/10 tracking-tight">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#3182F6] text-white">
          <Check className="h-3.5 w-3.5 stroke-[3]" />
        </span>
        <span>{message}</span>
      </div>
    </div>
  );
}
