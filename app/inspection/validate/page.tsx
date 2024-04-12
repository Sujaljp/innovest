'use client'

import Header from '@/components/Header'
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
import ReactPlayer from 'react-player'





export default function Home() {

    const formData = {
        name: 'John Doe',
        sector: 'Tech',
        city: 'Lagos',
        entrprenuer_background: 'Tech Entrepreneur',
        total_outlet: '7',
        market_size: '10000000',
        previous_year_sales: '1000000',
        previous_month_sales: '20000',
        profit_in_percent: '18',
        ebitda: '22',
        gross_margin: '12',
        amount_for_equity: '3000000',
        percent_for_equity: '5',
        valuation: '600000000'
    }

    return (
        <div>
            <div className="absolute h-screen w-full ">
                <div className="relative px-16 py-10 h-2/6 bg-gradient-to-tl from-orange-300 to-orange-800">

                </div>
            </div>
            <div className="relative px-16 py-4 h-full w-full " >
                <div>
                    <Link href="/inspection" className="text-2xl flex gap-2 font-semibold tracking-tight my-6">
                        <i className="uil uil-arrow-circle-left"></i>Go Back
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className='h-96 p-10 bg-gradient-to-tl from-secondary to-black rounded-lg hover:from-10%'>
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=8CS7QTzg2FU'
                            controls
                            width='100%'
                            height='100%'
                        />
                    </div>
                    <div className=' h-fit p-10 bg-gradient-to-tl from-secondary to-black rounded-lg  hover:from-10%'>
                        <div className="text-3xl flex justify-between font-bold tracking-tight my-6">Project Details</div>
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
                        <h3 className='text-2xl font-semibold my-auto pb-4'>Earnings</h3>
                        <div className="flex justify-between items-center mt-6 text-gray-500 text-sm">
                            <p className=''>Amount ready to unstake</p>
                        </div>
                        <div className="text-2xl flex gap-3 items-center mt-2 mb-6">

                            <p className='mr-auto'>Ethereum</p>
                            <p>500</p>

                        </div>

                        {/* Displaying Collected Data */}
                        <div className="mt-8">
                            <div className="flex justify-between items-center mt-6 text-gray-500 text-sm">
                                <p className=''>Name</p>
                            </div>
                            <div className="text-2xl flex gap-3 items-center mt-2 mb-6">
                                <p className='mr-auto'>{formData.name || 'Dummy Name'}</p>
                            </div>
                            <div className="flex justify-between items-center mt-6 text-gray-500 text-sm">
                                <p className=''>Sector</p>
                            </div>
                            <div className="text-2xl flex gap-3 items-center mt-2 mb-6">
                                <p className='mr-auto'>{formData.sector || 'Dummy Sector'}</p>
                            </div>
                            <div className="flex justify-between items-center mt-6 text-gray-500 text-sm">
                                <p className=''>City</p>
                            </div>
                            <div className="text-2xl flex gap-3 items-center mt-2 mb-6">
                                <p className='mr-auto'>{formData.city || 'Dummy City'}</p>
                            </div>
                            <div className="flex justify-between items-center mt-6 text-gray-500 text-sm">
                                <p className=''>Entrepreneur Background</p>
                            </div>
                            <div className="text-2xl flex gap-3 items-center mt-2 mb-6">
                                <p className='mr-auto'>{formData.entrprenuer_background || 'Dummy Background'}</p>
                            </div>
                            <div className="flex justify-between items-center mt-6 text-gray-500 text-sm">

                                <p className=''>Total Outlet</p>
                            </div>

                            <div className="text-2xl flex gap-3 items-center mt-2 mb-6 ">
                                <p className='mr-auto'>{formData.total_outlet || 'Dummy Total Outlet'}</p>
                            </div>
                            <div className="flex justify-between items-center mt-6 text-gray-500 text-sm">
                                <p className=''>Market Size</p>
                            </div>
                            <div className="text-2xl flex gap-3 items-center mt-2 mb-6">
                                <p className='mr-auto'>{formData.market_size || 'Dummy Market Size'}</p>
                            </div>
                            <div className="flex justify-between items-center mt-6 text-gray-500 text-sm">
                                <p className=''>Previous Year Sales</p>
                            </div>
                            <div className="text-2xl flex gap-3 items-center mt-2 mb-6">
                                <p className='mr-auto'>{formData.previous_year_sales || 'Dummy Previous Year Sales'}</p>
                            </div>
                            <div className="flex justify-between items-center mt-6 text-gray-500 text-sm">
                                <p className=''>Previous Month Sales</p>
                            </div>
                            <div className="text-2xl flex gap-3 items-center mt-2 mb-6">
                                <p className='mr-auto'>{formData.previous_month_sales || 'Dummy Previous Month Sales'}</p>
                            </div>
                            <div className="flex justify-between items-center mt-6 text-gray-500 text-sm">
                                <p className=''>Profit in Percent</p>
                            </div>
                            <div className="text-2xl flex gap-3 items-center mt-2 mb-6">
                                <p className='mr-auto'>{formData.profit_in_percent || 'Dummy Profit in Percent'}</p>
                            </div>
                            <div className="flex justify-between items-center mt-6 text-gray-500 text-sm">
                                <p className=''>EBITDA</p>
                            </div>
                            <div className="text-2xl flex gap-3 items-center mt-2 mb-6">
                                <p className='mr-auto'>{formData.ebitda || 'Dummy EBITDA'}</p>
                            </div>
                            <div className="flex justify-between items-center mt-6 text-gray-500 text-sm">
                                <p className=''>Gross Margin</p>
                            </div>
                            <div className="text-2xl flex gap-3 items-center mt-2 mb-6">
                                <p className='mr-auto'>{formData.gross_margin || 'Dummy Gross Margin'}</p>
                            </div>
                            <div className="flex justify-between items-center mt-6 text-gray-500 text-sm">
                                <p className=''>Amount for Equity</p>
                            </div>
                            <div className="text-2xl flex gap-3 items-center mt-2 mb-6">
                                <p className='mr-auto'>{formData.amount_for_equity || 'Dummy Amount for Equity'}</p>
                            </div>
                            <div className="flex justify-between items-center mt-6 text-gray-500 text-sm">
                                <p className=''>Percent for Equity</p>
                            </div>
                            <div className="text-2xl flex gap-3 items-center mt-2 mb-6">
                                <p className='mr-auto'>{formData.percent_for_equity || 'Dummy Percent for Equity'}</p>
                            </div>
                            <div className="flex justify-between items-center mt-6 text-gray-500 text-sm">
                                <p className=''>Valuation</p>
                            </div>
                            <div className="text-2xl flex gap-3 items-center mt-2 mb-6">
                                <p className='mr-auto'>{formData.valuation || 'Dummy Valuation'}</p>
                            </div>
                            <div className="flex flex-col my-2 text-base">
                                <p className='flex justify-between'>Invest</p>
                            </div>
                            <Button className='mt-4 w-full font-bold'>Vote</Button>
                        </div>

                    </div>
                </div>
                <div className=' h-fit p-10 '>
                    <div className="text-3xl flex justify-between font-bold tracking-tight my-6">Validator Thought</div>
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
                    <Button className='mt-4 font-bold'>Submit</Button>
                </div>

            </div>
        </div>
    )
}
