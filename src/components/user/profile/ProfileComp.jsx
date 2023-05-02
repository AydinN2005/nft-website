import style from './ProfileComp.module.css'
import Image from "next/image";
import person1 from '/public/images/person1.png'
import createIcon from '@/components/profileComp/svg/create.svg'
import {useState} from "react";
import eth from '/public/svg/eth.svg'

export default function ProfileComp() {
    const [active, setActive] = useState(false);
    const id = '0x25D6352B0f5a509A8A15cad0e71A2b4Df6132E2e';
    const partId1 = id.slice(0, 5);
    const partId2 = id.slice(id.length - 5, id.length);
    const hiddenId = partId1 + '....' + partId2;
    return (
        <div className={`flex flex-col`}>
            <div className={`${style.profileBg}`}>
            </div>
            <div className={'custom-container'}>
                <div className={`flex flex-col gap-10 ${style.profileInfo}`}>
                    <div className={`${style.userImageBox} flex items-center justify-center relative`}>
                        <Image src={person1} className={`${style.userImage}`}
                               style={active ? {filter: 'brightness(0.2)'} : {}}/>
                        <Image src={createIcon} width={24} height={24}
                               className={`absolute ${active ? style.editIconActive : style.editIconDisable}`}/>
                        <input type="file" name="" id="" className={'absolute w-full h-full opacity-0 cursor-pointer'}
                               onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}/>
                    </div>
                    <div className={'flex items-center justify-between'}>
                        <div className={'flex flex-col gap-3'}>
                            <strong className={'text-xl font-bold'}>
                                username
                            </strong>
                            <span className={'text-sm font-normal flex items-center gap-2 cursor-pointer'}>
                                <Image src={eth} width={24} height={24}/>
                                {hiddenId}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
