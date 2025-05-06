import { getBlogPosts } from '../api/blog';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

interface LoaderData {
  title: string;
  posts: BlogPost[];
  error: string | null;
}

export async function clientLoader() {
  const { body } = await getBlogPosts();
  let data: LoaderData = { title: "Blog", posts: [], error: "" };
  if (body.posts.length === 0) {
    data.error = "Blog posts not found";
  } else {
    data.posts = body.posts;
  }
  return data;
}

export default function Blog({ loaderData }: { loaderData: LoaderData }) {

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{loaderData.title}</h1>
      <div className="space-y-6">
        {loaderData.posts.map((post) => (
          <article key={post.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-2">{post.content}</p>
            <div className="text-sm text-gray-500">
              <span>By {post.author}</span>
              <span className="mx-2">•</span>
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}




