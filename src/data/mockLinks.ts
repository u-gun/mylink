import { LinkItem, UserProfile } from '@/types/link';

/**
 * 기본 사용자 프로필 더미데이터 (TDS 스타일)
 */
export const MOCK_PROFILE: UserProfile = {
  username: 'ugeon',
  name: '정유건',
  nameEn: 'Ugeon Jung',
  role: 'Software Engineer',
  affiliation: '청운대학교 컴퓨터공학과',
  bio: '아이디어를 견고한 제품으로 실현하는 엔지니어입니다. 직관적이고 아름다운 사용자 경험을 고민합니다.',
  statusMessage: '✨ 새로운 프로젝트 및 커피챗에 열려있어요',
  email: 'ugeon0361@gmail.com',
  techStack: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'Java', 'SQL'],
};

/**
 * 링크 목록 더미데이터
 * - TDS의 명확한 카테고리 분류 및 강조(Highlight) 카드 속성 포함
 */
export const MOCK_LINKS: LinkItem[] = [
  {
    id: 'link-1',
    title: '✨ 2026 인터랙티브 포트폴리오',
    description: 'Next.js 16과 TDS로 완성한 개인 프로젝트 모음집',
    url: 'https://github.com/u-gun',
    icon: 'globe',
    category: 'portfolio',
    isActive: true,
    isNewTab: true,
    badge: '대표 링크',
    highlight: true,
    order: 1,
    clickCount: 1248,
  },
  {
    id: 'link-2',
    title: 'GitHub 프로필 & 오픈소스',
    description: '1일 1커밋과 다양한 사이드 프로젝트 코드 저장소',
    url: 'https://github.com/u-gun',
    icon: 'github',
    category: 'project',
    isActive: true,
    isNewTab: true,
    order: 2,
    clickCount: 852,
  },
  {
    id: 'link-3',
    title: '기술 블로그 (Tech Log)',
    description: '트러블슈팅, 신기술 스터디, 아키텍처 회고 기록',
    url: 'https://velog.io',
    icon: 'velog',
    category: 'blog',
    isActive: true,
    isNewTab: true,
    badge: '주 1회 연재',
    order: 3,
    clickCount: 620,
  },
  {
    id: 'link-4',
    title: '노션 이력서 & 포트폴리오 PDF',
    description: '프로젝트 상세 기여도와 핵심 역량을 담은 상세 이력서',
    url: 'https://notion.so',
    icon: 'notion',
    category: 'portfolio',
    isActive: true,
    isNewTab: true,
    order: 4,
    clickCount: 430,
  },
  {
    id: 'link-5',
    title: 'LinkedIn 경력 & 프로페셔널 네트워크',
    description: '엔지니어링 네트워킹과 커리어 히스토리',
    url: 'https://linkedin.com',
    icon: 'linkedin',
    category: 'social',
    isActive: true,
    isNewTab: true,
    order: 5,
    clickCount: 295,
  },
  {
    id: 'link-6',
    title: '커피챗 & 협업 제안하기',
    description: '프로젝트 협업, 멘토링, 가벼운 커피챗 언제든 환영합니다',
    url: 'mailto:ugeon0361@gmail.com',
    icon: 'mail',
    category: 'contact',
    isActive: true,
    isNewTab: false,
    badge: '답장 빠름',
    order: 6,
    clickCount: 184,
  },
];

/**
 * 카테고리 메타데이터 (TDS 스타일 필터 칩용)
 */
export const LINK_CATEGORIES = [
  { key: 'all', label: '전체' },
  { key: 'portfolio', label: '포트폴리오' },
  { key: 'project', label: '프로젝트' },
  { key: 'blog', label: '블로그' },
  { key: 'social', label: '소셜' },
  { key: 'contact', label: '연락처' },
] as const;
