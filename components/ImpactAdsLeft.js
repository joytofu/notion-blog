import Card from "@/themes/magzine/components/Card";
import Image from "next/image";
import Link from "next/link";

/**
 * Impact广告插件
 * @param {*} props
 * @returns
 */
const ImpactAdsLeft = (props) =>{
    const {post} = props
    if (!post || post.length === 0) {
        return <></>
    }


    if (post.category === 'interior-spaces' || post.category === 'exterior-design' || post.category === 'Architecture' || post.category === 'home-decor' || post.category === 'decor-styling'){
        return (
            <Card className='top-20 sticky'>
                <Link brand='twopages' rel="sponsored" href="https://twopages.pxf.io/c/5128239/2921043/18544" target="_blank" id="2921043">
                    <Image src="/images/twopages.jpg" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
                </Link> 
                <Link brand='Origin PC' rel="sponsored" href="https://www.jdoqocy.com/click-101474223-14027651?url=https%3A%2F%2Fwww.originpc.com%2Fconfigurator%2Fneuron-3500x-rts-or-9010076%3FMID%3DGG_GOOGLESHOPPING_DT250&cjsku=DT250" target="_blank" id="1669277">
                    <Image src="/images/origin-pc.webp" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
                </Link> 
                
                <Link brand='neutral curtains' rel="sponsored" href="https://readyhomelimited.pxf.io/09DQmJ" target="_blank">
                    <Image src="/images/netural curtains2.jpg" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
                </Link> 
            </Card>
            
        )
    }

    if (post.category === 'Crafts' || post.category === 'DIY'){
        return (
            <Card className='top-20 sticky'>
                <Link brand='MONI JEWELRY' rel="sponsored" href="https://imintentltd.pxf.io/c/5128239/2110453/25692" target="_blank" id="2110453">
                    <Image src="/images/moni-1043x1564.jpeg" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
                </Link> 
                <Link brand='coohom' rel="sponsored" href="https://coohom.pxf.io/c/5128239/3090611/21254" target="_blank" id="3090611">
                    <Image src="/images/ALL-IN-ONE 3D DESIGN PLATFORM new.png" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
                </Link> 
                <Link brand='neutral curtains' rel="sponsored" href="https://readyhomelimited.pxf.io/09DQmJ" target="_blank">
                    <Image src="/images/netural curtains2.jpg" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
                </Link> 
            </Card>
        )
    }


    return (
        <Card className='top-20 sticky'>
            <Link brand='homestyler' rel="sponsored" href="https://homestyler.sjv.io/c/5128239/2044747/22993" target="_blank" id="2044747">
                <Image src="/images/homestyler.jpeg" alt="sittercity" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
            </Link>
            <Link brand='shopify' rel="sponsored" href="https://shopify.pxf.io/c/5128239/2944578/13624" target="_blank" id="2944578">
                <Image src="/images/shopify.png" alt="sittercity" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
            </Link>  
            <Link brand='neutral curtains' rel="sponsored" href="https://readyhomelimited.pxf.io/09DQmJ" target="_blank">
                <Image src="/images/netural curtains2.jpg" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
            </Link>                          
        </Card>
    )

}

export default ImpactAdsLeft