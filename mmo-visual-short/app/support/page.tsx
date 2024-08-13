import Sidebar from "../components/sidebar"
import RightSidebar from "../components/rightSidebar"


export default function Support() {
    return (
      <>
        <div className="@apply flex w-[1024px] h-[768px] bg-[#2a2a2a] border-2 border-solid border-[#444]">
          <Sidebar/>
            <div className="@apply flex-1 overflow-y-auto p-5"> 
              Support
            </div>
          <RightSidebar/>
        </div>
      </>
    )

  }