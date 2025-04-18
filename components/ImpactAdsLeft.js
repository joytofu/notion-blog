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


    if (post.category === 'home-decor'){
        return (
            <Card className='sticky top-20'>
                <Link brand='tiny land' rel="sponsored" href="https://tinyland.pxf.io/c/5128239/1669277/19135" target="_blank" id="1669277">
                                <Image src="/images/tineland-768x768.png" border="0" alt="" width={0} height={0} layout='responsive' style={{ maxWidth: '100%', height: 'auto', paddingBottom: '25px' }}/>
                            </Link> 
            </Card>
            
        )
    }


    return (
        <Card className='sticky top-20'>
            <a rel="sponsored" href="https://sittercity.s4lle7.net/c/5128239/2071327/3017" target="_blank" id="2071327">
                <Image src="/images/sittercity-cuddles-320x1200.png" alt="sittercity" width={0} height={0} layout='responsive' style={{ maxWidth: '90%', height: 'auto', paddingBottom: '25px' }}/>
            </a>                           
        </Card>
    )

}

export default ImpactAdsLeft