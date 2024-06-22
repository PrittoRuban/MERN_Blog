import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";

export default function HomePostCard({ post }) {
  return (
    <div className="group relative w-full border border-teal-500 hover:border-2 h-[350px] overflow-hidden rounded-lg sm:w-[400px] transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt="post cover"
          className="h-[220px] w-full object-cover transition-all duration-300 ease-in-out transform group-hover:scale-105"
        />
      </Link>
      <div className="p-3 flex flex-col gap-2">
        <p className="text-lg font-semibold line-clamp-2">{post.title}</p>
        <span className="italic text-sm">{post.category}</span>
      </div>
      <Transition
        show={true}
        enter="transition-all duration-300 ease-in-out"
        enterFrom="opacity-0 translate-y-10"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all duration-300 ease-in-out"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-10"
      >
        <Link
          to={`/post/${post.slug}`}
          className="z-10 absolute bottom-0 left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2 opacity-0 group-hover:opacity-100 group-hover:bottom-2"
        >
          Read article
        </Link>
      </Transition>
    </div>
  );
}
