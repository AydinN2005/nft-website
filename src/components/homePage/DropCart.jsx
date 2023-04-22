import style from './DropCart.module.css'
import Image from "next/image";
import eth from '/public/svg/eth.svg'
import {useState} from "react";

export default function DropCart({cartData}) {
    const [active, setActive] = useState(false)
    return (
        <div className={`${style.cart} flex flex-col gap-4`} onMouseEnter={() => setActive(true)}
             onMouseLeave={() => setActive(false)}>
            <Image
                src={cartData.image}
                quality={100}
                style={active ? {height: '252px'} : {height: '300px'}}
                className={'rounded-2xl w-full'}
                objectFit="cover"
                alt={cartData.title}
                priority
            />
            <div className={'flex items-start w-full justify-between'}>
                <div className={'flex flex-col gap-1'}>
                    <strong className={'font-bold text-base'}>
                        {cartData.title}
                    </strong>
                    <span className={'gray-color text-xs font-normal'}>
                    {cartData.description}
                </span>
                </div>
                <div style={{fontSize: '20px'}} className={`${style.circleContainer} flex items-center gap-2`}>
                    <span className={style.circle}>
                    </span>
                    <span className={style.circle}>
                    </span>
                    <span className={style.circle}>
                    </span>
                </div>
            </div>
            <div className={'flex items-center justify-between'}>
                <span className={'text-base font-normal flex items-center gap-2 blue-text'}>
                    {cartData.price}
                    <span className={'capital-text text-base font-bold blue-text'}>
                        ETH
                    </span>
                </span>
                <Image src={eth} style={{width: '32px', height: '32px'}}/>
            </div>
            <button className={'overflow-hidden primary-btn capital-text'}
                    style={active ? {height: '48px', padding: '8px 16px'} : {height: '0', padding: '0'}}>
                add to cart
            </button>
        </div>
    )
}
