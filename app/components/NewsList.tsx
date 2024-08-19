"use client"; 

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Article { 
  news_id: number; 
  news_title: string;
  news_body: string;
  news_creator: string;
  news_date: string;
  news_link: string
};

interface NewsData {
  news: Article[];
};

const NewsList = () => {
  const [news, setNews] = useState<Article[]>([]);

  useEffect(() => {
    // using the useEffect hook to define the fetchPosts function, and then calling it.
    const fetchPosts = async () => {
      const response = await fetch('data/deadwellTribune.json');
      const data: NewsData = await response.json(); // Aqui garantimos que o JSON retornado corresponde à interface PostsData. estamos dizendo que data será tipada como PostsData.
      setNews(data.news); // Agora podemos acessar 'posts' sabendo que é um array de Post
    };

    fetchPosts();
  }, []);

  return (
  <>
    <div>
      {news.map((article) => (
        <div key={article.news_id} className="p-4 border-b border-gray-300">
          <h2 className="text-2xl font-bold">{article.news_title}</h2>
          <p className="text-gray-700 mt-2">{article.news_body}</p>
          <p className="text-sm text-gray-500 mt-1">Submitted by: {article.news_creator} on {article.news_date}</p>
          <Link href={`http://localhost:3000/${article.news_link}`}>Read in full</Link>
        </div>
      ))}
    </div>
  </>
  );
};

export default NewsList;
