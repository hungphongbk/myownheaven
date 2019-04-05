const sizesMin = {
  desktop: 1024,
  tablet: 768,
  phone: 0,
}

// Iterate through the sizes and create a media template
export const mediaMin = Object.keys(sizesMin).reduce((acc, label) => {
  acc[label] = rules => `
    @media (min-width: ${sizesMin[label]}px) {
      ${rules}
    }
  `

  return acc
}, {})
