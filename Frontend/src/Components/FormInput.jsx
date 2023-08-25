import { FormLabel, Input } from '@chakra-ui/react'
import { Box } from 'lucide-react'
import React from 'react'

export const FormInput = ({title, datatype, recipeData, setRecipeData}) => {
  return (
    <Box>
    <FormLabel htmlFor={title}>{title}</FormLabel>
    <Input
      type={datatype}
      id={title}
      placeholder={`Please enter ${title}`}
      name={title}
      value={recipeData.title}
      onChange={(e) =>
        setRecipeData({
          ...recipeData,
          [e.target.name]: e.target.value,
        })
      }
    />
  </Box>
  )
}
