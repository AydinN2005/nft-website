import logo from 'public/images/logo.png'
import Image from "next/image";
import style from './Menu.module.css'
import MenuLinks from "@/components/menu/MenuLinks";
import MenuSearch from "@/components/menu/MenuSearch";
import MenuIcon from "@/components/customSvg/MenuIcon";
import {useState} from "react";
import MobileMenu from "@/components/menu/MobileMenu";

export default function Menu() {
    const [active, setActive] = useState(false)
    const handleSetActive = () => {
        setActive(!active)
    }
    return (
        <>
            <div className={'custom-container flex items-center justify-between'}>
                <div className={'flex items-center gap-3'}>
                    <Image className={`${style.logoImg}`} src={logo} alt={'logo'}/>
                    <span className={'text-lg font-bold'}>
                        NFT
                    </span>
                </div>
                <div className={'lg:block hidden'}>
                    <MenuLinks/>
                </div>
                <div className={'flex items-center gap-10'}>
                    <div className={'lg:block hidden'}>
                        <MenuSearch/>
                    </div>
                    <button className={'primary-btn md:block hidden'}>
                        connect to wallet
                    </button>
                    <div className={`lg:hidden block`} onClick={() => setActive(!active)}>
                        <MenuIcon active={active}/>
                    </div>
                    <MobileMenu active={active} handleSetActive={handleSetActive}/>
                </div>
            </div>
        </>
    )
}
