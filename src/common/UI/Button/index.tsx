/*
 This is a Next.js project bootstrapped with Strapazzon/next-starter
 You can change this header message in .eslint.json.
 And run yarn lint --fix to change all files
 Ex: Your Company 2022
*/

import { styled } from 'common/theme/stitches'

export const Button = styled('button', {
  backgroundColor: '$blue600',
  color: '$white',
  fontSize: '$xl2',
  paddingLeft: '$sp125',
  paddingRight: '$sp125',
  paddingTop: '$sp75',
  paddingBottom: '$sp75',
  borderRadius: '$md',
  margin: '$sp50',
  boxShadow: '$base',
  '&:hover': {
    backgroundColor: '$blue500',
  },

  variants: {
    variant: {
      violet: {
        backgroundColor: '$violet600',
        '&:hover': {
          backgroundColor: '$violet500',
        },
      },
      gray: {
        backgroundColor: '$gray700',
        '&:hover': {
          backgroundColor: '$gray600',
        },
      },
    },
  },
})
