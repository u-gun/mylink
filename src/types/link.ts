export type LinkCategory = 'portfolio' | 'social' | 'contact' | 'blog' | 'project';

export interface LinkItem {
  id: string;
  title: string;
  description?: string;
  url: string;
  icon: 'github' | 'velog' | 'linkedin' | 'youtube' | 'instagram' | 'mail' | 'globe' | 'notion' | 'file-text';
  category: LinkCategory;
  isActive: boolean;
  isNewTab: boolean;
  badge?: string;
  order: number;
  clickCount?: number;
  highlight?: boolean; // 토스 스타일 강조 카드 (예: 토스 블루 배경 또는 뱃지)
}

export interface UserProfile {
  username: string;
  name: string;
  nameEn: string;
  role: string;
  affiliation: string;
  bio: string;
  avatarUrl?: string;
  email: string;
  statusMessage?: string;
  techStack: string[];
}
