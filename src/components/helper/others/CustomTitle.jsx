export default function CustomTitle({desc, title}) {
    return(
        <div className={'flex flex-col items-center'}>
            <span className={'purple-text text-center'}>
                {desc}
            </span>
            <strong className={'c-strong-text text-center'}>
                {title}
            </strong>
        </div>
    )
}
