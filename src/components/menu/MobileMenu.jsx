import Image from "next/image";
import logo from "../../../public/images/logo.png";
import style from './MobileMenu.module.css'
import MenuIcon from "@/components/customSvg/MenuIcon";
import {menuLinks} from "@/components/menu/data";
import Link from "next/link";
import {useRouter} from "next/router";
import MenuSearch from "@/components/menu/MenuSearch";
import {useLayoutEffect, useState} from "react";
import Loader from "@/components/helper/others/Loader";

export default function MobileMenu({active, handleSetActive, handleShowWallet}) {
    const router = useRouter()
    const [status, setStatus] = useState('');
    const handleClick = () => {
        handleSetActive();
        setTimeout(() => {
            handleShowWallet();
        }, 500)
    }
    useLayoutEffect(() => {
        setStatus(localStorage.getItem('user'))
    }, [])
    return (
        <div className={'overlay flex justify-end'}
             style={active ? {zIndex: 1002, opacity: 1} : {zIndex: -1, opacity: 0}}>
            <div className={`flex flex-col gap-8 ${style.mobileMenu} relative overflow-x-auto`}
                 style={active ? {right: 0} : {right: '-100vw'}}>
                <div className={'flex justify-between items-center'}>
                    <div className={'flex items-center gap-3'}>
                        <Image style={{width: '60px', height: '60px', borderRadius: '50%'}} src={logo} alt={'logo'}/>
                        <span className={'text-lg font-bold'}>
                        NFT
                    </span>
                    </div>
                    <div onClick={handleSetActive}>
                        <MenuIcon active={true}/>
                    </div>
                </div>
                <div className={'flex flex-col gap-6'}>
                    <div className={'w-full'}>
                        <MenuSearch/>
                    </div>
                    <strong className={'text-xl font-bold'}>
                        main links
                    </strong>
                    <div className={'flex flex-col gap-2'}>
                        {
                            menuLinks.map(item => {
                                return (
                                    <Link href={item.route}>
                            <span
                                className={`block w-full h-full text-lg font-bold ${style.link} gray-color ${router.pathname === item.route ? style.activeLink : null}`}>
                                {item.title}
                            </span>
                                    </Link>
                                )
                            })
                        }
                        <div className={'md:hidden'}>
                            {
                                status === '' ? <Loader/> :
                                    status === 'loggedIn' ? null :
                                        <button className={'primary-btn'} style={{borderRadius: '8px'}}
                                                onClick={() => handleClick()}>
                                            connect to wallet
                                        </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
