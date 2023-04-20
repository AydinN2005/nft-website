import style from './MenuSearch.module.css'

export default function MenuSearch() {
    return(
        <div className={`relative`}>
            <input type="text" name="" id="" placeholder={'search in website ...'} className={`${style.textInput}`}/>
        </div>
    )
}
