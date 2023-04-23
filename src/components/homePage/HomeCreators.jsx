import style from './HomeCreators.module.css'
import {creators} from "@/components/homePage/data";
import CustomTitle from "@/components/helper/others/CustomTitle";
import Image from "next/image";
import eth from '/public/svg/eth.svg'

export default function HomeCreators() {
    return (
        <div className={'custom-container'}>
            <CustomTitle title={'top creators in this week !'} desc={'top creators in our team'}/>
            <div className={'grid grid-cols-4 gap-8 mt-10'}>
                {
                    creators.map(item => {
                        return (
                            <div className={`${style.box}`} key={item.id}>
                                <Image src={item.image} style={{width: '48px', height: '48px'}}
                                       className={'rounded-lg'}/>
                                <div className={'flex flex-col gap-2'}>
                                    <strong className={'text-base font-bold'}>
                                        {item.userName}
                                    </strong>
                                    <span className={'flex items-center gap-2 text-xs gray-color'}>
                                        <Image src={eth} style={{width: '24px', height: '24px', borderRadius: '50%'}}/>
                                        {item.fund}
                                    </span>
                                </div>
                                <span className={'text-xs font-normal gray-color'}>
                                    {item.status}
                                </span>
                            </div>
                        )
                    })
                }
            </div>
            <button className="primary-vacant-btn mt-10 mx-auto block">
                show all
            </button>
        </div>
    )
}
