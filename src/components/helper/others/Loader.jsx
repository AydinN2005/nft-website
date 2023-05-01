import style from './Loader.module.css'

export default function Loader() {
    return (
        <div className={`${style.ldsEllipsis}`}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
