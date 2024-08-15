import { Args, ArgTypes } from "@storybook/react"

const getVariantInfo = (value: string): ArgTypes<Args> => {
    return {
        variant: {
            type: {
                name: 'string',
                required: true,
            },
            table: {
                defaultValue: {
                    summary: value,
                }
            },
            control: {
                disable: true,
            }
        },
    }
}

const getSizeInfo = (value): ArgTypes<Args> => {
    return {
        size: {
            type: 'string',
            table: {
                defaultValue: {
                    summary: value,
                },
                type: {
                    summary: "string",
                },
            },
            description: 'Use same size which are available for `font-size` like `px`, `rem`, `em`, `%` etc...'
        },
    }
}

const getHeightInfo = (value): ArgTypes<Args> => {
    return {
        height: {
            type: 'string',
            table: {
                defaultValue: {
                    summary: value,
                },
                type: {
                    summary: "string",
                },
            },
            description: 'Use same size which are available for `height` like `px`, `rem`, `em`, `%` etc...'
        },
    }
}

const getWidthInfo = (value): ArgTypes<Args> => {
    return {
        width: {
            type: 'string',
            table: {
                defaultValue: {
                    summary: value,
                },
                type: {
                    summary: "string",
                },
            },
            description: 'Use same size which are available for `width` like `px`, `rem`, `em`, `%` etc...'
        },
    }
}

const getAnimationDurationInfo = (value): ArgTypes<Args> => {
    return {
        animationDuration: {
            table: {
                defaultValue: {
                    summary: `${value} second`,
                }
            },
            description: 'Enter the duration to complete 1 animation cycle',
        }
    }
}

const getGeneralInfo = (key: string, value: any): ArgTypes<Args> => {
    return {
        [key]: {
            table: {
                defaultValue: {
                    summary: value,
                }
            },
        }
    }
}

export const generateArgTypes = (values: Map<'string', unknown>): Partial<ArgTypes<Args>> => {

    return Object.entries(values).reduce((acc: any, curr: any) => {
        switch (curr[0]) {
            case 'variant':
                return { ...acc, ...getVariantInfo(curr[1]) };

            case 'height':
                return { ...acc, ...getHeightInfo(curr[1]) };

            case 'width':
                return { ...acc, ...getWidthInfo(curr[1]) };

            case 'animationDuration':
                return { ...acc, ...getAnimationDurationInfo(curr[1]) };

            case 'size':
                return { ...acc, ...getSizeInfo(curr[1]) };

            default:
                return { ...acc, ...getGeneralInfo(curr[0], curr[1]) };

        }
    }, {});
}