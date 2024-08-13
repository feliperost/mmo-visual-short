import Sidebar from "../components/sidebar"
import RightSidebar from "../components/rightSidebar"
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
    return (
      <>
        <div className="@apply flex w-[1024px] h-[768px] bg-[#2a2a2a] border-2 border-solid border-[#444]">
          <Sidebar/>
            <div className="@apply flex-1 overflow-y-auto p-5"> 
              <div className="promotional-text">
                <h2>Discover a world full of adventure in Deadwell!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, metus nec tincidunt placerat, risus arcu sollicitudin urna, nec pretium nisl nulla ac erat.</p>
                <p>Lore content for the game</p>
              </div>

              <Link href="/download">CLICK HERE TO DOWNLOAD!</Link>

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