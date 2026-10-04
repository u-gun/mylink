'use client';

import React, { useState } from 'react';
import { LinkItem } from '@/types/link';
import { LinkIcon, ArrowUpRight, Copy, Check } from './LinkIcons';

interface LinkCardProps {
  link: LinkItem;
  onCopyLink: (url: string) => void;
  onLinkClick?: (linkId: string) => void;
}

export function LinkCard({ link, onCopyLink, onLinkClick }: LinkCardProps) {
  const [copied, setCopied] = useState(false);
  const [localClicks, setLocalClicks] = useState(link.clickCount ?? 0);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onCopyLink(link.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClick = () => {
    setLocalClicks((prev) => prev + 1);
    if (onLinkClick) {
      onLinkClick(link.id);
    }
  };

  const isHighlighted = link.highlight;

  if (isHighlighted) {
    return (
      <div className="relative group w-full rounded-2xl bg-gradient-to-r from-[#3182F6] via-[#2272EB] to-[#1B64DA] text-white shadow-lg shadow-blue-500/25 transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 active:scale-[0.98] border border-blue-400/30 overflow-hidden select-none flex items-center justify-between p-4.5 sm:p-5">
        {/* Subtle glossy background highlight */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none -mr-16 -mt-16" />

        {/* Primary Clickable Link Area */}
        <a
          href={link.url}
          target={link.isNewTab ? '_blank' : '_self'}
          rel="noopener noreferrer"
          onClick={handleClick}
          className="flex-1 flex items-center gap-3.5 sm:gap-4 min-w-0 pr-2 z-10 cursor-pointer"
        >
          <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md text-white shadow-inner">
            <LinkIcon name={link.icon} className="w-6 h-6" />
          </div>

          <div className="min-w-0 text-left">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-[15px] sm:text-[16px] font-bold text-white tracking-tight truncate">
                {link.title}
              </h2>
              {link.badge && (
                <span className="flex-shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-white text-[#1B64DA] shadow-sm">
                  {link.badge}
                </span>
              )}
            </div>
            {link.description && (
              <p className="mt-0.5 text-xs sm:text-[13px] text-blue-100 font-normal line-clamp-1">
                {link.description}
              </p>
            )}
            {localClicks > 0 && (
              <span className="mt-1 inline-block text-[10px] text-blue-200/80 font-mono">
                클릭 {localClicks.toLocaleString()}회
              </span>
            )}
          </div>
        </a>

        {/* Right Actions: Copy button & External link arrow */}
        <div className="flex items-center gap-1.5 flex-shrink-0 z-20">
          <button
            type="button"
            onClick={handleCopy}
            title="링크 주소 복사"
            className="p-2 rounded-xl bg-white/15 hover:bg-white/25 active:scale-95 text-white transition-all duration-150 cursor-pointer"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-300 stroke-[2.5]" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
          <a
            href={link.url}
            target={link.isNewTab ? '_blank' : '_self'}
            rel="noopener noreferrer"
            onClick={handleClick}
            className="p-2 rounded-xl bg-white/20 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150 cursor-pointer"
            title="새 탭에서 열기"
          >
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative group w-full rounded-2xl bg-white text-[#191F28] shadow-xs border border-[#E5E8EB] transition-all duration-200 hover:border-[#3182F6]/50 hover:shadow-md hover:shadow-black/5 active:scale-[0.98] select-none flex items-center justify-between p-4 sm:p-4.5">
      {/* Primary Clickable Link Area */}
      <a
        href={link.url}
        target={link.isNewTab ? '_blank' : '_self'}
        rel="noopener noreferrer"
        onClick={handleClick}
        className="flex-1 flex items-center gap-3.5 sm:gap-4 min-w-0 pr-2 cursor-pointer"
      >
        <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-[#F2F4F6] text-[#333D4B] group-hover:bg-[#E8F3FF] group-hover:text-[#3182F6] transition-colors duration-150">
          <LinkIcon name={link.icon} className="w-5 h-5" />
        </div>

        <div className="min-w-0 text-left">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-[15px] font-bold text-[#191F28] tracking-tight group-hover:text-[#3182F6] transition-colors duration-150 truncate">
              {link.title}
            </h2>
            {link.badge && (
              <span className="flex-shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#E8F3FF] text-[#3182F6]">
                {link.badge}
              </span>
            )}
          </div>
          {link.description && (
            <p className="mt-0.5 text-xs sm:text-[13px] text-[#6B7684] line-clamp-1 font-normal">
              {link.description}
            </p>
          )}
          {localClicks > 0 && (
            <span className="mt-1 inline-block text-[10px] text-[#8B95A1] font-mono">
              클릭 {localClicks.toLocaleString()}회
            </span>
          )}
        </div>
      </a>

      {/* Right Actions: Copy button & Arrow */}
      <div className="flex items-center gap-1 flex-shrink-0 z-20">
        <button
          type="button"
          onClick={handleCopy}
          title="링크 주소 복사"
          className="p-2 rounded-xl text-[#8B95A1] hover:text-[#191F28] hover:bg-[#F2F4F6] active:scale-95 transition-all duration-150 cursor-pointer"
        >
          {copied ? (
            <Check className="w-4 h-4 text-[#3182F6] stroke-[2.5]" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
        <a
          href={link.url}
          target={link.isNewTab ? '_blank' : '_self'}
          rel="noopener noreferrer"
          onClick={handleClick}
          className="p-2 rounded-xl text-[#8B95A1] group-hover:text-[#3182F6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150 cursor-pointer"
          title="새 탭에서 열기"
        >
          <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
        </a>
      </div>
    </div>
  );
}
