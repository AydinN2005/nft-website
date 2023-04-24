import style from './MenuIcon.module.css'
import {useState} from "react";

export default function MenuIcon({active}) {
    return (
        <div className={`${style.iconContainer}`}>
            <div className={'flex flex-col gap-2 items-end'}>
                <div className={`${style.line1} ${active ? style.activeLine1 : ''}`}/>
                <div className={`${style.line2} ${active ? style.activeLine2 : ''}`}/>
                <div className={`${style.line3} ${active ? style.activeLine3 : ''} `}/>
            </div>
        </div>
    )
}
