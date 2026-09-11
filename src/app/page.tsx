export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-12 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <main className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-zinc-900 text-xl font-bold tracking-wider text-white dark:bg-zinc-100 dark:text-zinc-900">
            UJ
          </div>
          <h1 className="mt-4 text-2xl font-bold tracking-tight">정유건</h1>
          <p className="text-sm font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
            Junior Software Engineer
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            아이디어를 코드로 실현하고 사용자 가치를 만들어가는 개발자 정유건입니다.
            새로운 기술을 탐구하고 실용적인 웹 서비스를 만드는 데 열정을 갖고 있습니다.
          </p>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-zinc-100 dark:border-zinc-800" />

        {/* Profile Info List */}
        <div className="space-y-3">
          <div className="flex items-center justify-between rounded-xl bg-zinc-50 px-4 py-3 dark:bg-zinc-800/60">
            <span className="text-xs font-semibold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
              소속
            </span>
            <div className="text-right">
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                청운대학교
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                컴퓨터공학과 (Chungwoon-CSE)
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-zinc-50 px-4 py-3 dark:bg-zinc-800/60">
            <span className="text-xs font-semibold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
              관심 분야
            </span>
            <div className="text-right">
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Web & Software Development
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Frontend / Full-stack
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-zinc-50 px-4 py-3 dark:bg-zinc-800/60">
            <span className="text-xs font-semibold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
              GitHub
            </span>
            <div className="text-right">
              <a
                href="https://github.com/u-gun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400"
              >
                github.com/u-gun
              </a>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <span className="rounded-md border border-zinc-200 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
            #Next.js
          </span>
          <span className="rounded-md border border-zinc-200 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
            #TypeScript
          </span>
          <span className="rounded-md border border-zinc-200 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
            #React
          </span>
          <span className="rounded-md border border-zinc-200 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
            #WebDeveloper
          </span>
          <span className="rounded-md border border-zinc-200 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
            #청운대컴공
          </span>
        </div>
      </main>
    </div>
  );
}
