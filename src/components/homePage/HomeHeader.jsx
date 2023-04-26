import style from './HomeHeader.module.css'
import ballon from '/public/images/ballon.png'
import pw from '/public/images/pw.png'
import arrow from '/public/svg/arrow.svg'
import Image from "next/image";

export default function HomeHeader() {
    return (
        <div className={'custom-container'}>
            <div className={'flex flex-col items-center gap-2'}>
                <strong className={`${style.homeHeaderTitle} capital-text text-center`}>
                    discover <Image src={ballon} className={`${style.headerImage}`}/> collect <br/> and sell rare <Image
                    src={pw} className={`${style.headerImage}`}/>
                </strong>
                <div className={'flex lg:flex-row flex-col-reverse items-center gap-3'}>
                    <div className={`${style.blueArrow}`}>
                        <Image src={arrow} style={{minWidth: '50px', minHeight: '50px'}}/>
                    </div>
                    <p className={'gray-color text-xs md:text-left text-center md:text-sm font-normal'}>
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate
                        the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum
                        may be used as a placeholder before final copy is available.
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate
                        the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum
                        may be used as a placeholder before final copy is available.
                    </p>
                    <strong className={`${style.homeHeaderTitle}`}>
                        NFTs
                    </strong>
                </div>
            </div>
        </div>
    )
}
