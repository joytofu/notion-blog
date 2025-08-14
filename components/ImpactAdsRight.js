import Card from "@/themes/magzine/components/Card";
import Image from "next/image";
import Link from "next/link";

/**
 * Impact广告插件
 * @param {*} props
 * @returns
 */
const ImpactAdsRight = (props) =>{
    const {post} = props
    if (!post || post.length === 0) {
        return <></>
    }

    if (post.category === 'Crafts' || post.category === 'DIY'){
        return (
            <Card className='top-20 sticky'>
                <Link brand='funwhole' rel="sponsored" href="https://funwhole.sjv.io/c/5128239/1503597/17189" target="_blank" id="1503597">
                    <Image src="/images/funwhole-station-1000x1000.jpeg" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
                </Link> 
                <Link brand='coohom' rel="sponsored" href="https://coohom.pxf.io/c/5128239/3090611/21254" target="_blank" id="3090611">
                    <Image src="/images/ALL-IN-ONE 3D DESIGN PLATFORM new.png" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
                </Link> 
                <Link brand='neutral curtains' rel="sponsored" href="https://readyhomelimited.pxf.io/09DQmJ" target="_blank">
                    <Image src="/images/netural curtains.jpg" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
                </Link> 
            </Card>
        )
    }

    if (post.category === 'interior-spaces' || post.category === 'exterior-design' || post.category === 'Architecture' || post.category === 'home-decor' || post.category === 'decor-styling')
    {
        return (
            <Card className='top-20 sticky'>
                <Link brand='coohom' rel="sponsored" href="https://coohom.pxf.io/c/5128239/3090611/21254" target="_blank" id="3090611">
                    <Image src="/images/ALL-IN-ONE 3D DESIGN PLATFORM new.png" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
                </Link> 
                <Link brand='neutral curtains' rel="sponsored" href="https://readyhomelimited.pxf.io/09DQmJ" target="_blank">
                    <Image src="/images/netural curtains.jpg" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
                </Link> 
                <Link brand='myfavoritecanvas' rel="sponsored" href="https://myfavoritecanvas.pxf.io/GK3XjV" target="_blank">
                    <Image src="/images/myfavoritecanvas.webp" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
                </Link>
            </Card>
        )
    }

    if (post.category === 'gardening')
    {
        return (
            <Card className='top-20 sticky'>
                <Link brand='beatbot' rel="sponsored" href="https://beatbot.pxf.io/c/5128239/2573202/24972" target="_blank" id="2573202">
                    <Image src="/images/beatbot.jpeg" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
                </Link> 
                <Link brand='Zendure' rel="sponsored" href="https://zenduredegmbh.sjv.io/09DYRR" target="_blank">
                    <Image src="/images/zendure.webp" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
                </Link>
                <Link brand='Firstbase' rel="sponsored" href="https://firstbase.pxf.io/c/5128239/1685566/19451" target="_blank" id="1685566">
                    <Image src="/images/firstbase.png" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
                </Link>
            </Card>
        )
    }


    if (post.category === 'Vehicles'){
        return (
            <Card className='top-20 sticky'>
                <Link brand= 'muc-off' rel="sponsored" href="https://mucoff.sjv.io/c/5128239/1795291/14325" target="_blank" id="1795291">
                    <Image src="/images/muc-off-700x700.jpeg" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
                </Link> 
                <Link brand='coohom' rel="sponsored" href="https://coohom.pxf.io/c/5128239/3090611/21254" target="_blank" id="3090611">
                    <Image src="/images/ALL-IN-ONE 3D DESIGN PLATFORM new.png" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
                </Link> 
                <Link brand='neutral curtains' rel="sponsored" href="https://readyhomelimited.pxf.io/09DQmJ" target="_blank">
                    <Image src="/images/netural curtains.jpg" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
                </Link> 
            </Card>
        )
    }

    if (post.category === 'Art'){
        return (
            <Card className='top-20 sticky'>
                <Link brand= 'anker make' rel="sponsored" href="https://ankermake.sjv.io/c/5128239/1690802/18025" target="_blank" id="1690802">
                    <Image src="/images/ankermake-1000x1000.jpeg" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
                </Link> 
                <Link brand='coohom' rel="sponsored" href="https://coohom.pxf.io/c/5128239/3090611/21254" target="_blank" id="3090611">
                    <Image src="/images/ALL-IN-ONE 3D DESIGN PLATFORM new.png" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
                </Link> 
                <Link brand='neutral curtains' rel="sponsored" href="https://readyhomelimited.pxf.io/09DQmJ" target="_blank">
                    <Image src="/images/netural curtains.jpg" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
                </Link> 
            </Card>
        )
    }

    if (post.category === 'Wedding'){
        return (
            <Card className='top-20 sticky'>
                <Link brand='Rosaholics' rel="sponsored" href="https://rosaholics.sjv.io/c/5128239/2935805/30772" target="_blank" id="2935805">
                    <Image src="/images/rosaholics-250x250.png" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
                </Link> 
                <Link brand='coohom' rel="sponsored" href="https://coohom.pxf.io/c/5128239/3090611/21254" target="_blank" id="3090611">
                    <Image src="/images/ALL-IN-ONE 3D DESIGN PLATFORM new.png" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
                </Link> 
                <Link brand='neutral curtains' rel="sponsored" href="https://readyhomelimited.pxf.io/09DQmJ" target="_blank">
                    <Image src="/images/netural curtains.jpg" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
                </Link> 
            </Card>
        )
    }

    return (
        <Card className='top-20 sticky'>
            <Link brand='Nexo' rel="sponsored" href="https://nexo.sjv.io/c/5128239/2218912/12544" target="_blank" id="2218912">
                <Image src="/images/nexo.png" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
            </Link>
            <Link brand='rest' rel="sponsored" href="https://restduvetaffiliateprogram.sjv.io/c/5128239/3100759/16395" target="_blank" id="3100759">
                <Image src="images/rest.png" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
            </Link> 
            <Link brand='CBD' rel="sponsored" href="https://fabcbd.sjv.io/c/5128239/2126848/26923" target="_blank" id="2126848">
                <Image src="/images/cbd-300x250.jpeg" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
            </Link> 
        </Card>
    )

}

export default ImpactAdsRight