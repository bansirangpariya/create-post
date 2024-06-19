import React, { useContext } from 'react'
import Post from './Post'
import { PostList as PostListData} from '../store/Post-List-Store'
import Styles from "./Postlist.module.css"

const PostList = () => {

const {postList} = useContext(PostListData);

  return (
    <div className={Styles.Postlist}>
     {postList.map((post) => (
     <Post key={post.id} post={post}/>
     ))};
    </div>
  )
}

export default PostList
