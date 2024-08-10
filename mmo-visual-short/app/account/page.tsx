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
  

export default function Account() {
  return (
    <>
      <Sidebar/>
      <div>
        My Account.
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>My Account</CardTitle>
                <CardDescription>Login to your created Deadwell account!</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Account</Label>
                    <Input id="name" placeholder="Account" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" placeholder="Password" />
                    </div>
                </div>
                </form>
            </CardContent>
            <CardFooter className="flex align-left">
                <Button>Login</Button>
            </CardFooter>
        </Card>
        <div>Create your account</div>
      </div>
      <RightSidebar/>
    </>
  )
}