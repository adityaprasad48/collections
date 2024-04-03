import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 space-y-4">
      <h2 className="bg-green-200 text-slate-500 px-2 py-3">
        Collection Page
      </h2>
      <Link href="/posts/create">
        <button className="p-5 ring cursor-pointer">
          <h1>Create Post</h1>
        </button>
      </Link>
      <Link href="/posts">
        <button className="p-5 ring cursor-pointer">
          <h1>View All Post</h1>
        </button>
      </Link>
    </main>
  );
}
