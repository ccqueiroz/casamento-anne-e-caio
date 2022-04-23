import { FieldError } from 'react-hook-form';
import { TiTime } from 'react-icons/ti'

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

    return (
      <FormControl id={name} isInvalid={!!error} isRequired={isRequired} display="flex" flexDirection="column">
        <FormLabel
          fontWeight="bold"
          letterSpacing="0.2rem"
          color="text.tertiary"
          fontSize={{base:"1rem", md:"1.25rem"}}
          mb="1rem"
        >
          {label}
        </FormLabel>
        <InputGroup>
          <InputLeftElement hidden={!actionDuration} mt={1.5}>
            <TiTime fontSize={28} />
          </InputLeftElement>
          <ChakraInput
            name={name}
            type={type}
            background="primaryColor.500"
            border="1px solid text.secondary"
            ref={ref}
            pl={actionDuration ? 10 : 6}
            color="text.tertiary"
            boxShadow="1px 2px 9px 2px rgba(74, 97, 97, 0.5)"
            fontSize={{ base: "1rem", md: "1.25rem" }}
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