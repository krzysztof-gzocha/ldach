import { Variants } from 'framer-motion'

export const mobileMenuAnimation: Variants = {
  initial: {
    x: '100%',
  },
  show: {
    x: 0,
  },
  hide: {
    x: '100%',
  },
}
