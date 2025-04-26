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
            <Card className='sticky top-20'>
                <Link brand='funwhole' rel="sponsored" href="https://funwhole.sjv.io/c/5128239/1503597/17189" target="_blank" id="1503597">
                    <Image src="/images/funwhole-station-1000x1000.jpeg" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
                </Link> 
            </Card>
        )
    }

    if (post.category === 'home-decor' || post.category === 'Architecture'){
        return (
            <Card className='sticky top-20'>
                <Link brand='home styler' rel="sponsored" href="https://homestyler.sjv.io/c/5128239/2044747/22993" target="_blank" id="2044747">
                    <Image src="/images/Homestyler-336x280.jpeg" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
                </Link> 
                <Link brand='twopages' rel="sponsored" href="https://twopages.pxf.io/c/5128239/2921043/18544" target="_blank" id="2921043">
                    <Image src="/images/twopages-1365x2048.jpeg" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
                </Link> 
            </Card>
            
        )
    }

    if (post.category === 'Vehicles'){
        return (
            <Card className='sticky top-20'>
                <Link brand= 'muc-off' rel="sponsored" href="https://mucoff.sjv.io/c/5128239/1795291/14325" target="_blank" id="1795291">
                    <Image src="/images/muc-off-700x700.jpeg" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
                </Link> 
            </Card>
        )
    }

    if (post.category === 'Art'){
        return (
            <Card className='sticky top-20'>
                <Link brand= 'anker make' rel="sponsored" href="https://ankermake.sjv.io/c/5128239/1690802/18025" target="_blank" id="1690802">
                    <Image src="/images/ankermake-1000x1000.jpeg" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
                </Link> 
            </Card>
        )
    }

    if (post.category === 'Gardening'){
        return (
            <Card className='sticky top-20'>
                <Link brand='Rosaholics' rel="sponsored" href="https://rosaholics.sjv.io/c/5128239/2935805/30772" target="_blank" id="2935805">
                    <Image src="/images/rosaholics-250x250.png" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
                </Link> 
            </Card>
        )
    }

    return (
        <Card className='sticky top-20'>
            <Link brand='puzzle.io' rel="sponsored" href="https://puzzleio.pxf.io/c/5128239/2057134/25342" target="_blank" id="2057134">
                <Image src="/images/puzzle.io-1080x1080.png" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
            </Link> 
            <Link brand='CBD' rel="sponsored" href="https://fabcbd.sjv.io/c/5128239/2126848/26923" target="_blank" id="2126848">
                <Image src="/images/cbd-300x250.jpeg" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
            </Link> 
        </Card>
    )

}

export default ImpactAdsRight