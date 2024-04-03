import PostForm from "@/components/PostForm";

export default function PostsCreate() {
  return (
    <main className="flex flex-col items-start p-24 bg-slate-400">
      <div className="mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <h1>Create Post and Hit Enter</h1>
        <PostForm />
      </div>
    </main>
  );
}
