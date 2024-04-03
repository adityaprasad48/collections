import PostDelete from "@/components/PostDelete";
import PostForm from "@/components/PostForm";
import { fetchPosts } from "@/db/queries/posts";
import Link from "next/link";

export default  async function PostsCreate() {
  const posts = await fetchPosts();

  return (
    <main className="flex flex-col items-start p-24 bg-slate-100">
      <div className="mb-32 grid gap-x-8 gap-y-4 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {posts.map((post) => {
          // Mapping over the posts and rendering each one.
          return (
            <div key={post.id}>
                <Link
                  key={post.id}
                  href={`/posts/${post.id}/edit`}
                  className=""
                >
                  <h2 className={`mb-3 text-2xl font-semibold`}>
                    {post.title}
                  </h2>
                </Link>
              <PostDelete id={post.id} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
