import { FC } from 'react';
import postsData from '../data/communityForum.json'

interface Post { 
    post_id: number; 
    post_title: string;
    post_body: string;
    post_creator: string;
    post_date: string;
    post_comments: any;
  };

  interface PostsData {
    posts: Post[];
  };

// making sure the JSON file follows the Post type
    const forumPostList: FC = () => {
        const { posts }: PostsData = postsData; 

  return (
<>
    <div>
      {posts.map((post) => (
        <div key={post.post_id} className="p-4 border-b border-gray-300">
          <h2 className="text-2xl font-bold">{post.post_title}</h2>
          <p className="text-sm text-gray-500 mt-1">Submitted by: {post.post_creator}</p>
          <p className="text-sm text-gray-500 mt-1">{post.post_date}</p>
          <p className="text-gray-700 mt-2">{post.post_body}</p>
          <p>{JSON.stringify(post.post_comments[0])}</p>
        </div>
      ))}
    </div>
{/* 
trying to figure out how to display comments correctly */}
    {/* <div>
      {comments.map((comment) => (
        <div key={comment.comment_id} className="p-4 border-b border-gray-300">
          <h2 className="text-2xl font-bold">{comment.comment_title}</h2>
        </div>
      ))}
    </div> */}

    {/* <div>
    {post.post_comments.map((post_comment) => (
        <div>{post_comment.comment_id}</div>))}
    </div> */}
</>
    
  );
};

export default forumPostList;
