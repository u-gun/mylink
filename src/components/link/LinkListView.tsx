'use client';

import React, { useState, useMemo } from 'react';
import { UserProfile, LinkItem } from '@/types/link';
import { ProfileHeader } from './ProfileHeader';
import { CategoryFilter } from './CategoryFilter';
import { LinkCard } from './LinkCard';
import { Toast } from './Toast';
import { Search, Sparkles, Share2, Layers } from 'lucide-react';

interface LinkListViewProps {
  profile: UserProfile;
  initialLinks: LinkItem[];
  onToggleViewMode?: () => void;
  viewModeLabel?: string;
}

export function LinkListView({
  profile,
  initialLinks,
  onToggleViewMode,
  viewModeLabel,
}: LinkListViewProps) {
  const [links, setLinks] = useState<LinkItem[]>(initialLinks);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2200);
  };

  const handleCopyProfileUrl = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      triggerToast('프로필 링크가 복사되었어요');
    }
  };

  const handleCopyEmail = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(profile.email);
      triggerToast('이메일 주소가 복사되었어요');
    }
  };

  const handleCopyLink = (url: string) => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(url);
      triggerToast('링크가 복사되었어요');
    }
  };

  const handleLinkClick = (linkId: string) => {
    setLinks((prev) =>
      prev.map((l) =>
        l.id === linkId ? { ...l, clickCount: (l.clickCount ?? 0) + 1 } : l
      )
    );
  };

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: links.filter((l) => l.isActive).length,
    };
    links
      .filter((l) => l.isActive)
      .forEach((l) => {
        counts[l.category] = (counts[l.category] || 0) + 1;
      });
    return counts;
  }, [links]);

  // Filtered links
  const filteredLinks = useMemo(() => {
    return links
      .filter((link) => link.isActive)
      .filter((link) => {
        if (selectedCategory === 'all') return true;
        return link.category === selectedCategory;
      })
      .filter((link) => {
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase().trim();
        return (
          link.title.toLowerCase().includes(q) ||
          (link.description && link.description.toLowerCase().includes(q))
        );
      })
      .sort((a, b) => {
        // highlight first, then order
        if (a.highlight && !b.highlight) return -1;
        if (!a.highlight && b.highlight) return 1;
        return a.order - b.order;
      });
  }, [links, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen w-full bg-[#F9FAFB] text-[#191F28] flex flex-col items-center justify-between selection:bg-[#3182F6]/20">
      {/* Background soft ambient glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden flex justify-center">
        <div className="w-[800px] h-[300px] bg-gradient-to-b from-[#3182F6]/5 via-[#3182F6]/2 to-transparent blur-3xl rounded-full" />
      </div>

      {/* Main Content Container */}
      <div className="relative w-full max-w-xl px-4 pb-20 z-10 flex flex-col items-center">
        {/* Profile Header */}
        <ProfileHeader
          profile={profile}
          onCopyUrl={handleCopyProfileUrl}
          onCopyEmail={handleCopyEmail}
          onToggleViewMode={onToggleViewMode}
          viewModeLabel={viewModeLabel}
        />

        {/* Search & Filter Section */}
        <section className="w-full mt-4 space-y-3">
          {/* TDS Search Bar */}
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B95A1]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="링크 검색 (포트폴리오, GitHub, 블로그...)"
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#F2F4F6] text-[#191F28] placeholder-[#8B95A1] text-[13px] border border-transparent focus:border-[#3182F6] focus:bg-white focus:outline-none transition-all duration-150"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#8B95A1] hover:text-[#191F28] p-1"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Filter Chips */}
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            categoryCounts={categoryCounts}
          />
        </section>

        {/* Links List Section */}
        <main className="w-full mt-4 space-y-3">
          {filteredLinks.length > 0 ? (
            filteredLinks.map((link) => (
              <LinkCard
                key={link.id}
                link={link}
                onCopyLink={handleCopyLink}
                onLinkClick={handleLinkClick}
              />
            ))
          ) : (
            <div className="w-full py-12 flex flex-col items-center justify-center text-center rounded-2xl border border-dashed border-[#E5E8EB] bg-white p-6">
              <div className="w-10 h-10 rounded-full bg-[#F2F4F6] flex items-center justify-center text-[#8B95A1] mb-2">
                <Search className="w-5 h-5" />
              </div>
              <p className="text-sm font-semibold text-[#333D4B]">
                조건에 맞는 링크가 없어요
              </p>
              <p className="text-xs text-[#8B95A1] mt-1">
                다른 검색어를 입력하거나 다른 카테고리를 선택해보세요.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-3 px-3 py-1.5 rounded-full text-xs font-medium bg-[#F2F4F6] text-[#3182F6] hover:bg-[#E8F3FF] transition-colors"
              >
                필터 초기화
              </button>
            </div>
          )}
        </main>

        {/* Bottom Floating/Fixed Share Button & Footer */}
        <footer className="w-full mt-10 pt-6 border-t border-[#E5E8EB] flex flex-col items-center text-center space-y-2">
          <div className="flex items-center gap-2 text-xs text-[#8B95A1] font-medium">
            <span>mylink</span>
            <span>·</span>
            <span>Toss Design System (TDS)</span>
            <span>·</span>
            <span>Next.js 16</span>
          </div>
          <p className="text-[11px] text-[#8B95A1]">
            © 2026 {profile.name} ({profile.nameEn}). All rights reserved.
          </p>
        </footer>
      </div>

      {/* Floating Pill Toast */}
      <Toast message={toastMessage} />
    </div>
  );
}
