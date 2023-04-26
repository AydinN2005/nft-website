import CustomTitle from "@/components/helper/others/CustomTitle";
import style from './HomeNftRoadMap.module.css'
import {roadMap} from "@/components/homePage/data";
import Image from "next/image";

export default function HomeNftRoadMap() {
    return (
        <div className={'custom-container'}>
            <CustomTitle title={'create and sell your Nfts !'} desc={'nft road map for better performance'}/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {
                    roadMap.map(item => {
                        return (
                            <div className={`${style.roadBox}`}>
                                <Image src={item.image} style={{width: '88px', height: '88px', borderRadius: '50%'}}/>
                                <strong className={'text-3xl font-bold'}>
                                    {item.title}
                                </strong>
                                <p className={'text-sm font-normal gray-color text-center'}>
                                    {item.desc}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
            <div className={'flex md:flex-row flex-col items-center gap-6 justify-center mt-10'}>
                <button className={'primary-btn'}>
                    create artwork
                </button>
                <button className={'primary-vacant-btn'}>
                    show all artworks
                </button>
            </div>
        </div>
    )
}
