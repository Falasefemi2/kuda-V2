import { CustomText, Footer, Hero, Messages, MoneyApp, Navbar } from '@/components'
import { Mulish } from 'next/font/google'

const mulish = Mulish({ subsets: ['latin'] })


const page = () => {
  return (
    <main className={`${mulish.className} overflow-hidden h-full w-full`}>
      <section>
        <Navbar />
      </section>
      <section className='max-w-[1180px] w-full pt-[40px] px-10 pb-[60px] container mx-auto mt-[65px]'>
        <Hero />
        <CustomText text='Save' para='Putting money away for the future is smart but it takes discipline - something humans don’t have in abundance. We’re using technology to solve that by automating saving. You set an amount to save and the Kuda app takes care of the rest, prompt interest payout included.' img='/amount.png' img2='/save.png' />
        <Messages />
        <MoneyApp />
        <Footer />
      </section>
    </main>
  )
}

export default page