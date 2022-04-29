import { FieldError } from 'react-hook-form';
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  forwardRef,
  Input as ChakraInput,
  InputGroup,
  InputProps as ChakraInputProps,
  InputLeftElement,
} from '@chakra-ui/react'
import { useWindowSize } from '../../hooks/useWindowSize';

interface InputProps extends ChakraInputProps {
  label?: string
  error?: FieldError
  actionDuration?: boolean
}

const Input = forwardRef<InputProps, 'input'>(
  (
    {
      name,
      label,
      error = undefined,
      type = 'text',
      actionDuration = false,
      isRequired = false,
      ...rest
    },
    ref
  ) => {
    const { width } = useWindowSize()
    return (
      <FormControl id={name} isInvalid={!!error} isRequired={isRequired} display="flex" flexDirection="column">
        <FormLabel
          fontWeight="bold"
          fontFamily="TimesRoman"
          letterSpacing="0.2rem"
          color="text.tertiary"
          fontSize={{base:"1rem", md:"1.25rem"}}
          mb="1rem"
        >
          {label}
        </FormLabel>
        <InputGroup>
          <InputLeftElement mt={"1%"} ml="5px">
            {
              type === 'phone' ?
                (<FaWhatsapp fontSize={(width || 1000) <= 500 ? 18 : 25} color="#a0aec0" />)
                : (<AiOutlineMail fontSize={(width || 1000) <= 500 ? 18 : 25} color="#a0aec0" />)
            }
          </InputLeftElement>
          <ChakraInput
            name={name}
            type={type}
            background="primaryColor.500"
            border="1px solid text.secondary"
            ref={ref}
            paddingLeft="2.9rem"
            color="text.tertiary"
            boxShadow="1px 2px 9px 2px rgba(74, 97, 97, 0.5)"
            fontSize={{ base: "0.75rem", md: "1rem", lg:"1.125rem" }}
            letterSpacing="0.2rem"
            {...rest}
          />
        </InputGroup>
        {!!error && <FormErrorMessage>{error?.message}</FormErrorMessage>}
      </FormControl>
    )
  }
)

export { Input }