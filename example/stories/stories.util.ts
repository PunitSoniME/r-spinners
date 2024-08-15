import { Args, ArgTypes } from "@storybook/react"

type ReturnTypeOfGeneratedInfo = ArgTypes<Args>;

const getVariantInfo = (key: string, value: any): ReturnTypeOfGeneratedInfo => {
    return {
        [key]: {
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

const getSizeInfo = (key: string, value: any): ReturnTypeOfGeneratedInfo => {
    return {
        [key]: {
            type: 'string',
            table: {
                defaultValue: {
                    summary: value,
                },
                type: {
                    summary: "string",
                },
            },
            description: `Use same size which are available for \`font-size\` like \`px\`, \`rem\`, \`em\`, \`%\` etc...`
        },
    }
}

const getHeightInfo = (key: string, value: any): ReturnTypeOfGeneratedInfo => {
    return {
        [key]: {
            type: 'string',
            table: {
                defaultValue: {
                    summary: value,
                },
                type: {
                    summary: "string",
                },
            },
            description: `Use same size which are available for \`${key}\` like \`px\`, \`rem\`, \`em\`, \`%\` etc...`
        },
    }
}

const getWidthInfo = (key: string, value: any): ReturnTypeOfGeneratedInfo => {
    return {
        [key]: {
            type: 'string',
            table: {
                defaultValue: {
                    summary: value,
                },
                type: {
                    summary: "string",
                },
            },
            description: `Use same size which are available for ${key} like \`px\`, \`rem\`, \`em\`, \`%\` etc...`
        },
    }
}

const getAnimationDurationInfo = (key: string, value: any): ReturnTypeOfGeneratedInfo => {
    return {
        [key]: {
            table: {
                defaultValue: {
                    summary: `${value} second`,
                }
            },
            description: 'Enter the duration to complete 1 animation cycle',
        }
    }
}

//  Don't add this method in mapping object as this method is used to generate general information
const getGeneralInfo = (key: string, value: any): ReturnTypeOfGeneratedInfo => {
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

const mappings = {
    'variant': getVariantInfo,
    'height': getHeightInfo,
    'width': getWidthInfo,
    'animationDuration': getAnimationDurationInfo,
    'size': getSizeInfo,
}

export const generateArgTypes = (values: Map<'string', unknown>): Partial<ReturnTypeOfGeneratedInfo> => {

    return Object.entries(values).reduce((acc: any, curr: any) => {
        if (mappings[curr[0]]) {
            return { ...acc, ...mappings[curr[0]](curr[0], curr[1]) }
        } else {
            return { ...acc, ...getGeneralInfo(curr[0], curr[1]) }
        }
    }, {});
}