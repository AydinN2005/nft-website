import {menuLinks} from "@/components/menu/data";
import Link from "next/link";
import style from './MenuLinks.module.css'
import {useRouter} from "next/router";

export default function MenuLinks() {
    const router = useRouter()
    return (
        <div className={'flex items-center gap-8'}>
            {
                menuLinks.map(item => {
                    return (
                        <Link href={item.route} >
                            <span className={`block w-full h-full text-lg font-bold ${style.link} gray-color ${router.pathname === item.route ? style.activeLink : null}`}>
                                {item.title}
                            </span>
                        </Link>
                    )
                })
            }
        </div>
    )
}
