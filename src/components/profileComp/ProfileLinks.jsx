import style from './ProfileLinks.module.css'
import {profileLinks} from "@/components/profileComp/data";
import Link from "next/link";
import profileIcon from './svg/profile.svg'
import createIcon from './svg/create.svg'
import watchIcon from './svg/watch.svg'
import libraryIcon from './svg/library.svg'
import logoutIcon from './svg/logout.svg'
import Image from "next/image";
import {useRouter} from "next/router";

export default function ProfileLinks({active}) {
    const router = useRouter()
    const handleLogout = () => {
        localStorage.removeItem('user')
        router.push('/')
    }
    return (
        <div className={`${style.linksContainer} flex flex-col gap-0 overflow-hidden`}
             style={active ? {height: '290px'} : {height: 0}}>
            {
                profileLinks.map(item => {
                    return (
                        <Link href={item.route} key={item.id}
                              className={`flex items-center gap-2 py-4 px-4 block ${style.link}`}>
                            {
                                item.icon === 'profile' ? <Image src={profileIcon} width={24} height={24}/>
                                    : item.icon === 'create' ? <Image src={createIcon} width={24} height={24}/> :
                                        item.icon === 'watch' ? <Image src={watchIcon} width={24} height={24}/> :
                                            <Image src={libraryIcon} width={24} height={24}/>
                            }
                            <span className={'text-base font-normal'}>
                                {item.title}
                            </span>
                        </Link>
                    )
                })
            }
            <button onClick={handleLogout}
                    className={`flex items-center gap-2 pb-6 pt-4 px-4 text-sm font-normal ${style.logoutButton}`}>
                <Image src={logoutIcon} width={24} height={24}/>
                logout
            </button>
        </div>
    )
}
