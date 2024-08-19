"use client"; 

import { useState, useEffect } from 'react';
import { FC } from 'react';
import postsData from '../data/communityForum.json'

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

// Aqui, PostsData representa um objeto que tem uma propriedade posts, a qual é um array de Post. Portanto, PostsData é a tipagem para o objeto JSON inteiro.
interface PostsData {
  posts: Post[];
};

// old solution below, currently working on a more sophisticated way to simulate the json api
// const ForumPostList: FC = () => {
//   const { posts }: PostsData = postsData; 

// making sure the JSON file follows the Post type and rendering it below
const ForumPostList: FC = () => {
  const { posts }: PostsData = postsData; 

  return (
  <>
    <div>
      {posts.map((post) => (
        <div key={post.post_id} className="p-4 border-b border-gray-300">
          <h2 className="text-2xl font-bold">{post.post_title}</h2>
          <p className="text-gray-700 mt-2">{post.post_body}</p>
          <p className="text-sm text-gray-500 mt-1">Submitted by: {post.post_creator} on {post.post_date}</p>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">Comments</h3>
            {post.post_comments.map((comment) => (
              <div key={comment.comment_id} className="mt-2 pl-4 border-l border-gray-300">
                <p className="text-gray-700">{comment.comment_body}</p>
                <p className="text-sm text-gray-500 mt-1">By {comment.comment_creator} on {comment.comment_date}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </>
  );
};

export default ForumPostList;
