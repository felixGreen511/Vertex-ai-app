import Link from "next/link";
import type { ReactNode } from "react";

export default function Home() {
  return (
    <main className="vertex-hatch min-h-screen px-0 text-[#101010] sm:px-8">
      <div className="mx-auto min-h-screen max-w-[1208px] overflow-hidden border-x border-[#f0ddd2] bg-[#fffdfb] shadow-[0_0_80px_rgba(249,115,22,0.06)]">
        <SiteHeader />
        <HeroSection />
        <CoursesSection />
      </div>
    </main>
  );
}

const courses = [
  {
    title: "Next.js for Production",
    description: "Build scalable, high-performance web applications with Next.js.",
    level: "Intermediate",
    duration: "18h 24m",
    modules: "12 modules",
    icon: <NextCourseIcon />,
  },
  {
    title: "Docker Essentials",
    description: "Containerize applications and streamline your development workflow.",
    level: "Beginner",
    duration: "10h 12m",
    modules: "8 modules",
    icon: <DockerCourseIcon />,
  },
  {
    title: "TypeScript Deep Dive",
    description: "Go beyond the basics and write safer, more expressive code.",
    level: "Intermediate",
    duration: "14h 36m",
    modules: "10 modules",
    icon: <TypeScriptCourseIcon />,
  },
];

function SiteHeader() {
  return (
    <header className="flex min-h-[122px] items-center justify-between border-b border-[#ead8ce] px-6 sm:px-12">
      <div className="flex items-center gap-8 sm:gap-16">
        <Link aria-label="Vertex home" className="flex items-center gap-3" href="/">
          <VertexMark className="h-10 w-10" />
          <span className="text-[31px] font-bold leading-none text-[#111111]">
            Vertex
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-12 text-[18px] text-black sm:flex">
          <Link href="/courses">Courses</Link>
          <Link href="/my-learning">My Learning</Link>
        </nav>
      </div>

      <div className="flex items-center gap-7">
        <Link
          aria-label="Notifications"
          className="grid h-11 w-11 place-items-center rounded-full text-[#111111] transition-colors hover:bg-[#fff1ea]"
          href="/notifications"
        >
          <BellIcon className="h-7 w-7" />
        </Link>
        <Link
          aria-label="Profile"
          className="block h-[64px] w-[64px] overflow-hidden rounded-full border border-[#ead8ce] bg-[#f6ddce]"
          href="/my-learning"
        >
          <AvatarIllustration />
        </Link>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="border-b border-[#ead8ce] px-6 pb-16 pt-20 text-center sm:px-12 sm:pb-[66px] sm:pt-[86px]">
      <div className="mx-auto inline-flex h-12 items-center justify-center rounded-[10px] border border-[#efd9cc] bg-[#fff8f4] px-6 text-sm font-semibold uppercase text-[#f05f2a]">
        Intelligent Learning
      </div>

      <h1 className="font-display mx-auto mt-11 max-w-[790px] text-[44px] font-bold leading-[52px] text-black sm:text-[64px] sm:leading-[72px] lg:text-[80px] lg:leading-[86px]">
        Search your learning in plain English.
      </h1>

      <p className="mx-auto mt-9 max-w-[590px] text-[23px] leading-[37px] text-[#64748b]">
        Vertex understands what you want to learn and finds the exact lessons
        across all your courses.
      </p>

      <Link
        className="mx-auto mt-11 inline-flex h-[76px] items-center justify-center gap-6 rounded-[10px] bg-[#f0643b] px-8 text-[22px] font-medium text-white shadow-[0_16px_32px_rgba(240,100,59,0.26)] transition-colors hover:bg-[#e65329]"
        href="/courses"
      >
        Explore Courses
        <ArrowRightIcon className="h-7 w-7" />
      </Link>

      <form
        action="/search"
        className="vertex-soft-shadow mx-auto mt-[52px] flex min-h-[106px] w-full max-w-[932px] items-center gap-4 rounded-[14px] border border-[#efd9cc] bg-white px-7 text-left"
      >
        <label className="sr-only" htmlFor="home-search">
          Search your learning
        </label>
        <SearchIcon className="h-9 w-9 shrink-0 text-[#1f2937]" />
        <input
          className="min-w-0 flex-1 bg-transparent text-[17px] text-[#111827] outline-none placeholder:text-[#9ca3af] sm:text-[24px]"
          id="home-search"
          name="q"
          placeholder="Ask anything about your learning..."
          type="search"
        />
        <kbd className="hidden h-[54px] min-w-[80px] items-center justify-center gap-2 rounded-[9px] border border-[#efd9cc] bg-white px-4 text-[18px] text-[#111111] sm:flex">
          <CommandIcon className="h-5 w-5" />
          K
        </kbd>
      </form>
    </section>
  );
}

function CoursesSection() {
  return (
    <section className="px-6 pb-0 pt-[66px] sm:px-16">
      <div className="flex items-center justify-between gap-6">
        <h2 className="font-display text-[30px] font-bold leading-10 text-black sm:text-[36px]">
          All Courses
        </h2>
        <Link
          className="flex items-center gap-4 text-[18px] font-medium text-[#f0522a]"
          href="/courses"
        >
          View all courses
          <ArrowRightIcon className="h-5 w-5" />
        </Link>
      </div>

      <div className="mt-9 grid gap-5 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>

      <div className="mt-[90px] flex items-center gap-10">
        <div className="h-px flex-1 bg-[#ead8ce]" />
        <div className="flex shrink-0 items-center gap-8 text-center text-[20px] text-[#384152] sm:text-[22px]">
          <StarIcon className="h-7 w-7 text-[#f0522a]" />
          <span>New courses and lessons added every week.</span>
        </div>
        <div className="h-px flex-1 bg-[#ead8ce]" />
      </div>

      <DecorativeSkyline />
    </section>
  );
}

function CourseCard({
  course,
}: {
  course: {
    title: string;
    description: string;
    level: string;
    duration: string;
    modules: string;
    icon: ReactNode;
  };
}) {
  return (
    <article className="flex min-h-[466px] flex-col rounded-[14px] border border-[#ecd7ca] bg-white px-8 pb-8 pt-10 shadow-[0_12px_28px_rgba(15,23,42,0.03)]">
      <div className="h-[92px] w-[92px]">{course.icon}</div>

      <h3 className="font-display mt-9 text-[28px] font-bold leading-9 text-black">
        {course.title}
      </h3>
      <p className="mt-8 max-w-[270px] text-[18px] leading-8 text-[#64748b]">
        {course.description}
      </p>

      <div className="mt-auto border-t border-[#ead8ce] pt-7">
        <dl className="flex flex-wrap items-center gap-x-5 gap-y-3 text-[12px] text-[#334155]">
          <div className="flex items-center gap-2">
            <dt className="sr-only">Level</dt>
            <SignalIcon className="h-4 w-4 text-[#64748b]" />
            <dd>{course.level}</dd>
          </div>
          <div className="flex items-center gap-2">
            <dt className="sr-only">Duration</dt>
            <ClockIcon className="h-5 w-5 text-[#64748b]" />
            <dd>{course.duration}</dd>
          </div>
          <div className="flex items-center gap-2">
            <dt className="sr-only">Modules</dt>
            <DocumentIcon className="h-5 w-5 text-[#64748b]" />
            <dd>{course.modules}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

function DecorativeSkyline() {
  const leftBars = [
    "h-[112px]",
    "h-[154px]",
    "h-[194px]",
    "h-[144px]",
    "h-[84px]",
  ];
  const middleBars = [
    "h-[72px]",
    "h-[112px]",
    "h-[150px]",
    "h-[196px]",
  ];

  return (
    <div aria-hidden="true" className="relative mt-12 h-[236px] overflow-hidden">
      <div className="absolute bottom-[-26px] left-[-34px] flex items-end gap-0 blur-sm">
        {leftBars.map((height, index) => (
          <div
            className={`${height} w-[82px] bg-gradient-to-t from-[#ff7b4e] via-[#ffa07f] to-[#fff4ee] opacity-80`}
            key={`left-${index}`}
          />
        ))}
      </div>

      <div className="absolute bottom-[-34px] left-[48%] hidden -translate-x-1/2 items-end gap-0 blur-sm sm:flex">
        {middleBars.map((height, index) => (
          <div
            className={`${height} w-[100px] bg-gradient-to-t from-[#ff7b4e] via-[#ffa07f] to-[#fff6f2] opacity-70`}
            key={`middle-${index}`}
          />
        ))}
      </div>

      <div className="absolute bottom-[-36px] right-[-50px] h-[162px] w-[270px] bg-gradient-to-t from-[#ff7045] via-[#ff9b78] to-[#fff3ee] opacity-80 blur-sm" />
    </div>
  );
}

function VertexMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 44 44"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22 38 4 6h13.2L22 15.1 26.8 6H40L22 38Z" fill="#f0643b" />
      <path d="M22 26.1 14.2 11.8h5.2L22 16.7l2.6-4.9h5.2L22 26.1Z" fill="#fffdfb" />
    </svg>
  );
}

function BellIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.3 18a3.3 3.3 0 0 1-6.6 0" />
      <path d="M18.6 16H5.4c1.1-1.2 1.7-2.8 1.7-4.5V9.2a4.9 4.9 0 0 1 9.8 0v2.3c0 1.7.6 3.3 1.7 4.5Z" />
      <path d="M12 3.2V2" />
    </svg>
  );
}

function AvatarIllustration() {
  return (
    <svg
      aria-hidden="true"
      className="h-full w-full"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="#f4d8c8" height="64" width="64" />
      <circle cx="32" cy="25" fill="#20232a" r="15" />
      <path d="M17 64c2-14.6 8-22 15-22s13 7.4 15 22H17Z" fill="#101828" />
      <path d="M26 38h12v12c0 3.3-12 3.3-12 0V38Z" fill="#d99172" />
      <ellipse cx="32" cy="27" fill="#e6a07f" rx="11" ry="14" />
      <path d="M22 25c2.1-9.5 7.6-14 16.2-10.2 1.9 3.1 3 7.6 3.4 13.3-6.5-1-11.9-4-16.1-9-1.6 1.4-2.7 3.4-3.5 5.9Z" fill="#1c1f26" />
      <circle cx="28" cy="29" fill="#292524" r="1.2" />
      <circle cx="36" cy="29" fill="#292524" r="1.2" />
      <path d="M29.4 35.5c1.6 1.4 3.6 1.4 5.2 0" stroke="#7f3f2a" strokeLinecap="round" strokeWidth="1.2" />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m16.2 16.2 4.3 4.3" />
    </svg>
  );
}

function CommandIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 9h6v6H9z" />
      <path d="M9 9H6.8A2.8 2.8 0 1 1 9 6.2V9Z" />
      <path d="M15 9V6.8A2.8 2.8 0 1 1 17.8 9H15Z" />
      <path d="M15 15h2.2A2.8 2.8 0 1 1 15 17.8V15Z" />
      <path d="M9 15v2.2A2.8 2.8 0 1 1 6.2 15H9Z" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m12 3 2.7 5.8 6.3.8-4.6 4.3 1.2 6.1-5.6-3.1L6.4 20l1.2-6.1L3 9.6l6.3-.8L12 3Z" />
    </svg>
  );
}

function SignalIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect height="4" rx="1" width="2" x="3" y="13" />
      <rect height="7" rx="1" width="2" x="8" y="10" />
      <rect height="11" rx="1" width="2" x="13" y="6" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 3.5h7l4 4V20.5H7V3.5Z" />
      <path d="M14 3.5v4h4" />
    </svg>
  );
}

function NextCourseIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-full w-full rounded-[10px] shadow-[0_8px_22px_rgba(15,23,42,0.2)]"
      viewBox="0 0 92 92"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="nextIconGradient" x1="0" x2="92" y1="0" y2="92">
          <stop stopColor="#050505" />
          <stop offset="1" stopColor="#202020" />
        </linearGradient>
      </defs>
      <rect fill="url(#nextIconGradient)" height="92" rx="10" width="92" />
      <path d="M24 66V26h8.2l27.6 40h-8.2L24 26h8.2v40H24Z" fill="white" />
      <path d="M60 26h8v40h-8V26Z" fill="white" />
    </svg>
  );
}

function DockerCourseIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-full w-full"
      viewBox="0 0 92 92"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11 49h47c6.7 0 11.8-2.3 15.8-7 1.8 6.9-.2 13-5.8 18.2-6 5.6-14.2 8.4-24.6 8.4H31.8C20.5 68.6 13.6 62.1 11 49Z" fill="#2496ED" stroke="#0f172a" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="M69 39c1.9-5.2 5.9-8 11.8-8.4 1.3 5.6-1.1 9.5-7.2 11.8" fill="#2496ED" stroke="#0f172a" strokeLinejoin="round" strokeWidth="1.8" />
      <g fill="#2496ED" stroke="#0f172a" strokeLinejoin="round" strokeWidth="1.4">
        <rect height="8" width="8" x="24" y="40" />
        <rect height="8" width="8" x="34" y="40" />
        <rect height="8" width="8" x="44" y="40" />
        <rect height="8" width="8" x="34" y="30" />
        <rect height="8" width="8" x="44" y="30" />
        <rect height="8" width="8" x="44" y="20" />
        <rect height="8" width="8" x="54" y="40" />
        <rect height="8" width="8" x="54" y="30" />
      </g>
      <circle cx="26" cy="58" fill="#0f172a" r="1.7" />
    </svg>
  );
}

function TypeScriptCourseIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-full w-full rounded-[10px]"
      viewBox="0 0 92 92"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="tsIconGradient" x1="0" x2="92" y1="0" y2="92">
          <stop stopColor="#60a5fa" />
          <stop offset="1" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      <rect fill="url(#tsIconGradient)" height="92" rx="10" width="92" />
      <text fill="white" fontFamily="Arial, Helvetica, sans-serif" fontSize="42" fontWeight="700" x="16" y="59">
        TS
      </text>
    </svg>
  );
}
