import Sidebar from "../components/sidebar"
import RightSidebar from "../components/rightSidebar"
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import ForumPostList from "../components/ForumPostList"



export default function Community() {
  return (
    <>
      <div className="@apply flex w-[1024px] h-[768px] bg-[#2a2a2a] border-2 border-solid border-[#444]">
        <Sidebar/>
          <div className="@apply flex-1 overflow-y-auto p-5">
              <div className="@apply text-center mb-5">
                  <h1>Deadwell Community Forum</h1>
              </div>
              {/* later, here we will apply a logic to pull posts from our simulated api, communityForum.json*/}
              {/* read this to see if we can make this way: https://dev.to/vcpablo/js-mocking-a-rest-api-with-json-server-368 */}
              <ForumPostList/>

              <p>And, at the end:</p>
              <Button>
                <Link href="/forum">Go to the Deadwell Forum!</Link>
              </Button>
          </div>
        <RightSidebar/>
      </div>
    </>
  )
}