import React from "react";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Tickets',
}


export default function tickets() {
    return (
        <div className="mx-auto w-full max-w-7xl">
         <h1>tickets</h1>
        </div>
    )
}