import logo from 'public/images/logo.png'
import Image from "next/image";
import style from './Menu.module.css'
import MenuLinks from "@/components/menu/MenuLinks";
import MenuSearch from "@/components/menu/MenuSearch";
export default function Menu() {
    return(
        <>
            <div className={'custom-container flex items-center justify-between'}>
                <div className={'flex items-center gap-3'}>
                    <Image className={`${style.logoImg}`} src={logo} alt={'logo'}/>
                    <span className={'text-lg font-bold'}>
                        NFT
                    </span>
                </div>
                <MenuLinks />
                <div className={'flex items-center gap-10'}>
                    <MenuSearch />
                    <button className={'primary-btn'}>
                        connect to wallet
                    </button>
                </div>
            </div>
        </>
    )
}
