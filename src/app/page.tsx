'use client';

import { useState } from 'react';

// ============================================================================
// [프로필 & 기술 스택 설정] 여기서 손쉽게 내용을 수정하실 수 있습니다.
// ============================================================================
export const PROFILE_CONFIG = {
  name: '정유건',
  nameEn: 'Ugeon-Jung',
  role: 'SOFTWARE ENGINEER',
  affiliation: '청운대학교 컴퓨터공학과',
  // 한 줄 자기소개 (줄바꿈 없이 한 화면에 깔끔하게 표시)
  bio: '아이디어를 코드로 실현하는 소프트웨어 엔지니어',
  // 연락처 이메일
  email: 'ugeon0361@gmail.com',
  githubUrl: 'https://github.com/u-gun',
  // 기술 스택 목록: 여기에 기술명을 추가하거나 수정하시면 명함에 즉시 반영됩니다.
  techStack: ['Next.js 16', 'TypeScript', 'React 19', 'Tailwind v4'],
};

export default function Home() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2200);
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      showToast('명함 URL이 클립보드에 복사되었습니다');
    }
  };

  const handleCopyEmail = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(PROFILE_CONFIG.email);
      showToast('이메일 주소가 복사되었습니다');
    }
  };

  return (
    <main className="relative h-[100dvh] w-full overflow-hidden bg-[#050505] text-zinc-100 flex items-center justify-center p-3 sm:p-4 select-none cyber-grid">
      {/* Ambient background light */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.06)_0%,transparent_75%)]" />

      {/* Cyber Business Card Container */}
      <div className="relative w-full max-w-[390px] sm:max-w-[420px] max-h-[96dvh] flex flex-col justify-between rounded-2xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/95 via-zinc-950 to-black p-4 sm:p-5 shadow-[0_0_50px_-10px_rgba(255,255,255,0.08)] backdrop-blur-2xl transition-all duration-300">
        
        {/* Top Edge Specular Highlight */}
        <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-zinc-400/50 to-transparent" />

        {/* 1. Card Header: Chip, NFC & Status */}
        <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
          <div className="flex items-center gap-2">
            {/* Microchip Graphic */}
            <div className="relative flex h-7 w-9 items-center justify-center rounded border border-zinc-600 bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900 p-0.5 shadow-inner">
              <div className="h-full w-full rounded-[2px] border border-zinc-500/50 flex items-center justify-center">
                <div className="h-3 w-4 border-y border-zinc-400/60 flex items-center justify-center">
                  <div className="h-1.5 w-2 bg-zinc-400/40 rounded-[1px]" />
                </div>
              </div>
            </div>
            {/* Contactless / NFC Wave Icon */}
            <svg
              className="h-4 w-4 text-zinc-400 opacity-80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 8a6 6 0 0 1 0 8" />
              <path d="M10 6a10 10 0 0 1 0 12" />
              <path d="M14 4a14 14 0 0 1 0 16" />
            </svg>
          </div>

          {/* Cyber Status Indicator */}
          <div className="flex items-center gap-1.5 rounded-full border border-zinc-700/70 bg-zinc-900/80 px-2.5 py-1 text-[10px] font-mono tracking-wider text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            <span>ACTIVE // ID-2026</span>
          </div>
        </div>

        {/* 2. Main Identity Section */}
        <div className="py-3 flex flex-col items-center text-center">
          {/* Avatar Monogram */}
          <div className="relative mb-2.5 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl border border-zinc-600 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-950 font-mono text-xl sm:text-2xl font-bold tracking-wider text-white shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
            <span>UJ</span>
            <div className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-[8px] text-zinc-400 font-mono">
              ★
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            {PROFILE_CONFIG.name}
          </h1>
          <p className="mt-0.5 font-mono text-[11px] sm:text-xs tracking-[0.25em] text-zinc-400 uppercase">
            {PROFILE_CONFIG.nameEn}
          </p>

          <div className="mt-2 inline-flex items-center gap-1.5 rounded-md border border-zinc-700 bg-zinc-900/90 px-2.5 py-0.5 text-[11px] font-mono font-medium tracking-wide text-zinc-200">
            <span className="text-zinc-400">&gt;</span> {PROFILE_CONFIG.role}
          </div>

          <p className="mt-2 text-xs sm:text-[13px] text-zinc-300 font-medium">
            {PROFILE_CONFIG.affiliation}
          </p>
          {/* 한 줄 자기소개 (줄바꿈 없이 한 줄로 깔끔하게 노출) */}
          <p className="mt-1 text-[11px] sm:text-xs text-zinc-400 whitespace-nowrap tracking-tight px-2">
            {PROFILE_CONFIG.bio}
          </p>
        </div>

        {/* 3. Tech Matrix & Meta Specs */}
        <div className="space-y-1.5 py-1">
          {/* Tech Stack Pills */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-2.5">
            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
              <span>CORE TECH STACK</span>
              <span>DEV MATRIX</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {PROFILE_CONFIG.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-zinc-700/60 bg-zinc-950/80 px-2 py-0.5 text-[10px] sm:text-[11px] font-mono text-zinc-300 shadow-sm"
                >
                  #{tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Cyber Actions */}
        <div className="grid grid-cols-2 gap-2 pt-2 pb-1">
          {/* GitHub Direct Link */}
          <a
            href={PROFILE_CONFIG.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-gradient-to-b from-zinc-800 to-zinc-900 px-3 py-2 text-xs font-semibold text-white transition-all hover:border-zinc-500 hover:bg-zinc-800 active:scale-[0.98]"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>GitHub</span>
            <span className="text-[10px] text-zinc-400 group-hover:translate-x-0.5 transition-transform">
              ↗
            </span>
          </a>

          {/* Copy Card Link */}
          <button
            type="button"
            onClick={handleCopyLink}
            className="flex items-center justify-center gap-1.5 rounded-xl border border-zinc-700 bg-gradient-to-b from-zinc-800 to-zinc-900 px-3 py-2 text-xs font-semibold text-zinc-200 transition-all hover:border-zinc-500 hover:bg-zinc-800 active:scale-[0.98]"
          >
            <svg
              className="h-3.5 w-3.5 text-zinc-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
            <span>명함 복사</span>
          </button>

          {/* Email Copy/Send Full Width */}
          <button
            type="button"
            onClick={handleCopyEmail}
            className="col-span-2 flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950/70 py-1.5 px-3 text-[11px] font-mono text-zinc-300 transition-colors hover:border-zinc-600 hover:text-white active:scale-[0.99]"
          >
            <svg
              className="h-3.5 w-3.5 text-zinc-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span className="truncate">{PROFILE_CONFIG.email}</span>
          </button>
        </div>

        {/* 5. Card Footer: Cyber Barcode & Hash */}
        <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-zinc-500">
          <div className="flex flex-col text-left">
            <span className="tracking-wider text-zinc-400 font-semibold">UID // CW-CSE-2026</span>
            <span>VERIFIED DIGITAL CARD</span>
          </div>

          {/* Futuristic Barcode Graphic */}
          <div className="flex items-center gap-[2px] h-5 opacity-70">
            <div className="w-[3px] h-full bg-zinc-300" />
            <div className="w-[1px] h-full bg-zinc-300" />
            <div className="w-[2px] h-full bg-zinc-400" />
            <div className="w-[4px] h-full bg-zinc-300" />
            <div className="w-[1px] h-full bg-zinc-500" />
            <div className="w-[3px] h-full bg-zinc-300" />
            <div className="w-[2px] h-full bg-zinc-400" />
            <div className="w-[1px] h-full bg-zinc-300" />
            <div className="w-[3px] h-full bg-zinc-300" />
            <div className="w-[2px] h-full bg-zinc-500" />
            <div className="w-[4px] h-full bg-zinc-300" />
            <div className="w-[1px] h-full bg-zinc-400" />
          </div>
        </div>
      </div>

      {/* Floating Interactive Toast */}
      {toastMessage && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/95 px-4 py-2 text-xs font-mono text-white shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-200">
          <span className="text-emerald-400">✓</span>
          <span>{toastMessage}</span>
        </div>
      )}
    </main>
  );
}
