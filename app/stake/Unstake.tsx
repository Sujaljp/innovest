import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { ethers } from "ethers";
import abi from "../../lib/Stake.json"


import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"







const Unstake = () => {

  const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3"
  const contractABI = abi.abi
  const stakedAmount = 300;
  const penalty = 50;
  const lockinPeriodLeft = 44;

  //test
  const withdraw = async () => {
    try {


      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const stake = new ethers.Contract(contractAddress, contractABI, signer);

        const valueInWei = ethers.utils.parseEther("60");

        const txn = await stake.withdraw();
        console.log('Mining...', txn.hash);

        await txn.wait();
        console.log('Mined', txn.hash);

      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="">
      <div className="text-4xl font-bold tracking-tight my-4">Returns</div>
      <section className="grid grid-cols-6 gap-4 ">
        <div className='col-span-4 py-4 '>

          <div className="governance-info">
            <div className="text-3xl font-semibold">💰 2023 Investing season </div>
            <div className="text-lg text-gray-500 my-4">The 2023 season ends with a total return of 20% overall <br />
              It was a great year where the NFT sector and Defi sector gave the highest returns. <br />
              you can reinvest for the next season as well.</div>
          </div>
        </div>
        <div className='col-span-2 h-fit p-10 bg-gradient-to-tl from-secondary to-black rounded-lg border-primary border-[1px] hover:from-10%'>
          <h3 className='text-2xl font-semibold my-auto pb-4'>Earnings</h3>
          <div className="flex justify-between items-center mt-6 text-gray-500 text-sm">
            <p className=''>Amount ready to unstake</p>
          </div>
          <div className="text-2xl flex gap-3 items-center mt-2 mb-6">
            <Avatar className='inline-block'>
              <AvatarImage src="https://cryptologos.cc/logos/versions/ethereum-eth-logo-colored.svg?v=026" />
            </Avatar>
            <p className='mr-auto'>Ethereum</p>
            <p>500</p>

          </div>
          <div className="flex justify-between items-center my-2 text-gray-500 text-sm">
            <p className=''>Principal amount</p>
            <p>450</p>
          </div>
          <div className="flex justify-between items-center my-2 text-gray-500 text-sm">
            <p className=''>DAO fees</p>
            <p>~ 50 eth</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              {/* <Button variant="outline">Edit Profile</Button> */}
              <Button className='mt-4 w-full font-bold' onClick={withdraw}>Unstake</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Confirm to unstake</DialogTitle>
                <DialogDescription>
                  Your are unstaking before the lockin period, you are liable for penalty!
                </DialogDescription>

              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className='text-red-500 text-sm'>
                  locking period: {lockinPeriodLeft} days left
                </div>
                <div className="flex justify-between text-xs">
                  <p>
                    TOTAL AMOUNT STAKED :
                  </p>
                  {stakedAmount} ETH
                </div>
                <div className="flex justify-between text-xs">
                  <p>
                    TOTAL PENALTY :
                  </p>
                  {penalty} ETH
                </div>
                <div className="flex justify-between text-xs">
                  <p>
                    TOTAL UNSTAKABLE AMOUNT:

                  </p>
                  {stakedAmount - penalty} ETH
                </div>

              </div>
              <DialogFooter>
                <Button className='w-full' type="submit">Unstake</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </div>

  )
}

export default Unstake