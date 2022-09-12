import PostComponent from "./PostComponent";
import { useEffect, useState } from "react";
import {
  getPosts,
  getUsers,
  getComments,
} from "../functions/postsAPIfunctions";

export default function AllPosts() {
  const [allPosts, setAllPosts] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [allComments, setAllComments] = useState([]);
  const [allPostsDetails, setAllPostsDetails] = useState([]);

  const getAllData = async () => {
    setAllPosts(await getPosts());
    setAllUsers(await getUsers());
    setAllComments(await getComments());
  };

  const mergedAll = () => {
    let merged = [];
    let userAutor = {};
    let postComments = [];
    for (let i = 0; i < allPosts.length; i++) {
      userAutor = allUsers.find((user) => user.id === allPosts[i].userId);
      postComments = allComments.filter(
        (comment) => comment.postId === allPosts[i].id
      );
      //console.log(postComments.length);
      merged.push({
        postId: allPosts[i].id,
        title: allPosts[i].title,
        body: allPosts[i].body,
        username: userAutor?.username || "",
        email: userAutor?.email || "",
        comments: postComments,
      });
    }
    setAllPostsDetails(merged);
  };

  useEffect(() => {
    getAllData();
  }, []);

  useEffect(() => {
    mergedAll();
  }, [allComments]);

  return (
    <div className="w-11/12 border-2 border-black h-full mx-auto relative top-20">
      <p>All posts:</p>
      <div className="flex flex-wrap justify-center">
        {allPostsDetails.map((post) => (
          <PostComponent key={post.postId} post={post} />
        ))}
      </div>
    </div>
  );
}
