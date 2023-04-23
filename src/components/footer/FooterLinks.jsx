import style from './FooterLinks.module.css'

export default function FooterLinks() {
    const hartCode = [1, 2, 3, 4]
    return (
        <div className={'grid grid-cols-3 gap-14'}>
            <div className={'flex flex-col gap-6'}>
                <strong className={'text-lg font-bold'}>
                    main links
                </strong>
                <div className={'flex flex-col gap-3'}>
                    {
                        hartCode.map(item => {
                            return (
                                <span className={`text-sm font-normal ${style.link}`}>
                                    example
                                </span>
                            )
                        })
                    }
                </div>
            </div>
            <div className={'flex flex-col gap-6'}>
                <strong className={'text-lg font-bold'}>
                    main links
                </strong>
                <div className={'flex flex-col gap-3'}>
                    {
                        hartCode.map(item => {
                            return (
                                <span className={`text-sm font-normal ${style.link}`}>
                                    example
                                </span>
                            )
                        })
                    }
                </div>
            </div>
            <div className={'flex flex-col gap-6'}>
                <strong className={'text-lg font-bold'}>
                    main links
                </strong>
                <div className={'flex flex-col gap-3'}>
                    {
                        hartCode.map(item => {
                            return (
                                <span className={`text-sm font-normal ${style.link}`}>
                                    example
                                </span>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
