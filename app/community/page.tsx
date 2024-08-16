import Sidebar from "../components/sidebar"
import RightSidebar from "../components/rightSidebar"
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import forum_posts from '../data/communityForum.json'


export default function Community() {
  // const forum_posts = fetch('../data/communityForum.json');
  interface Post { 
    post_id: number; 
    post_title: string;
    post_body: string;
    post_creator: string;
    post_date: string;
    post_comments: any;
  }
  return (
    <>
      <div className="@apply flex w-[1024px] h-[768px] bg-[#2a2a2a] border-2 border-solid border-[#444]">
        <Sidebar/>
          <div className="@apply flex-1 overflow-y-auto p-5">
              <div className="@apply text-center mb-5">
                  <h1>Deadwell Community Forum</h1>
              </div>

              {/* <div>
                {Object.keys(forum_posts).map((key, i) => (
                  <p key={i}>
                    <span>Key Name: {key}</span>
                    <span>Value: {forum_posts[key]}</span>
                  </p>
                ))}
              </div> */}
              {/* <ul className='@apply list-none w-full p-0'>
                {forum_posts.map(()=>(
                    <li key={index}>
                        <p>{item.title}</p>
                    </li>
                    ))}
              </ul> */}
                

{/* later, here we will apply a logic to pull posts from our simulated api, communityForum.json*/}
{/* read this to see if we can make this way: https://dev.to/vcpablo/js-mocking-a-rest-api-with-json-server-368 */}
              {/* <div className="@apply mb-5">
                  <h2>Highlighted Community Post</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, metus nec tincidunt placerat, risus arcu sollicitudin urna, nec pretium nisl nulla ac erat.</p>
                  <p>format around 5~6 posts orkut/reddit-style</p>
              </div>
              <div className="@apply mb-5">
                  <h2>Highlighted Community Post 2</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, metus nec tincidunt placerat, risus arcu sollicitudin urna, nec pretium nisl nulla ac erat.</p>
              </div>
              <div className="@apply mb-5">
                  <h2>Highlighted Community Post 3</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, metus nec tincidunt placerat, risus arcu sollicitudin urna, nec pretium nisl nulla ac erat.</p>
              </div>
              <div className="@apply mb-5">
                  <h2>Highlighted Community Post 4</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, metus nec tincidunt placerat, risus arcu sollicitudin urna, nec pretium nisl nulla ac erat. Nulla condimentum, metus nec tincidunt placerat, risus arcu sollicitudin urna, nec pretium nisl nulla ac erat.</p>
              </div>
              <div className="@apply mb-5">
                  <h2>Highlighted Community Post 5</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, metus nec tincidunt placerat, risus arcu sollicitudin urna, nec pretium nisl nulla ac erat. Nulla condimentum, metus nec tincidunt placerat, risus arcu sollicitudin urna, nec pretium nisl nulla ac erat.</p>
              </div>
              <div className="@apply mb-5">
                  <h2>Highlighted Community Post 6</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, metus nec tincidunt placerat, risus arcu sollicitudin urna, nec pretium nisl nulla ac erat. Nulla condimentum, metus nec tincidunt placerat, risus arcu sollicitudin urna, nec pretium nisl nulla ac erat.</p>
              </div> */}

              <p>And, at the end:</p>
              <Button>
                <Link href="/forum">Load more posts</Link>
              </Button>
          </div>
        <RightSidebar/>
      </div>
    </>
  )
}