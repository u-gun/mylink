'use client';

import { useState } from 'react';
import { MOCK_PROFILE, MOCK_LINKS } from '@/data/mockLinks';
import { LinkListView } from '@/components/link/LinkListView';
import { DigitalCardView } from '@/components/card/DigitalCardView';

// ============================================================================
// [프로필 & 기술 스택 설정] 기존 디지털 카드 및 메인 호환성 유지용 설정
// ============================================================================
export const PROFILE_CONFIG = {
  name: '정유건',
  nameEn: 'Ugeon-Jung',
  role: 'SOFTWARE ENGINEER',
  affiliation: '청운대학교 컴퓨터공학과',
  bio: '아이디어를 코드로 실현하는 소프트웨어 엔지니어',
  email: 'ugeon0361@gmail.com',
  githubUrl: 'https://github.com/u-gun',
  techStack: ['Java', 'C++', 'SQL'],
};

export default function Home() {
  const [viewMode, setViewMode] = useState<'links' | 'card'>('links');

  if (viewMode === 'card') {
    return (
      <DigitalCardView
        onToggleViewMode={() => setViewMode('links')}
      />
    );
  }

  return (
    <LinkListView
      profile={MOCK_PROFILE}
      initialLinks={MOCK_LINKS}
      onToggleViewMode={() => setViewMode('card')}
      viewModeLabel="명함 모드로 보기"
    />
  );
}
