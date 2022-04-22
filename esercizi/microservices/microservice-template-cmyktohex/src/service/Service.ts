import colorConverter from 'color-convert'

export const CmykToHex = (color: any)=>{
    return colorConverter.cmyk.hex(color)
}