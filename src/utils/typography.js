import Typography from 'typography'

const options = {
  googleFonts: [
    {
      name: `Alegreya`,
      styles: [`400, 800`],
    },
  ],
  baseFontSize: `16px`,
  baseLineHeight: 1.4,
  headerFontFamily: [`Alegreya`, `sans-serif`],
}

const typography = new Typography(options)

if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
