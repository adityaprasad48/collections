import EditForm from "@/components/EditForm";
import { fetchPostById } from "@/db/queries/posts";

interface PostsEditProps {
  params: {
    id: string;
  };
}

export default async function PostsEdit({ params }: PostsEditProps) {
  const { id } = params;
  const post = await fetchPostById(id);
  return (
    <main className="flex min-h-screen flex-col items-start p-24">
      <div className="mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <EditForm post={post}/>
      </div>
    </main>
  );
}
