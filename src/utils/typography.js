import Typography from "typography"
import kirkhamTheme from "typography-theme-kirkham"

kirkhamTheme.baseFontSize = "15.6px"
kirkhamTheme.baseLineHeight = 1.64
kirkhamTheme.googleFonts = [
  { name: "Vollkorn SC", styles: ["400"] },
  {
    name: "Vollkorn",
    styles: ["400", "400i", "700", "700i"],
  },
]
kirkhamTheme.headerFontFamily = ["Vollkorn SC", "serif"]
kirkhamTheme.bodyFontFamily = ["Vollkorn", "sans-serif"]
kirkhamTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  "a, a:hover, a:active, a:visited": {
    color: "#1e1e1e",
    textDecoration: "none",
  },
  blockquote: {
    fontSize: "inherit",
  },
  "h1,h2,h3,h4,h5,h6": {
    color: "#fff",
  },
})

const typography = new Typography(kirkhamTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
export const adjustFontSizeTo = typography.adjustFontSizeTo
