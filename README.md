# mylink – TDS 기반 Linktree 클론 서비스

**mylink**는 **토스 디자인 시스템 (Toss Design System, TDS)** 규격과 **Next.js 16 (App Router)** 기반으로 구축된 직관적이고 미니멀한 올인원 링크 허브(Linktree 클론) 서비스입니다.

---

## 🌟 주요 특징

- **TDS 디자인 규격 적용**:
  - 토스 시그니처 블루 (`#3182F6`) 포인트 및 계층화된 그레이스케일
  - 시각적 노이즈를 최소화한 카드 레이아웃과 넉넉한 여백
  - 쫀득한 탭 인터랙션 (`active:scale-[0.98]`)
- **실시간 링크 필터링 & 검색**:
  - 카테고리 칩 필터 (전체, 포트폴리오, 프로젝트, 블로그, 소셜, 연락처)
  - 실시간 링크 검색창
- **인터랙티브 마이크로카피 & 플로팅 토스트**:
  - 링크 복사, 이메일 주소 복사 시 즉각적인 TDS 알약(Pill) 플로팅 토스트 제공
  - 토스 특유의 친절하고 명확한 대화형 마이크로카피 ("링크가 복사되었어요")
- **동적 퍼블릭 프로필 라우트**:
  - `/[username]` 동적 라우팅 지원 (예: `/ugeon`)
  - Open Graph 및 Twitter Card 메타데이터 자동 생성
- **멀티 뷰 모드 지원**:
  - 올인원 링크트리 뷰 (`LinkListView`)와 사이버 디지털 명함 뷰 (`DigitalCardView`) 간 원클릭 전환 기능 지원

---

## 🚀 빠른 시작 (Getting Started)

### 개발 서버 실행

```bash
npm run dev
# 또는
npm.cmd run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 또는 [http://localhost:3000/ugeon](http://localhost:3000/ugeon) 에 접속하여 확인하실 수 있습니다.

### 프로덕션 빌드

```bash
npm run build
npm run start
```

---

## 📁 프로젝트 구조

```
mylink/
├─ docs/
│   └─ PRD_Linktree_Clone_kr.md  # 제품 요구사항 정의서 (PRD)
├─ src/
│   ├─ app/
│   │   ├─ [username]/page.tsx   # 동적 퍼블릭 프로필 페이지
│   │   ├─ globals.css           # 전역 스타일 및 TDS 테마
│   │   ├─ layout.tsx            # 루트 레이아웃 및 폰트 설정
│   │   └─ page.tsx              # 메인 링크트리 페이지 & 뷰 토글
│   ├─ components/
│   │   ├─ card/                 # 사이버 디지털 명함 뷰 컴포넌트
│   │   ├─ link/                 # TDS 링크트리 컴포넌트군
│   │   │   ├─ CategoryFilter.tsx# 카테고리 필터 칩
│   │   │   ├─ LinkCard.tsx      # TDS 링크 카드 컴포넌트
│   │   │   ├─ LinkIcons.tsx     # 아이콘 매퍼 (SVG & Lucide)
│   │   │   ├─ LinkListView.tsx  # 메인 링크 목록 뷰
│   │   │   ├─ ProfileHeader.tsx # 프로필 헤더 & 빠른 액션
│   │   │   └─ Toast.tsx         # TDS 알약 플로팅 토스트
│   │   └─ ui/                   # shadcn/ui 기반 컴포넌트
│   ├─ data/
│   │   └─ mockLinks.ts          # 표준 프로필 & 링크 더미데이터
│   ├─ lib/
│   │   └─ utils.ts              # 공통 유틸리티 함수
│   └─ types/
│       └─ link.ts               # LinkItem, UserProfile 타입 정의
└─ package.json
```

---

## 📄 라이선스
MIT License
