"use client"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from '@/components/ui/button'
import { useEffect, useState } from "react"


export function MainNav({  className,...props}: React.HTMLAttributes<HTMLElement>) {
  const [isConnect, setIsConnect]= useState(false)
  async function connectAccount(){
      const connectButton = document.querySelector(".connect-button")
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      })
      setIsConnect(true)
      const account = accounts[0]
      
      connectButton.innerHTML = account[0]+account[1]+account[2]+account[3]+"..."

  }
  useEffect(()=>{
    if(typeof window.ethereum !== "undefined"){
      console.log("Injected");
    const connectButton = document.querySelector(".connect-button")
    connectButton.addEventListener('click', ()=>{
      connectAccount();
    })


    
    }
  },[])
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6 w-full", className)}{...props}>
      <Link
        href="/"
        className="font-medium transition-colors text-primary-foreground text-3xl mr-auto"
      >
      <h1 className="mr-auto"></h1>
        Innovest
      </Link>
      <Link
        href="stake"
        className="text-sm font-medium text-primary-foreground transition-colors hover:text-primary ml-auto"
      >
        Invest with us
      </Link>
      <Link
        href="/"
        className="text-sm font-medium text-primary-foreground transition-colors hover:text-primary"
      >
        Get funded
      </Link>
      <Link
        href=""
        className="text-sm font-medium text-primary-foreground transition-colors hover:text-primary"
      >
        Participate
      </Link>
      <Link
        href=""
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Treasury
      </Link>
      <div className="connect-button">
        <Button variant={isConnect? "outline":""} >Connect</Button>
      </div>
      {/* <ModeToggle/> */}
    </nav>
  )
}