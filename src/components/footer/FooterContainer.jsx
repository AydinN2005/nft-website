import FooterDesc from "@/components/footer/FooterDesc";
import FooterLinks from "@/components/footer/FooterLinks";
import FooterBottom from "@/components/footer/FooterBottom";

export default function FooterContainer() {
    return (
        <div className={'flex flex-col gap-10 custom-container'}>
            <div className={'flex items-start justify-between gap-10'}>
                <div className={'w-full'}>
                    <FooterDesc/>
                </div>
                <div className={'w-full flex justify-end'}>
                    <FooterLinks/>
                </div>
            </div>
            <FooterBottom/>
        </div>
    )
}