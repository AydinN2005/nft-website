import HomeHeader from "@/components/homePage/HomeHeader";
import HomeWallets from "@/components/homePage/HomeWallets";
import HomeDrops from "@/components/homePage/HomeDrops";
import HomeNeverMiss from "@/components/homePage/HomeNeverMiss";
import HomeNftRoadMap from "@/components/homePage/HomeNftRoadMap";
import HomeCreators from "@/components/homePage/HomeCreators";
import HomeJoin from "@/components/homePage/HomeJoin";

export default function HomeContainer() {
    return (
        <div>
            <HomeHeader/>
            <div className={'margin-top'}>
                <HomeWallets/>
            </div>
            <div className="margin-top">
                <HomeDrops/>
            </div>
            <div className={'margin-top'}>
                <HomeNeverMiss/>
            </div>
            <div className={'margin-top'}>
                <HomeNftRoadMap/>
            </div>
            <div className="margin-top">
                <HomeCreators/>
            </div>
            <div className="margin-top">
                <HomeJoin/>
            </div>
            <div className={'margin-top'}>

            </div>
        </div>
    )
}
