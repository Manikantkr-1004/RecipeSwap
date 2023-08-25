import { FormLabel, Input, Box,} from '@chakra-ui/react'
import React from 'react'

export const FormInput = ({title, naming, datatype, recipeData, setRecipeData}) => 
{

  return (
    <Box>
    <FormLabel htmlFor={naming}>{title}</FormLabel>
    <Input
      type={datatype}
      id={naming}
      placeholder={`Please enter ${title}`}
      name={naming}
      value={recipeData[naming]}
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
