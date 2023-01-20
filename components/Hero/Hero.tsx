import { useEffect, useState, useRef } from 'react'
import cx from 'classnames'
import TextBlock from '@/components/TextBlock'
import { GraphicCircle, GraphicLargeCircle, PlayVideo } from '@/components/Svg'
import styles from './Hero.module.scss'

type Text = {
  header: string
  title: string
  body: string
  buttonText: string
  buttonUrl: string
}

type Props = {
  text: Text
  video: string[]
}

const Hero: React.FC<Props> = ({ text, video }) => {
  const [curSlide, setCurSlide] = useState(0)
  const [showPlay, setShowPlay] = useState(true)
  const videoRefs = [
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
  ]
  const intervalRef = useRef<ReturnType<typeof setInterval>>()

  const slideNames = ['01', '02', '03']

  // Create interval to move to next slide every 5 seconds
  const createInterval = () => {
    const interval = setInterval(() => {
      setCurSlide((prevSlide) => (prevSlide + 1) % 3)
    }, 5000)

    return (intervalRef.current = interval)
  }

  useEffect(() => {
    createInterval()
    return () => clearInterval(intervalRef.current)
  }, [])

  // Play or pause video on click
  const handleVideo = () => {
    if (videoRefs?.[curSlide]?.current?.paused) {
      videoRefs?.[curSlide]?.current?.play()
      setShowPlay(false)

      // Stop carousel if video is playing
      clearInterval(intervalRef.current)
    } else {
      videoRefs?.[curSlide]?.current?.pause()
      setShowPlay(true)
      createInterval()
    }
  }

  const handleSelection = (slideNumber: number) => {
    // Pause video
    if (!videoRefs?.[curSlide]?.current?.paused) {
      videoRefs?.[curSlide]?.current?.pause()
      setShowPlay(true)
    }

    // Go to selected slide, and reset interval
    setCurSlide(slideNumber)
    clearInterval(intervalRef.current)
    createInterval()
  }

  // Create video elements
  const videosEl = video.map((v, i) => {
    return (
      <div
        className={cx(styles.videoInner, {
          [styles.curSlide]: curSlide === i,
        })}
        key={v}
      >
        <video
          className={styles.video}
          loop
          ref={videoRefs[i]}
          onClick={handleVideo}
        >
          <source src={v} type='video/mp4' />
        </video>

        {/* Play button */}
        <div
          className={cx(styles.playVideoIcon, {
            [styles.showPlay]: showPlay,
          })}
          onClick={handleVideo}
        >
          <PlayVideo />
        </div>
      </div>
    )
  })

  // Create wrapper for video elements and selectors
  const videoWrapEl = (
    <div className={styles.videoWrap}>
      {videosEl}

      {/* Slide selector */}
      <div className={styles.selectorWrap}>
        {slideNames.map((sn, i) => (
          <div
            className={cx(styles.selector, {
              [styles.current]: curSlide === i,
            })}
            key={sn}
            onClick={() => handleSelection(i)}
          >
            {sn}
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className={styles.outer}>
      <div className={'container-grid'}>
        <div className={styles.left}>
          <TextBlock {...text} />
          <div className={styles.graphic1}>
            <GraphicLargeCircle />
          </div>
        </div>
        <div className={styles.right}>
          {videoWrapEl}
          <div className={styles.graphic2}>
            <GraphicCircle />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
