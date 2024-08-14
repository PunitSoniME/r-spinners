import { Args, ArgTypes } from "@storybook/react"

const getVariantInfo = () => {
    return {
        variant: {
            type: {
                name: 'string',
                required: true,
            },
        },
    }
}

const getSizeInfo = (value) => {
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

const getHeightInfo = (value) => {
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

const getWidthInfo = (value) => {
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
            description: 'Use same size which are available for `width` like `px`, `rem`, `em`, `%` etc...'
        },
    }
}

const getAnimationDurationInfo = (value) => {
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

export const generateArgTypes = (values: Map<'string', unknown>): Partial<ArgTypes<Args>> => {

    return Object.entries(values).reduce((acc: any, curr: any) => {
        switch (curr[0]) {
            case 'variant':
                return { ...acc, ...getVariantInfo() };

            case 'height':
                return { ...acc, ...getHeightInfo(curr[1]) };

            case 'width':
                return { ...acc, ...getWidthInfo(curr[1]) };

            case 'animationDuration':
                return { ...acc, ...getAnimationDurationInfo(curr[1]) };

            case 'size':
                return { ...acc, ...getSizeInfo(curr[1]) };

            default:
                return { ...acc };
        }
    }, {});
}