import { CustomText, Footer, Hero, Messages, MoneyApp, Navbar } from '@/components'
import { Mulish } from 'next/font/google'

const mulish = Mulish({ subsets: ['latin'] })


const page = () => {
  return (
    <main className={`${mulish.className} overflow-hidden h-full w-full`}>
      <section><Navbar /></section>
      <section className='max-w-[1180px] w-full pt-[40px] px-10 pb-[60px] container mx-auto mt-[65px]'>
        <Hero />
        <CustomText />
        <Messages />
        <MoneyApp />
        <Footer />
      </section>
    </main>
  )
}

export default page