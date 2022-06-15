const {createTheme} = require("@mui/material/styles")

const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
          main: '#166f20',
        },
        secondary: {
          main: '#1dff0c',
        },
      }
})

export default theme