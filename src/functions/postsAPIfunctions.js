import axios from "axios";

export const getPosts = async () => {
  try {
    let posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return posts.data;
  } catch (e) {
    console.log("error:", e);
    return [];
  }
};

export const getUsers = async () => {
  try {
    let users = await axios.get("https://jsonplaceholder.typicode.com/users");
    return users.data;
  } catch (e) {
    console.log("error:", e);
    return [];
  }
};

export const getComments = async () => {
  try {
    let comments = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    return comments.data;
  } catch (e) {
    console.log("error:", e);
    return [];
  }
};
