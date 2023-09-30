'use client'

import Header  from '@/components/Header'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button'
import buildings from "../../public/buildings.jpg"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link'





export default function Home() {

  return (
    <div>
      <div className="absolute h-screen w-screen ">
        <div className="relative px-16 py-10 h-2/6 bg-gradient-to-tl from-orange-300 to-orange-800">

        </div>
      </div>
      <div className="relative px-16 py-10 h-full " >
          <div className="grid grid-cols-4">
            <div>
              <Link href="/" className="text-2xl flex gap-2 font-semibold tracking-tight my-6">
              <i className="uil uil-arrow-circle-left"></i>
                Go Back
              </Link>
            </div>
            <div className='col-span-2 h-fit p-10 bg-gradient-to-tl from-secondary to-black rounded-lg  hover:from-10%'>
              <div className="text-3xl flex justify-between font-bold tracking-tight my-6">Project listing application form</div>
                    <h3 className='text-2xl font-semibold my-auto pb-4'>Earnings</h3>
                    <div className="flex justify-between items-center mt-6 text-gray-500 text-sm">
                        <p className=''>Amount ready to unstake</p>
                    </div>
                    <div className="text-2xl flex gap-3 items-center mt-2 mb-6">
                      
                        <p className='mr-auto'>Ethereum</p>
                        <p>500</p>

                    </div>
                    <div className="flex flex-col my-2 text-base">
                        <p className='flex justify-between'>Invest
                        </p>
                    </div>
                    
                    <Button className='mt-4 w-full font-bold'>Vote</Button>
            </div>
            <div className='flex justify-end my-6'>
              <Button variant={'ghost'} className='p-6'>
              <Link href="/" className="text-2xl flex gap-3 text-primary-foreground gap-2 font-semibold tracking-tight ">
              <i className="uil uil-newspaper"></i>
                Check status
              </Link>
              </Button>
            </div>
          </div>
    </div>
    </div>
  )
}
