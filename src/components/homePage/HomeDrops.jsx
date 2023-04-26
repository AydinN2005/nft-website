import CustomTitle from "@/components/helper/others/CustomTitle";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {cartData, dropsCategory} from "@/components/homePage/data";
import style from './HomeDrops.module.css'
import {useState} from "react";
import DropCart from "@/components/homePage/DropCart";

export default function HomeDrops() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 10
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 7
        },
        tablet: {
            breakpoint: {max: 1024, min: 768},
            items: 5
        },
        mobile: {
            breakpoint: {max: 767, min: 0},
            items: 2
        }
    };
    const [id, setId] = useState(0)

    function handleClick(id) {
        setId(id)
        console.log(id)
    }

    return (
        <div className={'flex flex-col gap-10 custom-container'}>
            <CustomTitle desc={'hot nft drops'} title={'hot drops'}/>
            <div className={style.carouselContainer}>
                <Carousel responsive={responsive} draggable={true} itemClass={'flex justify-center px-4'}>
                    {
                        dropsCategory.map(item => {
                            return (
                                <div onClick={() => handleClick(item.id)}
                                     className={`${style.box} ${item.id === id ? style.activeBox : ''}`}
                                >
                                    {item.title}
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`}>
                {
                    cartData.map(item => {
                        return <DropCart key={item.id} cartData={item}/>
                    })
                }
            </div>
            <button className={'primary-vacant-btn w-max self-center'}>
                show all
            </button>
        </div>
    )
}
