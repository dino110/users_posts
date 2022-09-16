export const mergedAll = (allPosts, allUsers, allComments) => {
  let merged = [];
  let userAutor = {};
  let postComments = [];
  for (let i = 0; i < allPosts.length; i++) {
    userAutor = allUsers.find((user) => user.id === allPosts[i].userId);
    postComments = allComments.filter(
      (comment) => comment.postId === allPosts[i].id
    );
    merged.push({
      postId: allPosts[i].id,
      title: allPosts[i].title,
      body: allPosts[i].body,
      username: userAutor?.username || "unknown",
      email: userAutor?.email || "",
      comments: postComments,
    });
  }
  return merged;
};
