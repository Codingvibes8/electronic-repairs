import React from "react";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Home',
}
export default function home() {
    return (
        <div className="mx-auto w-full h-screen max-w-7xl">
            <h1 className={'text-black dark:text-white'}>welcome home</h1>
        </div>
    )
}