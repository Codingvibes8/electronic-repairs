import { HomeIcon, File, UsersRound, LogOut,LogIn } from 'lucide-react';
import Link from 'next/link';
import { LogoutLink,LoginLink } from '@kinde-oss/kinde-auth-nextjs/components';

import { Button } from '@/components/ui/button';
import { NavButton } from '@/components/NavButton';
import { ModeToggle } from '@/components/ModeToggle';


export default function Header() {
    return (
        <header className="animate-slide bg-red-700 h-12 p-2 border-b sticky top-0 z-20">
            <div className="flex h-8 items-center justify-between w-full">
                <div className="flex items-center gap-2">
                    <NavButton href="/" label="Home" icon={HomeIcon} />
                    <Link href="/" className="flex justify-center items-center gap-2 ml-0" title="Home">
                        <h1 className="hidden sm:block text-xl font-bold m-0 mt-1 text-yellow-400">
                            Hyper Electronics Services
                        </h1>
                    </Link>
                </div>
                <div className="flex items-center">
                    <NavButton href="/tickets" label="Tickets" icon={File} />
                    <NavButton href="/customers" label="Customers" icon={UsersRound} />
                    <ModeToggle/>

                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label="SignIn"
                        title="SignIn"
                        className="rounded-full"
                        asChild
                    >
                        <LoginLink>
                            <LogIn />
                        </LoginLink>
                    </Button>


                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label="LogOut"
                        title="LogOut"
                        className="rounded-full"
                        asChild
                    >
                        <LogoutLink>
                            <LogOut />
                        </LogoutLink>
                    </Button>



                </div>
            </div>
        </header>
    )
}