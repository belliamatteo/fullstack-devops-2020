import colorConverter from 'color-convert'

export const HslToCmyk = (color: any)=>{
    return colorConverter.hsl.cmyk(color)
}