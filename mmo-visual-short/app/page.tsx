import Sidebar from "./components/sidebar";
import RightSidebar from "./components/rightSidebar";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
    <div className="@apply flex w-[1024px] h-[768px] bg-[#2a2a2a] border-2 border-solid border-[#444]">
      <Sidebar/>

        <div className="@apply flex-1 overflow-y-auto p-5">
          <div className="@apply text-center mb-5">
            <h1>Welcome to Deadwell</h1>
          </div>
          <div className="@apply mb-5">
            <h2>News Ticker</h2>
            {/* previously it was a marquee. looking for options */}
              <p>Stay tuned for more updates on Deadwell!          
              -    
              Maintenance Shutdown scheduled for September 6 2005.</p>  
          </div>
          <div className="news">
            <h2>Latest News</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, illo fuga iste sint perspiciatis asperiores, fugiat nam alias nobis deleniti cum reiciendis nulla ullam ut, exercitationem nisi odio ea maiores.</p>
            <Button>
              <Link href={`/news`}>Go to the Deadwell Tribune!</Link>
            </Button>
          </div>
          
          <div className="screenshots">
                <h2>Game Screenshots</h2>
                <p>2 or 3 images. short text promoting the game.</p>
                {/* <Image src="screenshot1.jpg" alt="Screenshot 1"/>
                <Image src="screenshot2.jpg" alt="Screenshot 2"/> */}
                <Button>
                  <Link href={`/about`}>Read more about Deadwell</Link>
                </Button>
            </div>
            <div className="community-posts">
                <h2>Highlighted Community Post</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, metus nec tincidunt placerat, risus arcu sollicitudin urna, nec pretium nisl nulla ac erat.</p>
                <Button>
                  <Link href={`/community`}>Go to the Deadwell Forums!</Link>
                </Button>
            </div>
          

        </div>
        
      <RightSidebar/>
    </div>
      
    </>
  );
}
