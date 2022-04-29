import { motion, isValidMotionProp } from 'framer-motion';
import { chakra } from '@chakra-ui/react';

export const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop: string) => isValidMotionProp(prop) || prop === 'children',
  });
    