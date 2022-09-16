import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SinglePost() {
  let params = useParams();
  const allPostDetail = useSelector((state) => state.posts.allPostsDetails);

  const [postDetials, setPostDetails] = useState({});

  useEffect(() => {
    setPostDetails(
      allPostDetail.find((post) => post.postId === +params.postId)
    );
  }, [allPostDetail]);

  return (
    <div className="w-10/12 lg:w-8/12 h-min mx-auto relative top-20 rounded-md flex flex-col gap-2 pt-2 pb-4">
      {postDetials ? (
        <>
          {" "}
          <div className="flex flex-col space-y-3 sm:space-y-5 text-sm pt-2 px-2">
            <p className="font-bold text-center">{postDetials?.title}</p>
            <div className="text-xs">
              <p>Author:</p>
              <p className="font-bold">
                {postDetials?.username}; {postDetials?.email}
              </p>
            </div>
            <p className="h-min overflow-hidden text-ellipsis text-justify indent-8">
              {postDetials?.body}
            </p>
            <p className="text-xs">
              Comments <span>({postDetials?.comments?.length || "NA"})</span>
            </p>
          </div>
          <div className="flex flex-col gap-2 -mt-1 border-b-2 ">
            {postDetials?.comments?.map((comment) => (
              <div
                className="border-t-2 flex flex-col gap-1 py-2"
                key={comment.id}
              >
                <p className="font-bold text-xs px-2">{comment?.email}</p>{" "}
                <p className="text-sm px-2">{comment?.body}</p>{" "}
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-center">Post with id {params.postId} not found. </p>
      )}
    </div>
  );
}
