import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PostWidget from "./PostWidget";
import SearchBar from "./SearchBar";

export default function AllPosts() {
  const allPostDetailStore = useSelector(
    (state) => state.posts.allPostsDetails
  );
  const [searchInput, setSearchInput] = useState("");
  const [allPostsDetails, setAllPostsDetails] = useState([]);
  const [searchBy, setSearchby] = useState("title");

  const handleInputChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleSelectChange = (e) => {
    e.preventDefault();
    setSearchby(e.target.value);
  };

  useEffect(() => {
    setAllPostsDetails(allPostDetailStore);
  }, [allPostDetailStore]);

  useEffect(() => {
    if (searchInput.length > 0) {
      let regex = new RegExp(`^${searchInput}`, "i");
      setAllPostsDetails(
        allPostDetailStore.filter((posts) => {
          return posts[searchBy].match(regex);
        })
      );
    } else {
      setAllPostsDetails(allPostDetailStore);
    }
  }, [searchInput]);

  return (
    <div className="w-11/12 sm:w-10/12 md:w-2/3 border-2 border-black h-full mx-auto relative top-20">
      <p className="font-semibold text-2xl">Posts</p>
      <SearchBar
        searchInput={searchInput}
        handleInputChange={handleInputChange}
        handleSelectChange={handleSelectChange}
      />
      <div className="flex flex-wrap justify-center">
        {allPostsDetails.map((post) => (
          <PostWidget key={post.postId} post={post} />
        ))}
      </div>
    </div>
  );
}

/*
 

         

*/
