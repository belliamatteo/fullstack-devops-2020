import colorConverter from 'color-convert'

export const HslToHex = (color: any)=>{
    return colorConverter.hsl.hex(color)
}