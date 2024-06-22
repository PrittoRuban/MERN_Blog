import { Link } from "react-router-dom";
import WelcomeMessage from "../components/WelcomeMessage";
import { useEffect, useState } from "react";
import HomePostCard from "../components/HomePostCard";
import { ClipLoader } from "react-spinners";
import Loading from "../components/Loading";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Check if user has visited within the last hour
  const hasVisited = localStorage.getItem("hasVisited");
  const visitTimestamp = localStorage.getItem("visitTimestamp");
  const oneHourInMilliseconds = 60 * 60 * 1000;

  const [isLoading, setIsLoading] = useState(() => {
    if (!hasVisited) {
      return true;
    }
    if (visitTimestamp) {
      const timeSinceLastVisit = Date.now() - parseInt(visitTimestamp, 10);
      if (timeSinceLastVisit > oneHourInMilliseconds) {
        localStorage.removeItem("hasVisited");
        localStorage.removeItem("visitTimestamp");
        return true;
      }
    }
    return false;
  });

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const handleLoaded = () => {
    setIsLoading(false);
    localStorage.setItem("hasVisited", "true");
    localStorage.setItem("visitTimestamp", Date.now().toString());
  };

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        handleLoaded();
      }, 300 * 15);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <Loading onLoaded={handleLoaded} />
      ) : (
        <div>
          <div className="mx-auto p-4 flex flex-col gap-4 py-6">
            <WelcomeMessage />
          </div>
          <div className="mx-auto p-4 flex flex-col gap-4 py-6">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <ClipLoader size={50} color={"#4A90E2"} loading={loading} />
              </div>
            ) : (
              <>
                {posts && posts.length > 0 && (
                  <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold text-center mb-3">
                      Recent Posts
                    </h2>
                    <div className="flex flex-wrap gap-6 justify-center">
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
      )}
    </>
  );
}
