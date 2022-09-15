import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PostPage() {
  let params = useParams();
  const allPostDetail = useSelector((state) => state.posts.allPostsDetails);

  const [postDetials, setPostDetails] = useState({});

  useEffect(() => {
    let post = allPostDetail.find((post) => post.postId === +params.postId);
    setPostDetails(post);
  }, [allPostDetail]);

  return (
    <div className="w-11/12 sm:w-10/12 md:w-2/3 h-min mx-auto relative top-20 rounded-md flex flex-col gap-2 border-2 py-2">
      <div className="flex flex-col space-y-1 text-sm px-2">
        <p className="font-bold truncate underline text-center">
          {postDetials?.title}
        </p>
        <p className="h-min overflow-hidden text-ellipsis text-justify indent-8">
          {postDetials?.body}
        </p>
        <p className="text-xs">
          Author:
          <span className="font-bold ml-1">{postDetials?.username};</span>
          <span className="font-bold ml-1">{postDetials?.email}</span>
        </p>
      </div>
      <p>
        Comments: <span>({postDetials?.comments?.length})</span>
      </p>
      <div className="flex flex-col gap-2">
        {postDetials?.comments?.map((comment) => (
          <div className="border-t-2 flex flex-col gap-1 py-2" key={comment.id}>
            <p className="font-bold text-xs px-2">{comment?.email}</p>{" "}
            <p className="text-sm px-2">{comment?.body}</p>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}
