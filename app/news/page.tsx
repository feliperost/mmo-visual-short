import Sidebar from "../components/sidebar"
import RightSidebar from "../components/rightSidebar"
import Link from "next/link"
import NewsList from "../components/NewsList"
import { Button } from "@/components/ui/button"

export default function About() {
    return (
      <>
        <div className="@apply flex w-[1024px] h-[768px] bg-[#2a2a2a] border-2 border-solid border-[#444]">
          <Sidebar/>
            <div className="@apply flex-1 overflow-y-auto p-5"> 

            <div className="@apply text-center mb-5">
                <h1>Dealwell Tribune - Your Daily Newspaper!</h1>
            </div>

            <div className="community-posts">
                <NewsList/>
                {/* <h2>Title of the article</h2>
                <p>by John Journalist - July 21st 2005</p>
                <p>Summary of this post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, metus nec tincidunt placerat, risus arcu sollicitudin urna, nec pretium nisl nulla ac erat.</p> 
                  <Link href="/">Read in full</Link>
                <p>format around 5 articles.</p> */}
            </div>

            <p>And, at the end:</p>
            <Button variant="test">
            <Link href="/forum">Deadwell Tribune News Archive</Link>
            </Button>

            </div>
          <RightSidebar/>
        </div>
      </>
    )

  }