import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if(action.type ==="DELETE_POST"){
    newPostList = currPostList.filter(
        (post) => post.id !== action.payload.postId
    )
}else if (action.type === "ADD_POST"){
    newPostList =[action.payload, ...currPostList];
}
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = (userId, image, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
        type: "ADD_POST",
        payload: {
            id: Date.now(),
            image: image,
            title: postTitle,
            body: postBody,
            reactions: reactions,
            userId: userId,
            tags: tags,
        },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
        type: "DELETE_POST",
        payload: {
            postId,
        },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;

const DEFAULT_POST_LIST = [
  {
    id: "1",
    image:"https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpfGVufDB8fDB8fHww",
    title: "Going To Mumbai",
    body: "Hi Friends, I am going to Mumbai for My Vacation",
    reactions: 2, //like & comment mate
    user_Id: "user9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1465311440653-ba9b1d9b0f5b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGlraW5nJTIwYWR2cm50dXJlfGVufDB8fDB8fHww",
    title: "Hiking Adventure",
    body: "Just completed an incredible hike in the Himalayas. The views were breathtaking!",
    reactions: 8,
    user_Id: "user23",
    tags: ["hiking", "Himalayas", "adventure"],
  },
  {
    id: "3",
    image: "https://plus.unsplash.com/premium_photo-1694475335011-c2d9e97b1714?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXhwbG9yaW5nJTIwRGVsaGl8ZW58MHx8MHx8fDA%3D",
    title: "Exploring Delhi",
    body: "Visited the Red Fort and Humayun's Tomb today. Delhi has so much history!",
    reactions: 3,
    user_Id: "user7",
    tags: ["Delhi", "history", "sightseeing"],
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1660410908797-6ee5032e3b6c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q3VsaW5hcnklMjBUb3VyJTIwaW4lMjBDaGVubmFpfGVufDB8fDB8fHww",
    title: "Culinary Tour in Chennai",
    body: "Tasted some delicious South Indian food in Chennai. The flavors are unforgettable!",
    reactions: 4,
    user_Id: "user12",
    tags: ["food", "Chennai", "cuisine"],
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1521182481757-0694c584d00a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFJhamFzdGhhbiUyMFJvYWQlMjBUcmlwfGVufDB8fDB8fHww",
    title: "Rajasthan Road Trip",
    body: "Driving through the deserts of Rajasthan, stopping at palaces and forts. It's like a fairy tale!",
    reactions: 7,
    user_Id: "user3",
    tags: ["road trip", "Rajasthan", "adventure"],
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8S2VyYWxhJTIwQmFja3dhdGVyc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Kerala Backwaters",
    body: "Spent a relaxing day on a houseboat in Kerala's backwaters. Pure bliss!",
    reactions: 6,
    user_Id: "user18",
    tags: ["Kerala", "backwaters", "relaxation"],
  },
  {
    id: "7",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmFuZ2Fsb3JlJTIwVGVjaCUyMFNjZW5lfGVufDB8fDB8fHww",
    title: "Bangalore Tech Scene",
    body: "Attended a tech conference in Bangalore. Met some brilliant minds!",
    reactions: 2,
    user_Id: "user11",
    tags: ["Bangalore", "technology", "networking"],
  },
  {
    id: "8",
    image: "https://plus.unsplash.com/premium_photo-1682871360779-e8f1f77123ad?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q3VsdHVyYWwlMjBOaWdodCUyMGluJTIwS29sa2F0YXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Cultural Night in Kolkata",
    body: "Went to a cultural festival in Kolkata. The music and dance performances were mesmerizing.",
    reactions: 5,
    user_Id: "user20",
    tags: ["Kolkata", "culture", "festival"],
  },
  {
    id: "9",
    image: "https://images.unsplash.com/photo-1606837731918-f006ef0ef3da?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFNob3BwaW5nJTIwaW4lMjBKYWlwdXJ8ZW58MHx8MHx8fDA%3D",
    title: "Shopping in Jaipur",
    body: "Bought some beautiful handicrafts and jewelry in Jaipur. The markets are vibrant!",
    reactions: 4,
    user_Id: "user5",
    tags: ["shopping", "Jaipur", "handicrafts"],
  },
  {
    id: "10",
    image: "https://plus.unsplash.com/premium_photo-1711255562040-ce0f983065d9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TW9uc29vbiUyMGluJTIwTXVubmFyfGVufDB8fDB8fHww",
    title: "Monsoon in Munnar",
    body: "Enjoying the monsoon season in Munnar. The tea plantations look even more beautiful in the rain.",
    reactions: 6,
    user_Id: "user14",
    tags: ["Munnar", "monsoon", "nature"],
  },
  {
    id: "11",
    image: "https://images.unsplash.com/photo-1540544660406-6a69dacb2804?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QmVhY2glMjBEYXklMjBpbiUyMEdvYXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Beach Day in Goa",
    body: "Hello everyone! Spent the whole day on the beautiful beaches of Goa. It was amazing!",
    reactions: 5,
    user_Id: "user15",
    tags: ["beach", "Goa", "sunny"],
  },
];
