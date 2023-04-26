import style from './FooterBottom.module.css'

export default function FooterBottom() {
    return (
        <div className={`flex items-center md:flex-row flex-col gap-4 justify-between ${style.footerBottom}`}>
            <span className={'text-xs md:text-sm font-normal gray-color'}>
                all content of this website is protected for <span
                className={`text-white text-sm md:text-lg font-bold capital-text ${style.bigText}`}>nft-market</span>
            </span>
            <span className={'text-xs md:text-sm font-normal gray-color'}>
                designed by <span className={`text-sm md:text-lg font-bold text-white ${style.bigText}`}>AydinNorouzi</span>
            </span>
        </div>
    )
}
