import Sidebar from "../components/sidebar"
import RightSidebar from "../components/rightSidebar"
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function Community() {
  return (
    <>
      <div className="@apply flex w-[1024px] h-[768px] bg-[#2a2a2a] border-2 border-solid border-[#444]">
        <Sidebar/>
          <div className="@apply flex-1 overflow-y-auto p-5">
              <div className="@apply text-center mb-5">
                  <h1>Deadwell Community Forum</h1>
                  {/* <div id="timer">Next effect in: 120s</div> */}
              </div>

{/* later, here we will apply a logic to pull posts from an simulated api - a json file */}
              <div className="@apply mb-5">
                  <h2>Highlighted Community Post</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, metus nec tincidunt placerat, risus arcu sollicitudin urna, nec pretium nisl nulla ac erat.</p>
                  <p>format around 5~6 posts orkut/reddit-style</p>
              </div>
              <div className="@apply mb-5">
                  <h2>Highlighted Community Post 2</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, metus nec tincidunt placerat, risus arcu sollicitudin urna, nec pretium nisl nulla ac erat.</p>
              </div>

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