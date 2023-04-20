import '@/styles/globals.css'
import Menu from "@/components/menu/Menu";

export default function App({ Component, pageProps }) {
  return (
      <div className={'flex flex-col h-full'}>
        <Menu />
        <Component {...pageProps} />
      </div>
  )
}
