import Header  from '@/components/Header'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  return (
    <div>
        <div className=''>
          <video className='absolute z-0 w-full h-full object-cover blur-lg' src='/back.mp4' loop autoPlay muted></video>
        </div>
        <div className='relative'>
          <Header/>
            
            
        </div>

    </div>
  )
}
