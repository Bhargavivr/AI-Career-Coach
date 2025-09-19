"use client"
import React from "react";
import { SignedOut, SignedIn, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, LayoutDashboard, StarIcon, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { PenBox, GraduationCap } from "lucide-react";
const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
            <nav className="container mx-auto flex items-center justify-between">
                <Link href="/">
                    <Image src="/logo.png" alt="Sensai logo" width={100} height={100}
                        className="w-auto h-12 py-1 object-contain "
                     />
                </Link>
                
                <div className="flex items-center gap-3">
                <SignedIn>
                    <Link href="/dashboard">
                        <Button variant="outline">
                            <LayoutDashboard className="w-4 h-4" ></LayoutDashboard>
                            <span className="hidden md:block">Industrial Insights</span>
                        </Button>
                    </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button>
                                <StarIcon className="w-4 h-4" />
                                <span className="hidden md:block">Growth Tools</span>
                                <ChevronDown className="w-4 h-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link href={"/resume"} className="flex items-center gap-2">
                                <FileText className="h-4 w-4" />

                                <span> Build Resume</span>
                                </Link>
                            
                            </DropdownMenuItem>
                             <DropdownMenuItem><Link href={"/ai-cover-letter"} className="flex items-center gap-2">
                                <PenBox className="h-4 w-4" />
                                <span> Ai Cover Letter</span>
                                </Link></DropdownMenuItem>
                            <DropdownMenuItem><Link href={"/interview"} className="flex items-center gap-2">
                                <GraduationCap  className="h-4 w-4" />
                                <span> Interview Prep</span>
                                </Link></DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton>
                            <Button variant="outline">Sign In</Button>
                            </SignInButton>
                    </SignedOut>
                  
                        <UserButton  appearance={{
                            elements:{
                            avatarBox:"w-10 h-10",
                            UserButtonPopoverCard:"shadow-xl",
                            userPreviewMainIndentifier:"font-semibold",},
                        }}
                        afterSignOutUrl="/"/>
                 
                </div>
            </nav>
        </header>
    )
}

export default Header;