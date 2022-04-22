import colorConverter from 'color-convert'

export const HslToRgb = (color: any)=>{
    return colorConverter.hsl.rgb(color)
}