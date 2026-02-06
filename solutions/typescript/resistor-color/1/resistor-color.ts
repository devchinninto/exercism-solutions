export const colorCode = (color: string) => {
  //toLower to make sure the parameter received will match my array 
  return COLORS.indexOf(color.toLowerCase())
}

export const COLORS: string[] = [
      'black',
      'brown',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'grey',
      'white',
    ]

console.log(colorCode('grey'))