import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button"

export default function SignUpPage() {
    return (
        <main className="h-dvh flex flex-col items-center gap-6 text-4xl p-4">
            <h1> Hyper Electronics Repair Services</h1>
            <Button asChild>
                <RegisterLink className={''}>Sign Up</RegisterLink>
            </Button>
        </main>
    )
}