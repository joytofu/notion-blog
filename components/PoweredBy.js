import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div className={`inline text-sm font-serif ${props.className || ''}`}>
      <a href='https://visualjournalcraft.com'>SAPKR</a>. All Rights Reserved.
    </div>
  )
}
