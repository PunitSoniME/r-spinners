export function isNumber(value: string) {
  return /^-?[\d.]+(?:e-?\d+)?$/.test(value);
}

export function updateProps(category, props) {
  let { style, ...rest } = props;

  //  This is to fix the conflict when user set both properties, color and style.color
  if (style && style.color) {
    const { color, ...restStyle } = style;
    style = { ...restStyle };
    rest['color'] = color;
  }

  if (props.style && props.style.color && props.color) {
    console.warn(
      `${category} Spinner - variant "${props.variant}" > You have override the "color" prop with the "style.color" \nEither set "color" prop or "style.color"`
    );
  }

  //  Initial default color
  if (!rest.color) {
    rest['color'] = 'currentColor';
  }

  return { style, rest };
}
