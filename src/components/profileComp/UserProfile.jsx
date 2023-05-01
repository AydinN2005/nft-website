import Image from 'next/image'
import person1 from '/public/images/person1.png'
import arrowBottom from '/public/svg/arrowBottom.svg'
import style from './UserProfile.module.css'
import {useState} from "react";
import ProfileLinks from "@/components/profileComp/ProfileLinks";

export default function UserProfile() {
    const [active, setActive] = useState(false);

    return (
        <div className={`flex items-center gap-3 relative ${style.profileBox}`} onMouseEnter={() => setActive(true)}
             onMouseLeave={() => setActive(false)}>
            <Image src={person1} className={`${style.userImage}`}/>
            <span className={'text-sm font-normal'}>
                username
            </span>
            <div className={`${active ? style.activeArrow : ''}`}>
                <Image src={arrowBottom} width={16} height={16}/>
            </div>
            <div className={'absolute top-12 mt-1 left-0 w-full'}>
                <ProfileLinks active={active}/>
            </div>
        </div>
    )
}
