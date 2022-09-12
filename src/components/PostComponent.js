export default function PostComponent({ post }) {
  return (
    <a href={`/post/${post.postId}`} rel="noreferrer">
      <div className="w-64 h-44 mx-2 my-2 border-2 border-gray-500 rounded-md  py-2">
        <div className="flex flex-col space-y-1 text-sm px-2">
          <p className="font-bold truncate underline">{post.title}</p>
          <p className="h-20 overflow-hidden text-ellipsis text-justify">
            {post.body}
          </p>
        </div>
        <div className="font-normal text-xs flex flex-col text-justify px-2 mt-2">
          <p>
            user:<span className="font-bold ml-1">{post.username}</span>
          </p>
          <p>
            email:
            <span className="font-bold ml-1">{post.email}</span>
          </p>
          <p>
            comments:
            <span className="font-bold ml-1">{post.comments.length}</span>
          </p>
        </div>
      </div>
    </a>
  );
}
