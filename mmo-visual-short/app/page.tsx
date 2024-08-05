import Sidebar from "./components/sidebar";
import RightSidebar from "./components/rightSidebar";

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
          </div>
          <p>Homepage content</p>
        </div>
        
      <RightSidebar/>
    </div>
      
    </>
  );
}
