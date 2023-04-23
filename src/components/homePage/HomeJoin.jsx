import style from './HomeJoiin.module.css'

export default function HomeJoin() {
    return(
        <div className={'custom-container'}>
            <div className={`${style.box}`}>
                <strong className={'text-4xl font-bold'}>
                    join our community
                </strong>
                <span className={'text-sm font-normal gray-color'}>
                    lorem ipsum is a text for test your website with that !
                    lorem ipsum is a text for test your website with that !
                </span>
                <button className={'primary-btn'}>
                    join our community
                </button>
            </div>
        </div>
    )
}
