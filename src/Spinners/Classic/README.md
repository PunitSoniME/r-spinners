## Classic Spinners Usage

<br />

> ### To override **color** and **size** of loaders, please use **color** and **size** props, don't use css styling for those
</br >

```
Common Props

    size?: number | string;
    style?: object;
    speed?: number; ( Default is 1, increase the number to increase the speed of animation )
    stop?: boolean; ( Default is false )

```

|  Component  | Required_Props | Optional_Props | Example |
| ------------- | ------------- | ------------- | ------------- |
| ```<ClassicSpinner1 />```  | text: string; | color?: string;  | ```<ClassicSpinner1 text="Loading 1..." speed={1} color="#000" size="1.5rem" stop={false} />```  |
| ```<ClassicSpinner2 />```  | text: string; | color?: string;  | ```<ClassicSpinner2 text="Loading 2..." speed={1} color="#000" size="1.5rem" stop={false} />```  |
| ```<ClassicSpinner3 />```  | text: string; | color?: string;  | ```<ClassicSpinner3 text="Loading 3..." speed={1} color="#000" size="1.5rem" stop={false} />```  |
| ```<ClassicSpinner4 />```  | text: string;<br />noOfCharactersToBlinkAtLast: number; | color?: string;  | ```<ClassicSpinner4 text="Loading 4..." speed={1} color="#000" size="1.5rem" stop={false} noOfCharactersToBlinkAtLast={3} />```  |
| ```<ClassicSpinner5 />```  | text: string; | color?: string;  | ```<ClassicSpinner5 text="Loading 5..." speed={1} color="#000" size="1.5rem" stop={false} />```  |
| ```<ClassicSpinner6 />```  | text: string; | color?: string;  | ```<ClassicSpinner6 text="Loading 6..." speed={1} color="#000" size="1.5rem" stop={false} />```  |
| ```<ClassicSpinner7 />```  | text: string;<br />animationColor: string; | color?: string;  | ```<ClassicSpinner7 text="Loading 7..." speed={1} color="#000" size="1.5rem" stop={false} animationColor="#be123c" />```  |
| ```<ClassicSpinner8 />```  | text: string;<br />animationColor: string; | color?: string;  | ```<ClassicSpinner8 text="Loading 8..." speed={1} color="#000" size="1.5rem" stop={false} animationColor="#be123c" />```  |
| ```<ClassicSpinner9 />```  | text: string;<br />colors: string[];<br /><br />`Note: colors must contains 4 different colors.`<br /><br />`Default Colors - ["#000", "#b91c1c", "#0369a1", "#15803d"]` | -  | ```<ClassicSpinner9 text="Loading 9..." speed={1} size="1.5rem" stop={false} colors={["#000", "#b91c1c", "#0369a1", "#15803d"]} />```  |
| ```<ClassicSpinner10 />```  | text: string;<br />colors: string[];<br /><br />`Note: colors must contains 4 different colors.`<br /><br />`Default Colors - ["#000", "#b91c1c", "#0369a1", "#15803d"]` | -  | ```<ClassicSpinner10 text="Loading 10..." speed={1} size="1.5rem" stop={false} colors={["#000", "#b91c1c", "#0369a1", "#15803d"]} />```  |

----------------------
