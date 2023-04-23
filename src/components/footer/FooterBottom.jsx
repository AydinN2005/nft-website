import style from './FooterBottom.module.css'

export default function FooterBottom() {
    return (
        <div className={`flex items-center justify-between ${style.footerBottom}`}>
            <span className={'text-sm font-normal gray-color'}>
                all content of this website is protected for <span
                className={`text-white text-lg font-bold capital-text ${style.bigText}`}>nft-market</span>
            </span>
            <span className={'text-sm font-normal gray-color'}>
                designed by <span className={`text-lg font-bold text-white ${style.bigText}`}>AydinNorouzi</span>
            </span>
        </div>
    )
}
