import Button, { buttonClassName } from '@/components/Button'
import { cn } from '@/lib/utils'
import { ClerkLoaded, ClerkLoading, SignInButton } from '@clerk/nextjs'
import { Clerk } from '@clerk/nextjs/server'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function MeetingLoginPage() {
    return (
        <div className='mx-auto w-fit space-y-3'>
            <h1 className='text-center text-2xl font-bold'>Join meeting</h1>
            <ClerkLoaded>
                <SignInButton>
                </SignInButton>
                <Link href="?guest=true"
                    className={cn(buttonClassName, "w-44 bg-gray-400 hover:bg-gray-500")}>
                    Continue as guest
                </Link>
            </ClerkLoaded>
            <ClerkLoading>
                <Loader2 className='mx-auto animate-spin'/>
            </ClerkLoading>
        </div>
    )
}
