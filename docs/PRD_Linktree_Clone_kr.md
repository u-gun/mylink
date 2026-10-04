# PRD – Linktree 클론 서비스 (프로젝트 **mylink**)

**저장소**: `c:/Users/jug/OneDrive_CW_Univ/2026-2/아이디어를현실로-바이브코딩_리나/workspace/mylink`
**프레임워크 & 디자인 시스템**: Next.js 16 (App Router) + TypeScript, Tailwind CSS v4, **Toss Design System (TDS) + shadcn/ui**, ESLint

---

## 1. 비전 & 목표
| 목표 | 성공 지표 |
|------|-----------|
| **토스 디자인 시스템(TDS)** 기반의 군더더기 없고 직관적인 개인 링크 허브 제공 (Linktree 클론) | 출시 3개월 내 **5,000명** 이상의 사용자 확보 |
| 데스크톱·모바일 모두 빠르게 로드되는 SEO 친화적 URL 및 부드러운 반응형 경험 제공 | 핵심 페이지 **Lighthouse 성능 점수 95%+** |
| TDS 컴포넌트 생태계와 연계한 향후 분석, 커스텀 브랜딩, 서드파티 확장 구조 제공 | Q2 2027까지 **Analytics 플러그인** 설계 완료 |

---

## 2. 대상 사용자 & 페르소나
| 페르소나 | 요구사항 |
|----------|----------|
| **크리에이터 / 인플루언서** | SNS·블로그·스토어 등 모든 링크를 한 URL에 집약. 토스 스타일의 깔끔한 UI, 원터치 링크 복사 |
| **소규모 사업자** | 신뢰감을 주는 모던 브랜드 링크 허브. 커스텀 도메인 및 로고 업로드 가능 |
| **개발자·엔지니어** | TDS 기반의 미니멀 인터랙티브 디지털 명함/포트폴리오 링크 제공 |

---

## 3. 핵심 기능 (MVP)
| 기능 | 설명 | 구현 포인트 |
|------|------|--------------|
| **사용자 계정** | 이메일/패스워드 + Google·GitHub OAuth 로그인 | 이후 **Firebase Auth** 로 전환 예정 |
| **대시보드 – 링크 관리** | 링크(제목, URL, 아이콘, 새창여부) CRUD 및 드래그‑드롭 정렬 | `src/app/dashboard/…` 페이지 구현, TDS 카드 및 스위치 컴포넌트 활용 |
| **퍼블릭 프로필 페이지** | `/{username}` 경로에서 사용자 링크 리스트 노출, TDS 테마 커스터마이징 | Next.js 동적 라우트 (`pages/[username].tsx` 또는 `app/[username]/page.tsx`), **MOCK_LINKS** 바인딩 |
| **커스텀 도메인 바인딩** | 사용자가 자신의 도메인을 매핑 가능 | DB에 도메인 매핑 저장, Vercel/NGINX 설정 가이드 제공 |
| **TDS 기반 반응형 디자인** | 모바일 퍼스트 Tailwind CSS v4 레이아웃, **토스 디자인 시스템(TDS)** 규격(토스 블루 `#3182F6`, Grey 50~900, `rounded-2xl` 라운딩, `active:scale-[0.98]` 햅틱 탭 인터랙션) 적용 | **shadcn/ui** 프리미티브와 TDS 테마 토큰 결합 |
| **하단 플로팅 피드백** | 링크 복사, 이메일 복사 시 즉각적인 인터랙션 제공 | TDS 스타일 알약(Pill) 플로팅 토스트 컴포넌트 |
| **SEO / 메타 태그** | OG·Twitter Card 자동 생성 (프로필 제목·설명 기반) | Next.js Metadata API에 메타 태그 삽입 |
| **더미데이터 기반 프로토타입** | 백엔드 연동 전 완결된 UI 경험 제공 | `src/data/mockLinks.ts`의 표준 링크/프로필 더미데이터 활용 |
| **Analytics (향후)** | 링크 클릭·방문자·리퍼러 트래킹 | DB 스키마 설계만 선행, TDS 금융 차트 스타일로 M5에서 시각화 |

---

## 4. 비기능 요구사항
| 영역 | 요구사항 |
|------|----------|
| **디자인 시스템 (TDS)** | **Toss Design System (TDS)** 가이드라인 준수: 불필요한 시각적 노이즈 제거, 넉넉한 여백, 토스 시그니처 블루(`#3182F6`), 그레이스케일 위계(Grey 900~50) 확립 |
| **인터랙션 경험** | 터치/클릭 시 쫀득한 반응성을 주는 마이크로 인터랙션(`active:scale-[0.98] transition-transform`) 기본 적용 |
| **성능** | 프로필 페이지 **TTFB < 100 ms** (정적 렌더링 및 ISR 최적화) |
| **확장성** | Vercel·Edge Functions 로 수평 확장, DB (Firestore/PG) 가 10k 동시 사용자 지원 |
| **보안** | 입력 URL 검증, CSP 적용, HTTPS 전송 강제 |
| **접근성** | WCAG 2.1 AA 수준 (shadcn/ui의 Base UI 및 WAI-ARIA 접근성 표준 준수) |
| **유지보수성** | `eslint-config-next` 규칙 준수, TypeScript **strict** 모드 (`"strict": true`) |
| **톤앤매너** | 토스 특유의 친절하고 명확한 대화형 마이크로카피("링크가 복사되었어요" 등) 적용 |

---

## 5. 기술 아키텍처 및 데이터 규격

### 5.1 레포지토리 구조
```
mylink/
├─ .git/                # Git 레포
├─ .next/               # Next.js 빌드 아웃풋 (자동 생성)
├─ node_modules/        # npm 패키지
├─ public/              # 정적 파일 (favicon 등)
├─ src/
│   ├─ app/             # Next.js App Router 페이지 및 전역 스타일
│   │   ├─ globals.css  # shadcn/ui 테마 토큰 및 전역 스타일
│   │   └─ page.tsx     # 메인 페이지
│   ├─ components/
│   │   └─ ui/          # shadcn/ui 컴포넌트 (button 등)
│   ├─ data/
│   │   └─ mockLinks.ts # 링크 및 프로필 표준 더미데이터 (MOCK_LINKS, MOCK_PROFILE)
│   ├─ lib/
│   │   └─ utils.ts     # cn() 등 shadcn/ui 공통 유틸리티
│   └─ types/
│       └─ link.ts      # LinkItem, UserProfile, LinkCategory 타입 정의
├─ components.json      # shadcn/ui 설정 파일
├─ package.json         # npm 스크립트 및 의존성
├─ tsconfig.json        # TypeScript 설정 (strict, path alias @/*)
├─ next.config.ts       # Next.js 설정 (동적 라우트 등)
└─ README.md            # 현재 Next.js 스타터 README
```

### 5.2 표준 더미데이터 규격 (`src/data/mockLinks.ts`)
초기 프로토타입 및 퍼블릭 프로필/대시보드 개발 시에는 `src/data/mockLinks.ts`에 정의된 더미데이터를 기본 데이터 소스로 사용합니다:

1. **`MOCK_PROFILE`**: 사용자 프로필 메타데이터 (이름, 영문명, 직무, 소속, Bio, 상태메시지, 이메일, 기술스택)
2. **`MOCK_LINKS`**: 6종의 TDS 스타일 링크 카드 데이터
   - 포트폴리오 (`highlight: true` 토스 블루 강조 카드)
   - GitHub 프로필 (코드 저장소)
   - 기술 블로그 (`badge: '주 1회 연재'`)
   - 노션 이력서 & 포트폴리오 PDF
   - LinkedIn 프로페셔널 네트워크
   - 커피챗 & 협업 제안 (원클릭 메일 전송, `badge: '답장 빠름'`)
3. **`LINK_CATEGORIES`**: 카테고리 필터링 탭 규격 (`all`, `portfolio`, `project`, `blog`, `social`, `contact`)

---

## 6. 와이어프레임
### 6.1 홈 / 랜딩 페이지
![Home Wireframe](file:///C:/Users/jug/.gemini/antigravity/brain/9f369e76-8d55-40ec-9bd7-0ae4ea752720/home_wireframe_1790488314736.jpg)
- 중앙에 서비스 이름 **"Linktree Clone"** 헤더
- 간단한 설명 텍스트
- 큰 **"Get Started"** 버튼 (중앙 정렬)
- 하단 푸터에 **About**, **Docs**, **Contact** 링크

### 6.2 대시보드 (링크 관리) – (예시 와이어프레임)
> **[※ 아직 이미지가 없습니다]**
- 좌측 사이드바에 **프로필 사진** 및 **내 프로필** 메뉴
- 메인 영역에 **링크 리스트** (드래그‑드롭 가능)와 **Add New Link** 버튼
- 각 링크 항목에 **제목, URL, 아이콘 선택, 새창 여부** 토글

### 6.3 퍼블릭 프로필 페이지 – (예시 와이어프레임)
> **[※ 아직 이미지가 없습니다]**
- 상단에 **사용자 이름** 및 **프로필 사진**
- 아래에 **링크 카드 리스트** (컬러/아이콘 커스터마이징 가능)
- 페이지 하단에 **커스텀 도메인** 표시 및 **링크 공유** 버튼

> *위의 대시보드와 퍼블릭 프로필 와이어프레임은 추후 디자인 단계에서 추가될 예정이며, 현재는 개념 설계 단계임을 알려드립니다.*

---

## 7. 마일스톤 & 일정
| 마일스톤 | 산출물 | 목표 시점 |
|----------|--------|----------|
| **M1 – 프로젝트 초기 설정** | README 정리, Dockerfile, GitHub Actions (lint·build) | 2주 |
| **M2 – 퍼블릭 프로필** | 동적 `[username]` 라우트, 기본 테마 | 4주 |
| **M3 – 대시보드·링크 CRUD** | 인증 보호 대시보드, 드래그‑드롭, 데이터 영구 저장 (임시 JSON·Firestore) | 6주 |
| **M4 – 커스텀 도메인** | 도메인 입력 UI·검증, DNS 가이드 | 8주 |
| **M5 – SEO·Analytics 훅** | 메타 태그, 클릭 트래킹 스텁 | 10주 |
| **M6 – 베타 론칭** | Vercel 배포·테스트 사용자 20명 모집 | 12주 |
| **M7 – 개선·품질** | 접근성 감사, 성능 최적화, 버그 수정 | 14주 |
| **M8 – 정식 공개** | 문서 사이트·오픈소스 공개·마케팅 랜딩 | 16주 |

---

## 8. 열려있는 질문 / 결정 사항
| 항목 | 옵션 | 권고 / 결정 | 비고 |
|------|------|------|------|
| **UI 컴포넌트 & 디자인 시스템** | TDS + shadcn/ui vs 자체 CSS vs MUI | **Toss Design System (TDS) + shadcn/ui** (결정 완료) | shadcn/ui 프리미티브에 토스 디자인 시스템(토스 블루 `#3182F6`, Grey 50~900, 둥근 모서리 `rounded-2xl`, 햅틱 스케일 인터랙션)을 결합하여 모든 UI 구축 |
| **초기 데이터 소스 (더미데이터)** | 백엔드 직결 vs 로컬 Mock Data | **로컬 Mock Data 활용** (`src/data/mockLinks.ts`) | UI-First 방식으로 퍼블릭 프로필과 대시보드 뷰를 먼저 완결한 후 백엔드(Firebase) 연동 |
| **데이터베이스** | Firestore vs. PostgreSQL vs. SQLite | **Firestore** (실시간·빠른 프로토타입) | 필요 시 마이그레이션 가능 |
| **인증** | Firebase Auth vs. NextAuth.js vs. 자체 JWT | **NextAuth.js** (유연성) → 추후 Firebase 연동 | |
| **도메인 매핑** | Vercel Edge 설정 vs. 자체 Nginx 프록시 | 초기 **Vercel** (간편) | |
| **Analytics** | Google Analytics vs. PostHog vs. 미구현 | 현재 **미구현** → DB 스키마만 설계 | M5에서 구현 예정 |

---

## 9. 리스크 & 완화 방안
| 리스크 | 영향 | 완화 전략 |
|--------|------|------------|
| **기능 확장 과다** | 출시 지연 | MVP 기준 엄격히 고수, 마일스톤 별 기능 잠금 |
| **프로필 페이지 성능** | 사용자 경험 저하 | Next.js **ISR**(Incremental Static Regeneration) 적용, 캐시 활용 |
| **사용자 입력 URL 보안** | XSS·오픈 리다이렉트 위험 | URL 정규식 검증, `https://` 강제, `rel="noopener noreferrer"` 적용 |
| **커스텀 도메인 DNS 복잡성** | 도입 장벽 | 단계별 가이드 제공, 추후 DNS 자동 확인 기능 추가 |

---

## 10. 문서 체크리스트
- **README.md** – 프로젝트 개요·시작 가이드·배포 방법 업데이트
- **CONTRIBUTING.md** – 기여 규칙·코드 스타일(ESLint) 명시
- **Dockerfile** – `node:20-alpine` 기반 이미지 제공
- **API 명세** – 향후 백엔드(API) 설계용 OpenAPI 스키마 초안 작성

---

## 11. 다음 작업 안내
1. **README.md** 를 현재 프로젝트 설명(‘Linktree 클론’)으로 수정하고 `Getting Started` 섹션 추가
2. **Dockerfile** 추가 (`node:20-alpine` 기반) → 로컬·CI에서 동일 환경 보장
3. **src/app/[username]/page.tsx** 파일 생성 – **`MOCK_LINKS`와 `MOCK_PROFILE`을 바인딩**하여 TDS 스타일 퍼블릭 프로필 렌더링
4. **src/app/dashboard/page.tsx** (또는 `dashboard/`) 파일 초안 작성 – `MOCK_LINKS` 상태를 기반으로 링크 CRUD 및 토글 조작 인터페이스 구현 시작
5. **GitHub Actions** 워크플로: `eslint`, `tsc --noEmit`, `npm run build` 실행

위 내용은 토스 디자인 시스템(TDS), shadcn/ui 기반 디자인 시스템 도입 및 표준 더미데이터(`src/data/mockLinks.ts`) 활용 방침을 반영한 최신 PRD 문서입니다.
