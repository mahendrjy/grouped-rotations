import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Container from './Container'

const GroupedRotations = ({ smaller }) => {
  const [shapes, setShapes] = useState([])

  useEffect(() => {
    const newShapes = []
    const numberOfShapes = 10
    const fullRotation = 2 * Math.PI
    const plotRadius = smaller ? 70 : 150

    const variants = {
      hidden: { opacity: 0, scale: 0 },
      visible: { opacity: 1, scale: 1 },
    }

    for (let i = 0; i < numberOfShapes; i++) {
      const angle = (fullRotation * (i + 1)) / numberOfShapes
      const x = plotRadius * Math.cos(angle)
      const y = plotRadius * Math.sin(angle)

      newShapes.push(
        <motion.div
          key={i}
          className={`absolute rounded-sm bg-blue-400 ${
            smaller ? 'h-6 w-6' : 'h-12 w-12'
          }`}
          animate={{
            rotate: [0, 360],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
          variants={variants}
          style={{ x, y }}
        />
      )
    }
    setShapes(newShapes)
  }, [smaller])

  return (
    <Container>
      <motion.div
        whileHover={{
          rotate: [0, 360],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
        className={`flex items-center justify-center rounded-full ${
          smaller ? 'h-44 w-44' : 'h-96 w-96'
        }`}
      >
        {shapes}
      </motion.div>
    </Container>
  )
}

export default GroupedRotations
