"use client"; 

import { useState, useEffect } from 'react';
import Link from 'next/link';

// defining what a post and a comment are
interface Comment {
  comment_id: number;
  comment_creator: string;
  comment_body: string;
  comment_date: string;
}

interface Post { 
  post_id: number; 
  post_title: string;
  post_body: string;
  post_creator: string;
  post_date: string;
  post_comments: Comment[];
};

// Aqui, PostsData representa um objeto que tem uma propriedade posts, a qual é um array de Post. Portanto, PostsData é a tipagem para o objeto JSON inteiro que receberemos.
interface PostsData {
  posts: Post[];
};

// simulating an API with the data, and making sure the JSON file follows the Post type to render it below
// first it calls the useState hook, which allows the component to maintain and manage internal state. "posts" is the current state value (started as an empty array []). "setPosts" is the function used to update it with our data.
const ForumPostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // using the useEffect hook to define the fetchPosts function, and then calling it.
    const fetchPosts = async () => {
      const response = await fetch('data/communityForum.json');
      const data: PostsData = await response.json(); // Aqui garantimos que o JSON retornado corresponde à interface PostsData. estamos dizendo que data será tipada como PostsData.
      setPosts(data.posts); // Agora podemos acessar 'posts' sabendo que é um array de Post
    };

    fetchPosts();
  }, []);

  return (
  <>
    <div>
      {posts.map((post) => (
        <div key={post.post_id} className="p-4 border-b border-gray-300">
          <h2 className="text-2xl font-bold">{post.post_title}</h2>
          <p className="text-gray-700 mt-2">{post.post_body}</p>
          <p className="text-sm text-gray-500 mt-1">Submitted by: {post.post_creator} on {post.post_date}</p>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">Latest comments:</h3>
            {post.post_comments.map((comment) => (
              <div key={comment.comment_id} className="mt-2 pl-4 border-l border-gray-300">
                <p className="text-gray-700">{comment.comment_body}</p>
                <p className="text-sm text-gray-500 mt-1">By {comment.comment_creator} on {comment.comment_date}</p>
              </div>
            ))}

            <div className="w-full relative flex justify-between flex-wrap">
              <p className="text-lg m-2 group relative w-max">
              <Link className="" href="/forum">Read full post</Link>
              <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-stone-500 group-hover:w-full"></span>
              </p>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  </>
  );
};

export default ForumPostList;
