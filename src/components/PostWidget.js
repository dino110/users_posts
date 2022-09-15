import { Link } from "react-router-dom";

export default function PostComponent({ post }) {
  return (
    <Link to={`/post/${post.postId}`}>
      <div className="w-72 mx-2 my-2 border-2 border-gray-500 rounded-md px-2 py-1 text-sm flex flex-col gap-1">
        <div>
          <p className="font-bold underline text-center line-clamp-2 h-11">
            {post?.title}
          </p>
        </div>
        <div className=" ">
          <p className="text-justify indent-4 line-clamp-4 ">{post?.body}</p>
        </div>
        <div className="font-normal text-xxs flex flex-col text-justify mt-auto border-t-1 border-gray-500">
          <p className="truncate">
            Author:
            <span className="font-bold ml-1">{post?.username};</span>
            <span className="font-bold ml-1 ">{post?.email}</span>
          </p>

          <p>
            comments:
            <span className="font-bold ml-1">({post?.comments?.length})</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
