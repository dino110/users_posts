import axios from "axios";

export const getPosts = async () => {
  let posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return posts.data;
};

export const getUsers = async () => {
  let users = await axios.get("https://jsonplaceholder.typicode.com/users");
  return users.data;
};

export const getComments = async () => {
  let comments = await axios.get(
    "https://jsonplaceholder.typicode.com/comments"
  );
  return comments.data;
};
