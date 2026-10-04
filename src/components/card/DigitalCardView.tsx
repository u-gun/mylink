'use client';

import { useState, useSyncExternalStore } from 'react';
import { PROFILE_CONFIG } from '@/app/page';

interface DigitalCardViewProps {
  onToggleViewMode?: () => void;
}

const subscribeOrientation = (callback: () => void) => {
  if (typeof window === 'undefined') return () => {};
  const mql = window.matchMedia('(orientation: landscape) and (max-height: 550px)');
  mql.addEventListener('change', callback);
  return () => mql.removeEventListener('change', callback);
};

const getOrientationSnapshot = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(orientation: landscape) and (max-height: 550px)').matches;
};

const getOrientationServerSnapshot = () => false;

export function DigitalCardView({ onToggleViewMode }: DigitalCardViewProps) {
  const isLandscape = useSyncExternalStore(
    subscribeOrientation,
    getOrientationSnapshot,
    getOrientationServerSnapshot
  );

  const [manualFlipped, setManualFlipped] = useState<boolean | null>(null);
  const [prevLandscape, setPrevLandscape] = useState(isLandscape);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  if (isLandscape !== prevLandscape) {
    setPrevLandscape(isLandscape);
    setManualFlipped(null);
  }

  const isFlipped = manualFlipped !== null ? manualFlipped : isLandscape;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2200);
  };

  const handleCopyLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      showToast('명함 URL이 클립보드에 복사되었습니다');
    }
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(PROFILE_CONFIG.email);
      showToast('이메일 주소가 복사되었습니다');
    }
  };

  const toggleFlip = () => {
    setManualFlipped(!isFlipped);
  };

  return (
    <main className="relative min-h-screen h-[100dvh] w-full overflow-hidden bg-[#050505] text-zinc-100 flex items-center justify-center p-3 sm:p-4 select-none cyber-grid">
      {/* Top switch button to return to link list */}
      {onToggleViewMode && (
        <div className="absolute top-4 left-4 z-50">
          <button
            type="button"
            onClick={onToggleViewMode}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-zinc-900/90 text-zinc-200 border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800 transition-all duration-150 active:scale-95 shadow-lg backdrop-blur-md"
          >
            <span>←</span>
            <span>링크트리 목록으로 보기</span>
          </button>
        </div>
      )}

      {/* Ambient background light */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.06)_0%,transparent_75%)]" />

      {/* 3D Card Perspective Wrapper */}
      <div
        className={`relative w-full transition-all duration-700 ease-out perspective-1200 ${
          isFlipped
            ? 'max-w-[580px] sm:max-w-[630px] aspect-[1.78/1] sm:aspect-[1.82/1] max-h-[90dvh]'
            : 'max-w-[370px] sm:max-w-[395px] aspect-[1/1.55] max-h-[96dvh]'
        }`}
      >
        {/* Flippable 3D Body */}
        <div
          className={`relative h-full w-full preserve-3d duration-700 transition-transform cursor-pointer ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          onClick={toggleFlip}
          title="클릭하여 명함을 뒤집을 수 있습니다"
        >
          {/* [앞면 / FRONT FACE] */}
          <div className="absolute inset-0 h-full w-full backface-hidden rounded-2xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/95 via-zinc-950 to-black p-4 sm:p-5 shadow-[0_0_50px_-10px_rgba(255,255,255,0.08)] backdrop-blur-2xl flex flex-col justify-between">
            {/* Top Specular Line */}
            <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-zinc-400/50 to-transparent pointer-events-none" />

            {/* Header: Chip, NFC & Status */}
            <div className="flex items-center justify-between pb-2 border-b border-zinc-800/80">
              <div className="flex items-center gap-2">
                <div className="relative flex h-6 w-8 items-center justify-center rounded border border-zinc-600 bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900 p-0.5 shadow-inner">
                  <div className="h-full w-full rounded-[2px] border border-zinc-500/50 flex items-center justify-center">
                    <div className="h-2.5 w-3 border-y border-zinc-400/60 flex items-center justify-center">
                      <div className="h-1 w-1.5 bg-zinc-400/40 rounded-[1px]" />
                    </div>
                  </div>
                </div>
                <svg
                  className="h-3.5 w-3.5 text-zinc-400 opacity-80"
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

              <div className="flex items-center gap-1.5 rounded-full border border-zinc-700/70 bg-zinc-900/80 px-2.5 py-0.5 text-[9px] font-mono tracking-wider text-zinc-300">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                <span>ACTIVE // PORTRAIT</span>
              </div>
            </div>

            {/* Identity Section */}
            <div className="py-2 flex flex-col items-center text-center">
              <div className="relative mb-2 flex h-14 w-14 sm:h-15 sm:w-15 items-center justify-center rounded-xl border border-zinc-600 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-950 font-mono text-xl font-bold tracking-wider text-white shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
                <span>UJ</span>
                <div className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-[8px] text-zinc-400 font-mono">
                  ★
                </div>
              </div>

              <h1 className="text-2xl sm:text-[26px] font-extrabold tracking-tight text-white">
                {PROFILE_CONFIG.name}
              </h1>
              <p className="mt-0.5 font-mono text-[10px] sm:text-[11px] tracking-[0.25em] text-zinc-400 uppercase">
                {PROFILE_CONFIG.nameEn}
              </p>

              <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-md border border-zinc-700 bg-zinc-900/90 px-2.5 py-0.5 text-[10px] font-mono font-medium tracking-wide text-zinc-200">
                <span className="text-zinc-400">&gt;</span> {PROFILE_CONFIG.role}
              </div>

              <p className="mt-1.5 text-xs sm:text-[13px] text-zinc-300 font-medium">
                {PROFILE_CONFIG.affiliation}
              </p>
              <p className="mt-1 text-[11px] sm:text-xs text-zinc-400 whitespace-nowrap tracking-tight px-2">
                {PROFILE_CONFIG.bio}
              </p>
            </div>

            {/* Tech Stack Matrix */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-2.5 my-1">
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                <span>CORE TECH STACK</span>
                <span className="text-zinc-500">SPEC MATRIX</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {PROFILE_CONFIG.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-zinc-700/70 bg-zinc-950 px-2.5 py-0.5 text-[11px] font-mono font-medium text-zinc-200 shadow-sm flex items-center gap-1"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                    #{tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-1.5 pt-1">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={PROFILE_CONFIG.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="group flex items-center justify-center gap-1.5 rounded-xl border border-zinc-700 bg-gradient-to-b from-zinc-800 to-zinc-900 px-3 py-1.5 text-xs font-semibold text-white transition-all hover:border-zinc-500 hover:bg-zinc-800 active:scale-[0.98]"
                >
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>GitHub</span>
                  <span className="text-[10px] text-zinc-400 group-hover:translate-x-0.5 transition-transform">
                    ↗
                  </span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-zinc-700 bg-gradient-to-b from-zinc-800 to-zinc-900 px-3 py-1.5 text-xs font-semibold text-zinc-200 transition-all hover:border-zinc-500 hover:bg-zinc-800 active:scale-[0.98]"
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
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950/70 py-1.5 px-3 text-[11px] font-mono text-zinc-300 transition-colors hover:border-zinc-600 hover:text-white active:scale-[0.99]"
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

            {/* Footer */}
            <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between">
              <div className="flex flex-col text-left text-[9px] font-mono text-zinc-500">
                <span className="text-zinc-400 font-semibold">UID // CW-CSE-2026</span>
                <span>CYBER DIGITAL CARD</span>
              </div>

              <div className="flex items-center gap-[2px] h-4 opacity-70">
                <div className="w-[3px] h-full bg-zinc-300" />
                <div className="w-[1px] h-full bg-zinc-300" />
                <div className="w-[2px] h-full bg-zinc-400" />
                <div className="w-[4px] h-full bg-zinc-300" />
                <div className="w-[1px] h-full bg-zinc-500" />
                <div className="w-[3px] h-full bg-zinc-300" />
                <div className="w-[2px] h-full bg-zinc-400" />
                <div className="w-[3px] h-full bg-zinc-300" />
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFlip();
                }}
                className="flex items-center gap-1 text-[10px] font-mono text-zinc-300 hover:text-white bg-zinc-800/80 border border-zinc-700 px-2 py-1 rounded-lg transition-colors"
              >
                <span>⟲</span>
                <span>가로 명함 보기</span>
              </button>
            </div>
          </div>

          {/* [뒷면 / BACK FACE] */}
          <div className="absolute inset-0 h-full w-full backface-hidden rotate-y-180 rounded-2xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/95 via-zinc-950 to-black p-4 sm:p-5 shadow-[0_0_50px_-10px_rgba(255,255,255,0.08)] backdrop-blur-2xl flex flex-row items-center justify-between">
            <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-zinc-400/50 to-transparent pointer-events-none" />

            <div className="w-[45%] h-full flex flex-col justify-between border-r border-zinc-800/80 pr-4">
              <div className="flex items-center justify-between pb-1.5 border-b border-zinc-800/60">
                <div className="flex items-center gap-1.5">
                  <div className="relative flex h-5 w-7 items-center justify-center rounded border border-zinc-600 bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900 p-0.5 shadow-inner">
                    <div className="h-full w-full rounded-[2px] border border-zinc-500/50 flex items-center justify-center">
                      <div className="h-2 w-2.5 border-y border-zinc-400/60 flex items-center justify-center">
                        <div className="h-0.5 w-1 bg-zinc-400/40" />
                      </div>
                    </div>
                  </div>
                  <svg
                    className="h-3 w-3 text-zinc-400 opacity-80"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 8a6 6 0 0 1 0 8" />
                    <path d="M10 6a10 10 0 0 1 0 12" />
                    <path d="M14 4a14 14 0 0 1 0 16" />
                  </svg>
                </div>

                <div className="flex items-center gap-1 rounded-full border border-zinc-700/70 bg-zinc-900/80 px-2 py-0.5 text-[8px] font-mono tracking-wider text-zinc-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
                  <span>ACTIVE // LANDSCAPE</span>
                </div>
              </div>

              <div className="flex items-center gap-3 my-1">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-zinc-600 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-950 font-mono text-lg font-bold tracking-wider text-white shadow-lg">
                  <span>UJ</span>
                  <div className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-[7px] text-zinc-400 font-mono">
                    ★
                  </div>
                </div>

                <div className="text-left">
                  <h1 className="text-xl font-extrabold tracking-tight text-white leading-none">
                    {PROFILE_CONFIG.name}
                  </h1>
                  <p className="font-mono text-[9px] tracking-[0.2em] text-zinc-400 uppercase mt-0.5">
                    {PROFILE_CONFIG.nameEn}
                  </p>
                  <div className="inline-flex items-center gap-1 rounded border border-zinc-700 bg-zinc-900/90 px-1.5 py-0.5 text-[9px] font-mono font-medium text-zinc-200 mt-1">
                    <span>&gt;</span> {PROFILE_CONFIG.role}
                  </div>
                </div>
              </div>

              <div className="text-left space-y-0.5">
                <p className="text-[11px] text-zinc-300 font-medium">
                  {PROFILE_CONFIG.affiliation}
                </p>
                <p className="text-[10px] text-zinc-400 whitespace-nowrap tracking-tight">
                  {PROFILE_CONFIG.bio}
                </p>
              </div>

              <div className="text-[9px] font-mono text-zinc-500 pt-1 border-t border-zinc-800/60">
                UID // CW-CSE-2026
              </div>
            </div>

            <div className="w-[55%] h-full flex flex-col justify-between pl-4">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-2 text-left">
                <div className="flex items-center justify-between text-[9px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
                  <span>CORE TECH STACK</span>
                  <span className="text-zinc-500">SPEC MATRIX</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {PROFILE_CONFIG.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-zinc-700/70 bg-zinc-950 px-2 py-0.5 text-[10px] font-mono font-semibold text-white shadow-sm flex items-center gap-1"
                    >
                      <span className="h-1 w-1 rounded-full bg-white/70" />
                      #{tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5 my-1">
                <div className="grid grid-cols-2 gap-1.5">
                  <a
                    href={PROFILE_CONFIG.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="group flex items-center justify-center gap-1 rounded-lg border border-zinc-700 bg-gradient-to-b from-zinc-800 to-zinc-900 px-2 py-1 text-[11px] font-semibold text-white transition-all hover:border-zinc-500 hover:bg-zinc-800 active:scale-[0.98]"
                  >
                    <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>GitHub</span>
                    <span className="text-[9px] text-zinc-400 group-hover:translate-x-0.5 transition-transform">
                      ↗
                    </span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="flex items-center justify-center gap-1 rounded-lg border border-zinc-700 bg-gradient-to-b from-zinc-800 to-zinc-900 px-2 py-1 text-[11px] font-semibold text-zinc-200 transition-all hover:border-zinc-500 hover:bg-zinc-800 active:scale-[0.98]"
                  >
                    <svg
                      className="h-3 w-3 text-zinc-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                    <span>명함 복사</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="w-full flex items-center justify-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-950/70 py-1 px-2.5 text-[10px] font-mono text-zinc-300 transition-colors hover:border-zinc-600 hover:text-white active:scale-[0.99]"
                >
                  <svg
                    className="h-3 w-3 text-zinc-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span className="truncate">{PROFILE_CONFIG.email}</span>
                </button>
              </div>

              <div className="pt-1.5 border-t border-zinc-800/80 flex items-center justify-between">
                <div className="flex items-center gap-[2px] h-3.5 opacity-70">
                  <div className="w-[3px] h-full bg-zinc-300" />
                  <div className="w-[1px] h-full bg-zinc-300" />
                  <div className="w-[2px] h-full bg-zinc-400" />
                  <div className="w-[4px] h-full bg-zinc-300" />
                  <div className="w-[1px] h-full bg-zinc-500" />
                  <div className="w-[3px] h-full bg-zinc-300" />
                  <div className="w-[2px] h-full bg-zinc-400" />
                  <div className="w-[3px] h-full bg-zinc-300" />
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFlip();
                  }}
                  className="flex items-center gap-1 text-[10px] font-mono text-zinc-300 hover:text-white bg-zinc-800/80 border border-zinc-700 px-2 py-1 rounded-lg transition-colors"
                >
                  <span>⟲</span>
                  <span>세로 명함 보기</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {toastMessage && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/95 px-4 py-2 text-xs font-mono text-white shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-200">
          <span className="text-emerald-400">✓</span>
          <span>{toastMessage}</span>
        </div>
      )}
    </main>
  );
}
