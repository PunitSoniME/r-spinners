# Collection of react spinners

[![npm version](https://badge.fury.io/js/r-spinners.svg)][npm_url]
[![downloads](https://img.shields.io/npm/dt/r-spinners.svg)][npm_url]
[![license](https://img.shields.io/npm/l/r-spinners.svg)][npm_url]

<!-- ![Dependency Count](https://badgen.net/bundlephobia/dependency-count/r-spinners) -->
![Types Included](https://badgen.net/npm/types/r-spinners)

[npm_url]: https://www.npmjs.org/package/r-spinners

## Installation

With Yarn:

```bash
yarn add r-spinners
```

With npm:

```bash
npm install --save r-spinners
```

## Usage

Each loader has their own default properties. You can overwrite the defaults by passing props into the loaders.

<br />

### Classic Spinners ( demo ) - https://codesandbox.io/s/classic-spinners-jg8qb0
<details>
<summary>Classic Spinners Usage</summary>

<br />

> ### To override **color** and **size** of loaders, please use **color** and **size** props, don't use css styling for those
</br >

|  Component  | Required Props | Optional Props | Example |
| ------------- | ------------- | ------------- | ------------- |
| ```<ClassicSpinner1 />```  | text: string; | color?: string;<br />size?: number \| string;<br />style?: object;<br />animationTime?: string;  | ```<ClassicSpinner1 text="Loading 1..." animationTime="2s" color="#000" size="1.5rem" />```  |
| ```<ClassicSpinner2 />```  | text: string; | color?: string;<br />size?: number \| string;<br />style?: object;<br />animationTime?: string;  | ```<ClassicSpinner2 text="Loading 2..." animationTime="2s" color="#000" size="1.5rem" />```  |
| ```<ClassicSpinner3 />```  | text: string; | color?: string;<br />size?: number \| string;<br />style?: object;<br />animationTime?: string;  | ```<ClassicSpinner3 text="Loading 3..." animationTime="2s" color="#000" size="1.5rem" />```  |
| ```<ClassicSpinner4 />```  | text: string;<br />noOfCharactersToBlinkAtLast: number; | color?: string;<br />size?: number \| string;<br />style?: object;<br />animationTime?: string;  | ```<ClassicSpinner4 text="Loading 4..." animationTime='2s' color="#000" size="1.5rem" noOfCharactersToBlinkAtLast={3} />```  |
| ```<ClassicSpinner5 />```  | text: string; | color?: string;<br />size?: number \| string;<br />style?: object;<br />animationTime?: string;  | ```<ClassicSpinner5 text="Loading 5..." animationTime="2s" color="#000" size="1.5rem" />```  |
| ```<ClassicSpinner6 />```  | text: string; | color?: string;<br />size?: number \| string;<br />style?: object;<br />animationTime?: string;  | ```<ClassicSpinner6 text="Loading 6..." animationTime="2s" color="#000" size="1.5rem" />```  |
| ```<ClassicSpinner7 />```  | text: string;<br />animationColor: string; | color?: string;<br />size?: number \| string;<br />style?: object;<br />animationTime?: string;  | ```<ClassicSpinner7 text="Loading 7..." animationTime='2s' color="#000" size="1.5rem" animationColor="#be123c" />```  |
| ```<ClassicSpinner8 />```  | text: string;<br />animationColor: string; | color?: string;<br />size?: number \| string;<br />style?: object;<br />animationTime?: string;  | ```<ClassicSpinner8 text="Loading 8..." animationTime='2s' color="#000" size="1.5rem" animationColor="#be123c" />```  |
| ```<ClassicSpinner9 />```  | text: string;<br />colors: string[];<br /><br />`Note: colors must contains 4 different colors` | size?: number \| string;<br />style?: object;<br />animationTime?: string;  | ```<ClassicSpinner9 text="Loading 9..." animationTime='4s' size="1.5rem" colors={["#000", "#b91c1c", "#0369a1", "#15803d"]} />```  |
| ```<ClassicSpinner10 />```  | text: string;<br />colors: string[];<br /><br />`Note: colors must contains 4 different colors` | size?: number \| string;<br />style?: object;<br />animationTime?: string;  | ```<ClassicSpinner10 text="Loading 10..." animationTime='4s' size="1.5rem" colors={["#000", "#b91c1c", "#0369a1", "#15803d"]} />```  |

----------------------

</details>

<br />

### Infinity Spinners ( demo ) - https://codesandbox.io/s/infinity-spinners-qq6ij6
<details>
<summary>Infinity Spinners Usage</summary>

<br />

> ### To override **color**, **height** and **width** of loaders, please use **color**, **height** and **width** props, don't use css styling for those
</br >

|  Component  | Required Props | Optional Props | Example |
| ------------- | ------------- | ------------- | ------------- |
| ```<InfinitySpinner1 />```  |  - |  height?: number \| string;<br />width?: number \| string;<br />color?: string;<br />style?: object;<br />animationTime?: string;  | ```<InfinitySpinner1 animationTime='0.5s' color="#0369a1" />```  |
| ```<InfinitySpinner2 />```  |  -  |  height?: number \| string;<br />width?: number \| string;<br />color?: string;<br />style?: object;<br />animationTime?: string;  | ```<InfinitySpinner2 animationTime='0.5s' color="#0369a1" />```  |
| ```<InfinitySpinner3 />```  |  -  |  height?: number \| string;<br />width?: number \| string;<br />color?: string;<br />style?: object;<br />animationTime?: string;  | ```<InfinitySpinner3 animationTime='2s' color="#0369a1" />```  |
| ```<InfinitySpinner4 />```  |  -  |  height?: number \| string;<br />width?: number \| string;<br />color?: string;<br />style?: object;<br />animationTime?: string;  | ```<InfinitySpinner4 animationTime='2s' color="#0369a1" />```  |
| ```<InfinitySpinner5 />```  |  -  |  height?: number \| string;<br />width?: number \| string;<br />color?: string;<br />style?: object;<br />animationTime?: string;  | ```<InfinitySpinner5 animationTime='0.5s' color="#0369a1" />```  |
| ```<InfinitySpinner6 />```  |  -  |  height?: number \| string;<br />width?: number \| string;<br />color?: string;<br />style?: object;<br />animationTime?: string;  | ```<InfinitySpinner6 animationTime='0.5s' color="#0369a1" />```  |
| ```<InfinitySpinner7 />```  |  -  |  height?: number \| string;<br />width?: number \| string;<br />color?: string;<br />style?: object;<br />animationTime?: string;  | ```<InfinitySpinner7 animationTime='0.5s' color="#0369a1" />```  |
| ```<InfinitySpinner8 />```  |  -  |  height?: number \| string;<br />width?: number \| string;<br />color?: string;<br />style?: object;<br />animationTime?: string;  | ```<InfinitySpinner8 animationTime='0.5s' color="#0369a1" />```  |
| ```<InfinitySpinner9 />```  |  -  |  height?: number \| string;<br />width?: number \| string;<br />color?: string;<br />style?: object;<br />animationTime?: string;  | ```<InfinitySpinner9 animationTime='2s' color="#0369a1" />```  |
| ```<InfinitySpinner10 />```  |  -  |  height?: number \| string;<br />width?: number \| string;<br />color?: string;<br />style?: object;<br />animationTime?: string;  | ```<InfinitySpinner10 animationTime='2s' color="#0369a1" />```  |

----------------------

</details>

<br /><br />