import style from './ConnectToWallet.module.css'
import {wallets} from "@/components/homePage/data";
import Image from "next/image";
import meta from '/public/images/metamask.png'
import bitgo from '/public/images/bitgo.png'
import coin from '/public/images/coing.png'
import exodus from '/public/images/exodus.png'
import trezor from '/public/images/trezor.png'
import MenuIcon from "@/components/customSvg/MenuIcon";
import {useRouter} from "next/router";

export default function ConnectToWallet({active, handleHideWallet}) {
    const router = useRouter()
    const handleSelectWallet = () => {
        handleHideWallet();
        router.push('/')
        localStorage.setItem('user', 'loggedIn')
    }
    return (
        <div className={`overlay flex items-center justify-center`}
             style={active ? {zIndex: 998, opacity: 1} : {zIndex: -1, opacity: 0}}>
            <div className={`${style.wallets} flex flex-col gap-10 relative`}
                 style={active ? {top: 0} : {top: '-100vh'}}>
                <div className={`text-lg md:text-3xl font-bold capital-text flex items-center justify-between`}>
                    choose a wallet
                    <div onClick={handleHideWallet}>
                        <MenuIcon active={true}/>
                    </div>
                </div>
                <div className={'flex flex-col gap-6'}>
                    {
                        wallets.map(item => {
                            return (
                                <div onClick={() => handleSelectWallet()}
                                     className={`${style.wallet} flex items-center gap-6`}
                                     key={item.id}>
                                    {item.icon === 'meta' &&
                                        <Image src={meta} className={'rounded-full'}
                                               style={{width: '48px', height: '48px'}}/>}
                                    {item.icon === 'coin' &&
                                        <Image src={coin} className={'rounded-full'}
                                               style={{width: '48px', height: '48px'}}/>}
                                    {item.icon === 'bit' &&
                                        <Image src={bitgo} className={'rounded-full'}
                                               style={{width: '48px', height: '48px'}}/>}
                                    {item.icon === 'exodus' &&
                                        <Image src={exodus} className={'rounded-full'}
                                               style={{width: '48px', height: '48px'}}/>}
                                    {item.icon === 'trezor' &&
                                        <Image src={trezor} className={'rounded-full'}
                                               style={{width: '48px', height: '48px'}}/>}
                                    <span className={'text-sm md:text-lg font-bold'}>
                                        {item.title}
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
