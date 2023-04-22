import HomeHeader from "@/components/homePage/HomeHeader";
import HomeWallets from "@/components/homePage/HomeWallets";
import HomeDrops from "@/components/homePage/HomeDrops";

export default function HomeContainer() {
    return (
        <div>
            <HomeHeader/>
            <div className={'margin-top'}>
                <HomeWallets/>
            </div>
            <div className="margin-top">
                <HomeDrops />
            </div>
            <div className={'margin-top'}>

            </div>
        </div>
    )
}
