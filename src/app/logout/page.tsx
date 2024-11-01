
import { Button } from "@/components/ui/button"
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components"




export default function LogoutPage() {
    return (
        <main className="h-dvh flex flex-col items-center gap-6 text-4xl p-4">
            <h1> Hyper Electronics Repair Services</h1>
            <Button asChild>
                <LogoutLink className={''}>Log out</LogoutLink>
            </Button>
        </main>
    )
}



