import Projects from '@/components/Projects'
import About from "@/components/About";
import ScrollToTop from "@/components/ScrollToTop";
import Head from 'next/head'

export default function Home() {
  return (
    <div className='flex flex-col items-center gap-y-6 scroll-m-6' id='top'>
      <Head>
        <meta name="google-site-verification" content="9KfTN60UutIfDgfF4fdhyP7LftxyqAqc4Snu0nVOyl0" />
      </Head>
      <ScrollToTop />
      <About/>
      <Projects />
    </div>
  )
}
