
import React from "react";

export default async function ElecLayout({
                                           children,
                                       }: {
    children: React.ReactNode
}) {
    return (
        <div className="mx-auto w-full max-w-7xl">
            {children}
        </div>
    )
}