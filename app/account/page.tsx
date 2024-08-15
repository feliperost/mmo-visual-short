import Sidebar from "../components/sidebar"
import RightSidebar from "../components/rightSidebar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
  

export default function Account() {
  return (
    <>
      <div className="@apply flex w-[1024px] h-[768px] bg-[#2a2a2a] border-2 border-solid border-[#444]">
        <Sidebar/>
        <div className="@apply flex-1 overflow-y-auto p-5"> 
        <div className="@apply text-center mb-5">
                <h1>Your Deadwell Account</h1>
            </div>
          <Card className="w-[350px]">
              <CardHeader>
                  <CardTitle>My Account</CardTitle>
                  <CardDescription>Login to your Deadwell account!</CardDescription>
              </CardHeader>
              <CardContent>
                  <form>
                  <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Account</Label>
                      <input type="name" />
                      {/* <Input id="name" placeholder="Account" /> */}
                      </div>
                      <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="password">Password</Label>
                      <input type="password" />
                      {/* <Input id="password" placeholder="Password" /> */}
                      </div>
                  </div>
                  </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                  <Button>
                    <Link href="/">Login</Link>
                    {/* later we will have to validate here the correct login and password that the user will have to find in the site.   */}
                  </Button>
                  <Button variant="outline">Create Account</Button>
              </CardFooter>
          </Card>

        </div>
        <RightSidebar/>
      </div>
    </>
  )
}