import Sidebar from "../components/sidebar"
import RightSidebar from "../components/rightSidebar"


export default function About() {
    return (
      <>
        <div className="@apply flex w-[1024px] h-[768px] bg-[#2a2a2a] border-2 border-solid border-[#444]">
          <Sidebar/>
            <div className="@apply flex-1 overflow-y-auto p-5"> 
            <div className="@apply text-center mb-5">
                <h1>Deadwell Upcoming Events</h1>
            </div>
              Event Schedule
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi aliquid dolore consequuntur magnam sed excepturi necessitatibus eligendi reprehenderit repudiandae voluptatum tempora placeat explicabo, nemo quam nesciunt possimus facilis? Minima, earum!</p>
            </div>
          <RightSidebar/>
        </div>
      </>
    )

  }