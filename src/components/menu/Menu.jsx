import logo from 'public/images/logo.png'
import Image from "next/image";
import style from './Menu.module.css'
import MenuLinks from "@/components/menu/MenuLinks";
import MenuSearch from "@/components/menu/MenuSearch";
import MenuIcon from "@/components/customSvg/MenuIcon";
import {useLayoutEffect, useState} from "react";
import Loader from "@/components/helper/others/Loader";
import UserProfile from "@/components/profileComp/UserProfile";

export default function Menu({active, menuIcon, handleShowWallet}) {
    const [status, setStatus] = useState('');
    useLayoutEffect(() => {
        setStatus(localStorage.getItem('user'))
    });


    return (
        <div className={`sticky top-0 ${style.menuContainer}`}>
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
                <div className={'flex items-center gap-6 md:gap-10'}>
                    <div className={'lg:block hidden'}>
                        <MenuSearch/>
                    </div>
                    {
                        status === '' ? <Loader/> :
                            status === 'loggedIn' ? <UserProfile/> :
                                <button className={'primary-btn md:block hidden'} onClick={handleShowWallet}>
                                    connect to wallet
                                </button>
                    }
                    <div className={`lg:hidden block`} onClick={menuIcon}>
                        <MenuIcon active={active}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
