import React, { useContext, useRef } from "react";
import {PostList} from  "../store/Post-List-Store";

const Createpost = () => {

  const {addPost} = useContext(PostList);

 const userIdElement = useRef();
 const imageElement = useRef();
 const postTitleElement = useRef();
 const postBodyElement = useRef();
 const reactionsElement = useRef();
 const tagsElement = useRef();


 const handleSubmit = (event) => {
  event.preventDefault();
  const userId= userIdElement.current.value; 
  const image = imageElement.current.value; 
  const postTitle = postTitleElement.current.value;
  const postBody = postBodyElement.current.value;
  const reactions = reactionsElement.current.value; 
  const tags = tagsElement.current.value.split(" ");//value ne array ma convert karva  spliy by space

  userIdElement.current.value = "";
  postTitleElement.current.value = "";
  postBodyElement.current.value = "";
  reactionsElement.current.value = "";
  tagsElement.current.value = "";

  addPost(userId, image, postTitle, postBody, reactions, tags);
 }

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
      <label htmlFor="user Id" className="form-label">
         User Id
        </label>
        <input
          type="text"
          className="form-control"
          id="user Id"
          placeholder="Enter Your user Id here..."
          ref ={userIdElement}
        />
        <label htmlFor="img" className="form-label">
         Image
        </label>
        <input
          type="file"
          className="form-control"
          id="img"
          placeholder="Upload Your image"
          ref ={imageElement}
        />
        <label htmlFor="title" className="form-label">
         Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling Today... "
          ref ={postTitleElement}
        />
        <label htmlFor="body" className="form-label">
         Post Content
        </label>
        <textarea rows="4"
          type="text"
          className="form-control"
          id="body"
          placeholder="Tell us more about it "
          ref ={postBodyElement}
        />
        <label htmlFor="reactions" className="form-label">
        Number of Reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post "
          ref ={reactionsElement}
        />
         <label htmlFor="reactions" className="form-label">
         Enter your hashtag here
        </label>
        <input
          type="tags"
          className="form-control"
          id="reactions"
          placeholder="Please enter tags using space"
          ref ={tagsElement}
        />
      </div>
      <button type="submit" className="btn btn-primary">
       Post
      </button>
    </form>
  );
};

export default Createpost;
