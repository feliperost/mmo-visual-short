"use client"; 

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Article { 
  news_id: number; 
  news_title: string;
  news_body: string;
  news_creator: string;
  news_date: string;
  news_link: string;
};

interface NewsData {
  news: Article[];
};

const NewsList = () => {
  const [news, setNews] = useState<Article[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch('data/deadwellTribune.json');
      const data: NewsData = await response.json(); 
      setNews(data.news);
    };

    fetchNews();
  }, []);

  return (
  <>
    <div>
      {news.map((article) => (
        <div key={article.news_id} className="p-4 border-b border-gray-300">
          <h2 className="text-2xl font-bold">{article.news_title}</h2>
          <p className="first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-100
  first-letter:mr-3 first-letter:float-left">{article.news_body}</p>
          <p className="text-sm text-gray-500 mt-1">Submitted by: {article.news_creator} on {article.news_date}</p>

        {/* reminder: work on the hover effect below */}
          <div className="w-full relative flex justify-between flex-wrap">
          <p className="text-lg m-2 group relative w-max">
          <Link className="" href={`http://localhost:3000/${article.news_link}`}>Read in full</Link>
          <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-stone-500 group-hover:w-full"></span>
          </p>
          </div>
          
        </div>
      ))}
    </div>
  </>
  );
};

export default NewsList;
