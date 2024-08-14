import Sidebar from "../components/sidebar"
import RightSidebar from "../components/rightSidebar"
import Link from "next/link"
import Image from "next/image"

export default function Download() {
    return (
      <>
        <div className="@apply flex w-[1024px] h-[768px] bg-[#2a2a2a] border-2 border-solid border-[#444]">
          <Sidebar/>
            <div className="@apply flex-1 overflow-y-auto p-5"> 
            <div className="@apply text-center mb-5">
                <h1>Download Deadwell</h1>
            </div>
              <h2>Experience an adventure like no other!</h2>
              
              {/* add a broken link here, or some effect */}
              <Link href={`/`}>CLICK HERE TO DOWNLOAD DEADWELL!</Link>

              <p>Text explaining something about the Download/Installation. Research on 00s download pages.</p>

              <div className="screenshots">
                <h2>Lore Screenshots</h2>
                {/* <Image src="screenshot1.jpg" alt="Screenshot 1"/>
                <Image src="screenshot2.jpg" alt="Screenshot 2"/> */}
              </div>
            
            </div>
          <RightSidebar/>
        </div>
      </>
    )

  }