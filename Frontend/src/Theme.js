import { extendTheme, theme as base, withDefaultColorScheme, withDefaultVariant } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';
const changingBorder = {
    variants: {
        filled: {
            field: {
                backgroundColor: 'brand.400',
                borderColor: 'brand.700',
                rounded: 'md',
                color: "brand.300",
                _hover: 'disabled',
                _focus: {
                    borderColor: 'brand.200',
                    backgroundColor: 'brand.400',
                }
            }
        },

    }
}
const Theme = extendTheme({

    colors: {
        brand: {
            100: "#e45700", //orange
            200: "#ff8f49", //light orange
            300: "#000000", //dark black
            400: "#FFFFFF", //white
            500: "#FFFF00", //yellow
            600: "#f5f5f5", //light gray
            700: "#C8C8C8", //light black
        }
    },
    fonts: {
        heading: `Work Sans, ${base.fonts.heading}`,
        body: `Work Sans, ${base.fonts.body}`

    },

    components: {

        Button: {
            variants: {
                SimpleWhite: (props) => ({
                    rounded: "md",
                    _focus: {
                        ring: 2,
                        ringColor: "brand.600"
                    },
                    borderBottom: "1px solid",
                    borderColor: mode("brand.700", "brand.700")(props),
                    backgroundColor: mode("brand.400", "brand.300")(props),
                    color: mode("brand.300", "brand.400")(props),

                }),
                SimpleOrange: (props) => ({
                    rounded: "md",
                    _focus: {
                        ring: 2,
                        ringColor: "brand.200"
                    },

                    backgroundColor: mode("brand.200", "brand.200")(props),
                    color: mode("brand.300", "brand.300")(props),
                    // _hover :{
                    // }
                }),
                SimpleGreen: (props) => ({
                    rounded: "md",
                    // _focus : {
                    //     ring:2,
                    //     ringColor : "brand.400"
                    // },
                    backgroundColor: mode("brand.200", "brand.600")(props),
                    color: mode("brand.400", "brand.100")(props),
                    // _hover :{
                    // }
                }),
                GradientPrimary: (props) => ({
                    rounded: "md",
                    _focus: {
                        ring: 2,
                        ringColor: "brand.700"
                    },
                    bgGradient: mode("linear(to-r, #5BD7FC,#86FFA3, #F6FF96 )")(props),
                    color: mode("brand.100", "brand.600")(props),
                    _hover: {
                        background: mode("disabled")(props),

                    },
                    _active: {
                        background: mode("disabled")(props),

                    },
                    // _hover :{
                    // }
                }),
            }
        },
        Textarea: {
            variants: {
                filled: {
                    field: {
                        _focus: {
                            borderColor: 'brand.400',
                        }
                    }
                },
            }
        },
        Input: {
            ...changingBorder
        },
        Select: {
            ...changingBorder
        },
        Checkbox: {
            baseStyle: {
                control: {
                    borderColor: 'brand.900',
                }
            }
        }
    }

}, withDefaultColorScheme({
    colorScheme: "brand",

}),
    withDefaultVariant({
        variant: 'filled',
        components: ["Input", "Select", "Textarea"],
    })
);

export default Theme;