import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getPosts,
  getUsers,
  getComments,
} from "../functions/postsAPIfunctions";
import { useSelector, useDispatch } from "react-redux";
import { updatePosts, updatePostsDetails } from "../features/posts/postsSlice";
import { updateUsers } from "../features/users/usersSlice";
import { updateComments } from "../features/comments/commentsSlice";

export default function Header() {
  const dispatch = useDispatch();

  // const allPosts = useSelector((state) => state.posts.allPosts.value);
  //const allUsers = useSelector((state) => state.users.value);
  //const allComments = useSelector((state) => state.comments.value);
  /*const allPostsDetails = useSelector(
    (state) => state.posts.allPostsDetails.value
  );*/

  /* const [allPosts, setAllPosts] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [allComments, setAllComments] = useState([]);
  const [allPostsDetails, setAllPostsDetails] = useState([]);*/

  const getAllData = async () => {
    const allPosts = await getPosts();
    const allUsers = await getUsers();
    const allComments = await getComments();
    const allPostsDetails = mergedAll(allPosts, allUsers, allComments);
    dispatch(updatePosts(allPosts));
    dispatch(updateUsers(allUsers));
    dispatch(updatePosts(allComments));
    dispatch(updatePostsDetails(allPostsDetails));
  };

  const mergedAll = (allPosts, allUsers, allComments) => {
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
    return merged;
  };

  useEffect(() => {
    getAllData();
  }, []);
  /*
  useEffect(() => {
    mergedAll();
  }, [allComments]);
*/
  return (
    <div className="w-full bg-blue-500 absolute ">
      <div className="w-11/12 sm:w-10/12 md:w-2/3  h-16 flex items-center mx-auto px-2">
        <Link to="/posts/">
          <img src="/home.png" width="40" height="40" alt="home button" />
        </Link>

        <p className="text-2xl md:text-3xl font-semibold font-serif mx-auto">
          Users posts
        </p>
      </div>
    </div>
  );
}
