import '@/styles/globals.css'
import Menu from "@/components/menu/Menu";
import FooterContainer from "@/components/footer/FooterContainer";
import {useState} from "react";
import MobileMenu from "@/components/menu/MobileMenu";
import ConnectToWallet from "@/components/connectToWallet/ConnectToWallet";

export default function App({Component, pageProps}) {
    const [active, setActive] = useState(false)
    const [showWallet, setShowWallet] = useState(false);
    const handleSetActive = () => {
        setActive(!active)
    }
    const menuIconClick = () => {
        setActive(!active)
        console.log('clicked')
    }
    const handleShowWallet = () => {
        setShowWallet(true)
    }
    const handleHideWallet = () => {
        setShowWallet(false)
    }
    return (
        <div className={'flex flex-col h-full'}>
            <Menu active={active} menuIcon={menuIconClick} handleShowWallet={handleShowWallet}/>
            <MobileMenu active={active} handleSetActive={() => handleSetActive()} handleShowWallet={handleShowWallet}/>
            <ConnectToWallet active={showWallet} handleHideWallet={handleHideWallet}/>
            <Component {...pageProps} />
            <FooterContainer/>
        </div>
    )
}
