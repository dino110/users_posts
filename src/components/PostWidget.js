import { Link } from "react-router-dom";

export default function PostComponent({ post }) {
  return (
    <Link to={`/post/${post.postId}`}>
      <div className="flex flex-col w-72 h-48 m-2 border-2 border-gray-500 rounded-md px-2 py-1 text-sm ">
        <div className="text-center line-clamp-6">
          <p className="font-bold ">{post?.title}</p>
          <p className="text-justify indent-4 mt-2">{post?.body}</p>
        </div>
        <div className="text-xxs flex flex-col text-justify mt-auto border-t-2 border-gray-500 pt-2">
          <p className="truncate">
            Author:
            <span className="font-bold ml-1">
              {post?.username}; {post?.email}
            </span>
          </p>
          <p>
            comments:
            <span className=" ml-1">({post?.comments?.length || "NA"})</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
