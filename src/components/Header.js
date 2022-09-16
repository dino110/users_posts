import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getPosts,
  getUsers,
  getComments,
} from "../functions/postsAPIfunctions";
import { useDispatch } from "react-redux";
import { updatePosts, updatePostsDetails } from "../features/posts/postsSlice";
import { updateUsers } from "../features/users/usersSlice";
import { mergedAll } from "../functions/postsFunctions";

export default function Header() {
  const dispatch = useDispatch();

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

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="w-full bg-blue-500 absolute ">
      <div className="w-10/12 lg:w-8/12 h-16 flex items-center mx-auto px-5">
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
