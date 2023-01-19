import Button from '@/components/Button'
import cx from 'classnames'
import { tempUrl } from 'mockData'
import styles from '@/styles/index.module.scss'

export default function Home() {
  return (
    <div className={cx(styles.wrap, ' container')}>
      Hel adsf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdlkf jasdklfg
      jalsk;dg jakls;dfj alksdfj lak;sdjf laksdjglkasdnv awernv ioaswnf lak;sdjf
      klashjv aklsdfnv alks;djfg aklsdjfg lak;shnbv akl;s djfg akl;sdj falk;sdj
      vlkasdj vaklsdjg aklsdfj akls;djf akls;df jakls;dfj aklsdfj aklsdfj
      adkls;fj low
      <h1>h1 friends!</h1>
      <h2>h2 friends!</h2>
      <h3>h3 friends!</h3>
      <Button buttonText='Button' buttonUrl={tempUrl} small />
      asdfasdfasdfasdf asdf adsf asdf asdf adsf<div>asdfasdfadsf ads</div>
    </div>
  )
}
