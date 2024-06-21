import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PostCard({ post }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-lg group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={`/post/${post.slug}`} className="block">
        <motion.img
          src={post.image}
          alt={post.title}
          className="w-full h-[260px] object-cover"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </Link>

      <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div>
          <h2 className="text-white text-lg font-semibold">{post.title}</h2>
        </div>
        <div
          className="text-white text-sm line-clamp-3"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div>
          <Link
            to={`/post/${post.slug}`}
            className="mt-2 text-white px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300 inline-block"
          >
            Read More
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
