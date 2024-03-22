import { SignIn, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return <header className='shadow'>
    <div className="max-w-5xl mx-auto h-14 flex items-center justify-between p-3 font-medium">
        <Link href="/">New meeting</Link>
        <SignedIn>
            <div className="flex items-center gap-5">
                <Link href="/meetings">Meetings</Link>
                <UserButton/>
            </div>
        </SignedIn>
        <SignedOut>
            <SignInButton/>
        </SignedOut>
    </div>
  </header>
}
