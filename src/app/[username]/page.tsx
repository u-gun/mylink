import { Metadata } from 'next';
import { MOCK_PROFILE, MOCK_LINKS } from '@/data/mockLinks';
import { LinkListView } from '@/components/link/LinkListView';

interface PageProps {
  params: Promise<{
    username: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { username } = await params;
  const isOwner = username.toLowerCase() === MOCK_PROFILE.username.toLowerCase();
  const name = isOwner ? MOCK_PROFILE.name : username;
  const role = isOwner ? MOCK_PROFILE.role : 'Creator';
  const bio = isOwner ? MOCK_PROFILE.bio : `${username}님의 공식 링크 목록입니다.`;

  return {
    title: `${name} (@${username}) | mylink`,
    description: `${role} - ${bio}`,
    openGraph: {
      title: `${name} (@${username}) | mylink`,
      description: bio,
      type: 'profile',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${name} Profile`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${name} (@${username}) | mylink`,
      description: bio,
    },
  };
}

export default async function UserProfilePage({ params }: PageProps) {
  const { username } = await params;

  // 더미데이터 매핑: 요청된 username이 mock 유저와 일치하거나 다른 경우에도 적절히 매핑
  const isMockUser =
    username.toLowerCase() === MOCK_PROFILE.username.toLowerCase();

  const profileData = isMockUser
    ? MOCK_PROFILE
    : {
        ...MOCK_PROFILE,
        username,
        name: `${username}`,
        nameEn: username,
      };

  return (
    <LinkListView
      profile={profileData}
      initialLinks={MOCK_LINKS}
    />
  );
}
