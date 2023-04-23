import style from './HomeNeverMiss.module.css'

export default function HomeNeverMiss() {
    return(
        <div className={`${style.box} custom-container`}>
            <strong className={'text-5xl font-bold'}>
                never miss a drop !
            </strong>
            <span className={'text-sm font-normal gray-color'}>
                lorem ipsum is a test text for test your website ! lorem ipsum is a test text for test your website !
            </span>
            <div className={'flex items-center gap-8'}>
                <input type="text" name="" id="" placeholder={'enter your email ...'} className={`${style.textInput}`}/>
                <button className={'primary-btn'}>
                    submit
                </button>
            </div>
        </div>
    )
}
