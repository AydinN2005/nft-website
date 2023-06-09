import FooterDesc from "@/components/footer/FooterDesc";
import FooterLinks from "@/components/footer/FooterLinks";
import FooterBottom from "@/components/footer/FooterBottom";

export default function FooterContainer() {
    return (
        <div className={'flex flex-col gap-10 custom-container'}
             style={{borderTop: '1px solid var(--primary-gray-color)'}}>
            <div className={'flex md:flex-row flex-col-reverse items-start justify-between gap-10 mt-4'}>
                <div className={'w-full'}>
                    <FooterDesc/>
                </div>
                <div className={'w-full flex justify-center md:justify-end'}>
                    <FooterLinks/>
                </div>
            </div>
            <FooterBottom/>
        </div>
    )
}
