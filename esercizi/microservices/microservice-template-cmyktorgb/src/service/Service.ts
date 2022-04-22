import colorConverter from 'color-convert'

export const CmykToRgb = (color: any)=>{
    return colorConverter.cmyk.rgb(color)
}

