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
import { IconBaseProps, IconType } from 'react-icons/lib';

interface InputProps extends ChakraInputProps {
  label?: string
  error?: FieldError
  actionDuration?: boolean
  IconType?: IconType | undefined
  iconTypeProps?: IconBaseProps
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
      IconType,
      iconTypeProps,
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
          {
            IconType ? (
              <InputLeftElement ml="5px">
                {
                  IconType ? <IconType fontSize={(width || 1000) <= 500 ? 18 : 25} color="#a0aec0" {...iconTypeProps}/> : null
                }
              </InputLeftElement>
            ) : (
                <InputLeftElement mt={"1%"} ml="5px" display={type === "text" ? "none" : "flex"}>
                  {
                    type === 'phone' ?
                      (<FaWhatsapp fontSize={(width || 1000) <= 500 ? 18 : 25} color="#a0aec0" />)
                      : type === 'email' ? (<AiOutlineMail fontSize={(width || 1000) <= 500 ? 18 : 25} color="#a0aec0" />)
                        : null
                  }
                </InputLeftElement> 
            )
          }
          <ChakraInput
            name={name}
            type={type}
            background="primaryColor.500"
            border="1px solid text.secondary"
            ref={ref}
            paddingLeft={type === "text" ? "16px" : "2.9rem"}
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