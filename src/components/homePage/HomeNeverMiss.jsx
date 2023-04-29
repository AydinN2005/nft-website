import style from './HomeNeverMiss.module.css'

export default function HomeNeverMiss() {
    return(
        <div className={'custom-container'}>
            <div className={`${style.box}`}>
                <strong className={'text-xl md:text-5xl font-bold'}>
                    never miss a drop !
                </strong>
                <span className={'text-xs md:text-sm font-normal gray-color px-4'}>
                lorem ipsum is a test text for test your website ! lorem ipsum is a test text for test your website !
            </span>
                <div className={'flex md:flex-row justify-center flex-col items-center gap-8 w-full px-4'}>
                    <input type="text" name="" id="" placeholder={'enter your email ...'}
                           className={`${style.textInput}`}/>
                    <button className={'primary-btn'}>
                        submit
                    </button>
                </div>
            </div>
        </div>
    )
}
