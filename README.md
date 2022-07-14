# Collection of react spinners

[![npm version](https://badge.fury.io/js/r-spinners.svg)][npm_url]
[![downloads](https://img.shields.io/npm/dt/r-spinners.svg)][npm_url]
[![license](https://img.shields.io/npm/l/r-spinners.svg)][npm_url]

<!-- ![Dependency Count](https://badgen.net/bundlephobia/dependency-count/r-spinners) -->
![Types Included](https://badgen.net/npm/types/r-spinners)
[![gzip size](https://img.badgesize.io/https:/unpkg.com/r-spinners/dist/r-spinners.cjs.production.min.js?label=gzip&compression=gzip)](https:/unpkg.com/r-spinners/dist/r-spinners.cjs.production.min.js)

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

|  Component  | Required_Props | Optional_Props | Example |
| ------------- | ------------- | ------------- | ------------- |
| ```<ClassicSpinner1 />```  | text: string; | color?: string;<br />size?: number \| string;<br />style?: object;<br />speed?: number;  | ```<ClassicSpinner1 text="Loading 1..." speed={1} color="#000" size="1.5rem" />```  |
| ```<ClassicSpinner2 />```  | text: string; | color?: string;<br />size?: number \| string;<br />style?: object;<br />speed?: number;  | ```<ClassicSpinner2 text="Loading 2..." speed={1} color="#000" size="1.5rem" />```  |
| ```<ClassicSpinner3 />```  | text: string; | color?: string;<br />size?: number \| string;<br />style?: object;<br />speed?: number;  | ```<ClassicSpinner3 text="Loading 3..." speed={1} color="#000" size="1.5rem" />```  |
| ```<ClassicSpinner4 />```  | text: string;<br />noOfCharactersToBlinkAtLast: number; | color?: string;<br />size?: number \| string;<br />style?: object;<br />speed?: number;  | ```<ClassicSpinner4 text="Loading 4..." speed={1} color="#000" size="1.5rem" noOfCharactersToBlinkAtLast={3} />```  |
| ```<ClassicSpinner5 />```  | text: string; | color?: string;<br />size?: number \| string;<br />style?: object;<br />speed?: number;  | ```<ClassicSpinner5 text="Loading 5..." speed={1} color="#000" size="1.5rem" />```  |
| ```<ClassicSpinner6 />```  | text: string; | color?: string;<br />size?: number \| string;<br />style?: object;<br />speed?: number;  | ```<ClassicSpinner6 text="Loading 6..." speed={1} color="#000" size="1.5rem" />```  |
| ```<ClassicSpinner7 />```  | text: string;<br />animationColor: string; | color?: string;<br />size?: number \| string;<br />style?: object;<br />speed?: number;  | ```<ClassicSpinner7 text="Loading 7..." speed={1} color="#000" size="1.5rem" animationColor="#be123c" />```  |
| ```<ClassicSpinner8 />```  | text: string;<br />animationColor: string; | color?: string;<br />size?: number \| string;<br />style?: object;<br />speed?: number;  | ```<ClassicSpinner8 text="Loading 8..." speed={1} color="#000" size="1.5rem" animationColor="#be123c" />```  |
| ```<ClassicSpinner9 />```  | text: string;<br />colors: string[];<br /><br />`Note: colors must contains 4 different colors` | size?: number \| string;<br />style?: object;<br />speed?: number;  | ```<ClassicSpinner9 text="Loading 9..." speed={1} size="1.5rem" colors={["#000", "#b91c1c", "#0369a1", "#15803d"]} />```  |
| ```<ClassicSpinner10 />```  | text: string;<br />colors: string[];<br /><br />`Note: colors must contains 4 different colors` | size?: number \| string;<br />style?: object;<br />speed?: number;  | ```<ClassicSpinner10 text="Loading 10..." speed={1} size="1.5rem" colors={["#000", "#b91c1c", "#0369a1", "#15803d"]} />```  |

----------------------

</details>

<br />

### Infinity Spinners ( demo ) - https://codesandbox.io/s/infinity-spinners-qq6ij6
<details>
<summary>Infinity Spinners Usage</summary>

<br />

> ### To override **color**, **height** and **width** of loaders, please use **color**, **height** and **width** props, don't use css styling for those
</br >

|  Component  |  Optional_Props | Example |
| ------------- | ------------- | ------------- |
| ```<InfinitySpinner1 />```  |  height?: number \| string;<br />width?: number \| string;<br />color?: string;<br />style?: object;<br />speed?: number;  | ```<InfinitySpinner1 speed={1} color="#0369a1" />```  |
| ```<InfinitySpinner2 />```  |  height?: number \| string;<br />width?: number \| string;<br />color?: string;<br />style?: object;<br />speed?: number;  | ```<InfinitySpinner2 speed={1} color="#0369a1" />```  |
| ```<InfinitySpinner3 />```  |  height?: number \| string;<br />width?: number \| string;<br />color?: string;<br />style?: object;<br />speed?: number;  | ```<InfinitySpinner3 speed={1} color="#0369a1" />```  |
| ```<InfinitySpinner4 />```  |  height?: number \| string;<br />width?: number \| string;<br />color?: string;<br />style?: object;<br />speed?: number;  | ```<InfinitySpinner4 speed={1} color="#0369a1" />```  |
| ```<InfinitySpinner5 />```  |  height?: number \| string;<br />width?: number \| string;<br />color?: string;<br />style?: object;<br />speed?: number;  | ```<InfinitySpinner5 speed={1} color="#0369a1" />```  |
| ```<InfinitySpinner6 />```  |  height?: number \| string;<br />width?: number \| string;<br />color?: string;<br />style?: object;<br />speed?: number;  | ```<InfinitySpinner6 speed={1} color="#0369a1" />```  |
| ```<InfinitySpinner7 />```  |  height?: number \| string;<br />width?: number \| string;<br />color?: string;<br />style?: object;<br />speed?: number;  | ```<InfinitySpinner7 speed={1} color="#0369a1" />```  |
| ```<InfinitySpinner8 />```  |  height?: number \| string;<br />width?: number \| string;<br />color?: string;<br />style?: object;<br />speed?: number;  | ```<InfinitySpinner8 speed={1} color="#0369a1" />```  |
| ```<InfinitySpinner9 />```  |  height?: number \| string;<br />width?: number \| string;<br />color?: string;<br />style?: object;<br />speed?: number;  | ```<InfinitySpinner9 speed={1} color="#0369a1" />```  |
| ```<InfinitySpinner10 />```  |  height?: number \| string;<br />width?: number \| string;<br />color?: string;<br />style?: object;<br />speed?: number;  | ```<InfinitySpinner10 speed={1} color="#0369a1" />```  |

----------------------

</details>

<br />

### Dot Spinners ( demo ) - https://codesandbox.io/s/dot-spinners-ronmuc
<details>
<summary>Dot Spinners Usage</summary>

<br />

> ### To override **color**, use **color** prop, for **height** and **width**, use **size** prop, don't use css styling for those
</br >

|  Component  | Optional_Props | Example |
| ------------- | ------------- | ------------- |
| ```<DotSpinner1 />```  |  size?: number \| string;<br />color?: string;<br />style?: object;<br />speed?: number;  | ```<DotSpinner1 speed={1} color="#ea580c" />```  |
| ```<DotSpinner2 />```  |  size?: number \| string;<br />color?: string;<br />style?: object;<br />speed?: number;  | ```<DotSpinner2 speed={1} color="#ea580c" />```  |
| ```<DotSpinner3 />```  |  size?: number \| string;<br />color?: string;<br />style?: object;<br />speed?: number;  | ```<DotSpinner3 speed={1} color="#ea580c" />```  |
| ```<DotSpinner4 />```  |  size?: number \| string;<br />color?: string;<br />style?: object;<br />speed?: number;  | ```<DotSpinner4 speed={1} color="#ea580c" />```  |
| ```<DotSpinner5 />```  |  size?: number \| string;<br />color?: string;<br />style?: object;<br />speed?: number;  | ```<DotSpinner5 speed={1} color="#ea580c" />```  |
| ```<DotSpinner6 />```  |  size?: number \| string;<br />color?: string;<br />style?: object;<br />speed?: number;  | ```<DotSpinner6 speed={1} color="#ea580c" />```  |
| ```<DotSpinner7 />```  |  size?: number \| string;<br />color?: string;<br />style?: object;<br />speed?: number;  | ```<DotSpinner7 speed={1} color="#ea580c" />```  |
| ```<DotSpinner8 />```  |  size?: number \| string;<br />color?: string;<br />style?: object;<br />speed?: number;  | ```<DotSpinner8 speed={1} color="#ea580c" />```  |
| ```<DotSpinner9 />```  |  size?: number \| string;<br />color?: string;<br />style?: object;<br />speed?: number;  | ```<DotSpinner9 speed={1} color="#ea580c" />```  |
| ```<DotSpinner10 />```  |  size?: number \| string;<br />color?: string;<br />style?: object;<br />speed?: number;  | ```<DotSpinner10 speed={1} color="#ea580c" />```  |

----------------------

</details>
