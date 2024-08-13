import Sidebar from "../components/sidebar"
import RightSidebar from "../components/rightSidebar"
import Link from 'next/link';

export default function Community() {
  return (
    <>
      <div className="@apply flex w-[1024px] h-[768px] bg-[#2a2a2a] border-2 border-solid border-[#444]">
        <Sidebar/>
          <div className="@apply flex-1 overflow-y-auto p-5">
              <div className="@apply text-center mb-5">
                  <h1>Deadwell Community Forum</h1>
              </div>

              <div className="@apply mb-5">
                  <h2>Our Community Forum is closed due to a scheduled maintenance. Sorry!</h2>

                  <Link href={`/`}>Return to Homepage</Link>
              </div>

          </div>
        <RightSidebar/>
      </div>
    </>
  )
}