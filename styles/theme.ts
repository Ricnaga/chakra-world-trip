import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    colors:{
        light:{
            'Headings and Text':'#F5F8FA',
            'info':'#DADADA'
        },
        dark:{
            'Headings and Text':'#47585B',
        },
        yellow:{
            100:'#FFBA08'
        }
    },
    fonts:{
        heading: 'Poppins',
        body: 'Poppins'
    },
})