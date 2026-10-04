'use client';

import React from 'react';
import { UserProfile } from '@/types/link';
import { Mail, Share2, Sparkles, Building2, Copy } from 'lucide-react';

interface ProfileHeaderProps {
  profile: UserProfile;
  onCopyUrl: () => void;
  onCopyEmail: () => void;
  onToggleViewMode?: () => void;
  viewModeLabel?: string;
}

export function ProfileHeader({
  profile,
  onCopyUrl,
  onCopyEmail,
  onToggleViewMode,
  viewModeLabel,
}: ProfileHeaderProps) {
  return (
    <header className="w-full flex flex-col items-center text-center pt-8 pb-4 px-4">
      {/* Top action row */}
      <div className="w-full flex items-center justify-between max-w-xl mb-4">
        {onToggleViewMode && (
          <button
            type="button"
            onClick={onToggleViewMode}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#F2F4F6] text-[#4E5968] hover:bg-[#E5E8EB] transition-all duration-150 active:scale-95"
            title="디지털 명함 모드로 전환"
          >
            <span>💳</span>
            <span>{viewModeLabel || '명함 모드로 보기'}</span>
          </button>
        )}
        <div className="ml-auto flex items-center gap-1.5">
          <button
            type="button"
            onClick={onCopyUrl}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#F2F4F6] text-[#191F28] hover:bg-[#E5E8EB] transition-all duration-150 active:scale-95"
            title="프로필 링크 복사"
          >
            <Share2 className="w-3.5 h-3.5 text-[#4E5968]" />
            <span>공유하기</span>
          </button>
        </div>
      </div>

      {/* Avatar */}
      <div className="relative mb-4">
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#3182F6] via-[#4593FC] to-[#78B4FD] p-1 shadow-lg shadow-blue-500/15 flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-bold text-2xl text-[#3182F6] tracking-tight">
            <span>UJ</span>
          </div>
        </div>
        <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#3182F6] text-[10px] text-white shadow-sm font-semibold">
          ★
        </div>
      </div>

      {/* Name & Role */}
      <div className="space-y-1">
        <div className="flex items-center justify-center gap-2">
          <h1 className="text-2xl font-extrabold text-[#191F28] tracking-tight">
            {profile.name}
          </h1>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-[#E8F3FF] text-[#3182F6]">
            {profile.role}
          </span>
        </div>
        <p className="text-xs font-mono text-[#8B95A1] tracking-wider uppercase">
          @{profile.username} · {profile.nameEn}
        </p>
      </div>

      {/* Affiliation */}
      <div className="mt-2 flex items-center gap-1.5 text-xs text-[#4E5968] font-medium">
        <Building2 className="w-3.5 h-3.5 text-[#8B95A1]" />
        <span>{profile.affiliation}</span>
      </div>

      {/* Bio */}
      <p className="mt-3 text-[14px] text-[#333D4B] max-w-md leading-relaxed font-normal">
        {profile.bio}
      </p>

      {/* Status Message Bubble */}
      {profile.statusMessage && (
        <div className="mt-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F2F4F6] text-xs font-medium text-[#333D4B] border border-[#E5E8EB]">
          <Sparkles className="w-3.5 h-3.5 text-[#3182F6]" />
          <span>{profile.statusMessage}</span>
        </div>
      )}

      {/* Tech Stack Chips */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5 max-w-md">
        {profile.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded-md bg-[#F2F4F6] text-[#4E5968] text-[11px] font-medium border border-transparent hover:border-[#E5E8EB] transition-colors"
          >
            #{tech}
          </span>
        ))}
      </div>

      {/* Quick Action Contact Row */}
      <div className="mt-4 flex items-center gap-2">
        <button
          type="button"
          onClick={onCopyEmail}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white text-[#4E5968] border border-[#E5E8EB] hover:bg-[#F9FAFB] hover:text-[#191F28] transition-all duration-150 active:scale-95 shadow-sm"
        >
          <Mail className="w-3.5 h-3.5 text-[#8B95A1]" />
          <span>{profile.email}</span>
          <Copy className="w-3 h-3 text-[#8B95A1] ml-0.5" />
        </button>
      </div>
    </header>
  );
}
