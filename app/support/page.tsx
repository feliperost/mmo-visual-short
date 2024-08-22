import Sidebar from "../components/sidebar"
import RightSidebar from "../components/rightSidebar"
import Link from "next/link"
import { Button } from "@/components/ui/button"


export default function Support() {
    return (
      <>
        <div className="@apply flex w-[1024px] h-[768px] bg-[#2a2a2a] border-2 border-solid border-[#444]">
          <Sidebar/>
            <div className="@apply flex-1 overflow-y-auto p-5"> 
            <div className="@apply text-center mb-5">
                <h1>Deadwell Support</h1>
            </div>

            <div className="community-posts">
                <h2>Having trouble in Deadwell?</h2>
                <p>Feel free to send a message and our support team will get in touch with you as soon as possible!</p>
                <p>insert here: a form that, when submitted, return an error. One of the community posts should acknowledge this.</p>
                <div className="support-form">
                    Account name: <input type="text"/>
                    E-mail: <input type="email" name="" id=""/>
                    Your message: <input type="textarea" name="" id=""/>
                    <Button variant="secondary">
                      <Link href={`/void`}>Submit</Link>
                    </Button>
                </div>

            </div>
              
            </div>
          <RightSidebar/>
        </div>
      </>
    )

  }