import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

const Animate = ({ content }) => {
  const { ref, inView } = useInView({})
  const flyInFromLeft = useAnimation()

  useEffect(() => {
    if (inView) {
      flyInFromLeft.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.3,
        },
      })
    }

    if (!inView) {
      flyInFromLeft.start({
        x: '-100vw',
      })
    }
  }, [inView, flyInFromLeft])

  return (
    <div ref={ref}>
      <motion.div animate={flyInFromLeft}>
        {content}
      </motion.div>
    </div>
  )
}

export default Animate
