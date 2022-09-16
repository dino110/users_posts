import axios from "axios";

export const getPosts = async () => {
  let posts = [];
  try {
    posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
  } catch (e) {
    console.log("error:", e);
  }
  return posts.data || [];
};

export const getUsers = async () => {
  let users = [];
  try {
    users = await axios.get("https://jsonplaceholder.typicode.com/users");
  } catch (e) {
    console.log("error:", e);
  }
  return users.data || [];
};

export const getComments = async () => {
  let comments = [];
  try {
    comments = await axios.get("https://jsonplaceholder.typicode.com/comments");
  } catch (e) {
    console.log("error:", e);
  }
  return comments.data || [];
};
