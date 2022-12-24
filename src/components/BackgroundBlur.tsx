import { Image } from '@chakra-ui/react'
import blurBg from '../assets/blur-bg.png'

export function BackgroundBlur() {
  return (
    <Image minH="100vh" minW="100vw" alt="" zIndex={-1} src={blurBg}></Image>
  )
}
