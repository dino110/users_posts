export const mergedAll = (allPosts, allUsers, allComments) => {
  let merged = [];
  let postAuthor = {};
  let postComments = [];
  for (let i = 0; i < allPosts.length; i++) {
    postAuthor = allUsers.find((user) => user.id === allPosts[i].userId);
    postComments = allComments.filter(
      (comment) => comment.postId === allPosts[i].id
    );
    merged.push({
      postId: allPosts[i].id,
      title: allPosts[i].title,
      body: allPosts[i].body,
      username: postAuthor?.username || "unknown",
      email: postAuthor?.email || "",
      comments: postComments,
    });
  }
  return merged;
};
