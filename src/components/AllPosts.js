import PostComponent from "./PostComponent";
import axios from "axios";
import { useEffect, useState } from "react";

export default function AllPosts() {
  const [allPosts, setAllPosts] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [allComments, setAllComments] = useState([]);
  const [allPostsDetails, setAllPostsDetails] = useState([]);

  const getPosts = async () => {
    let posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return posts.data;
  };

  const getUsers = async () => {
    let users = await axios.get("https://jsonplaceholder.typicode.com/users");
    return users.data;
  };

  const getComments = async () => {
    let comments = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    return comments.data;
  };

  const setAllData = async () => {
    setAllPosts(await getPosts());
    setAllUsers(await getUsers());
    setAllComments(await getComments());
  };

  const mergeAllData = () => {
    let merged = [];
    let userAutor = {};
    let postComments = [];
    allPosts.forEach((post) => {
      userAutor = allUsers.find((user) => user.id === post.userId);
      postComments = allComments.filter(
        (comment) => comment.postId === post.id
      );
      merged.push({
        postId: post.id,
        title: post.title,
        body: post.body,
        username: userAutor.username,
        email: userAutor.email,
        comments: postComments,
      });
    });
    console.log("merged");
    setAllPostsDetails(merged);
  };

  useEffect(() => {
    setAllData();
    mergeAllData();
  }, []);

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
