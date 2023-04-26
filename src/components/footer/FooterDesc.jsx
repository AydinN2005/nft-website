import Image from "next/image";
import logo from "/public/images/logo.png";
import style from './FooterDesc.module.css'
import telegram from './svg/telegram.svg'
import whatsapp from './svg/whatsapp.svg'
import phone from './svg/phone.svg'
import instagram from './svg/instagram.svg'

export default function FooterDesc() {
    return (
        <div className={'flex flex-col md:items-start items-center  gap-4'}>
            <div className={'flex items-center gap-3'}>
                <Image style={{width: '80px', height: '80px', borderRadius: '50%'}} src={logo} alt={'logo'}/>
                <span className={'text-lg font-bold'}>
                        NFT
                    </span>
            </div>
            <p className={'text-sm font-normal gray-color md:text-left text-center'}>
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
                visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used
                as a placeholder before final copy is available.
            </p>
            <div className={'flex items-center gap-4'}>
                <div className={`${style.icon}`}>
                    <Image src={telegram} style={{width: '24px', height: '24px'}}/>
                </div>
                <div className={`${style.icon}`}>
                    <Image src={whatsapp} style={{width: '24px', height: '24px'}}/>
                </div>
                <div className={`${style.icon}`}>
                    <Image src={instagram} style={{width: '24px', height: '24px'}}/>
                </div>
                <div className={`${style.icon}`}>
                    <Image src={phone} style={{width: '24px', height: '24px'}}/>
                </div>
            </div>
        </div>
    )
}
