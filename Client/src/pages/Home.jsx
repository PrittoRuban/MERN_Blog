import { Link } from "react-router-dom";
import WelcomeMessage from "../components/WelcomeMessage";
import { useEffect, useState } from "react";
import HomePostCard from "../components/HomePostCard";
import { ClipLoader } from "react-spinners";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div className="mx-auto p-4 flex flex-col gap-4 py-6">
        <WelcomeMessage />
      </div>
      <div className=" mx-auto p-4 flex flex-col gap-4 py-6">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <ClipLoader size={50} color={"#4A90E2"} loading={loading} />
          </div>
        ) : (
          <>
            {posts && posts.length > 0 && (
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-semibold text-center mb-3">
                  Recent Posts
                </h2>
                <div className="flex flex-wrap gap-4 justify-center">
                  {posts.map((post) => (
                    <HomePostCard key={post._id} post={post} />
                  ))}
                </div>
                <Link
                  to={"/search"}
                  className="text-lg text-teal-500 hover:underline text-center"
                >
                  View all posts
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
