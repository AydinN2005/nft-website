import {wallets} from "@/components/homePage/data";
import Image from "next/image";
import meta from '/public/images/metamask.png'
import bitgo from '/public/images/bitgo.png'
import coin from '/public/images/coing.png'
import exodus from '/public/images/exodus.png'
import trezor from '/public/images/trezor.png'


export default function HomeWallets() {
    return (
        <div className={'custom-container overflow-x-auto'}>
            <div className={'flex items-center justify-between gap-6 min-w-max pb-4 pr-4'}>
                {
                    wallets.map(item => {
                        return (
                            <div className={'flex items-center gap-3'}>
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
                                <span className={'text-lg font-bold'}>
                                {item.title}
                            </span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
