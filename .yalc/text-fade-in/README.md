# Fade In

A React component that beautifully fades in text either by words or by lines, providing an engaging visual effect for your applications.

## Installation

Install the package via npm:

```bash
npm install text-fade-in
```

## Usage

Import the FadeIn component into your React application:

```jsx
import React from 'react';
import FadeIn from 'text-fade-in';
```

### Basic Usage

By default, the text will fade in word by word with no additional styling:

```jsx
<FadeIn>
  Welcome to the world of fade-in text animations!
</FadeIn>
```

### Using the lines Prop

To fade in text line by line, add the lines prop:

```jsx
<FadeIn lines>
  Line one.
  Line two.
  Line three.
</FadeIn>
```

### Using the linear Prop for Default Styling

The linear prop applies predefined styles to the text:

- When linear is present and lines is not present, the text will split by words and use header styling.
- When both linear and lines are present, the text will split by lines and use body styling.

#### Header Styling Example (Splitting by Words)

```jsx
<FadeIn linear>
  Enhance your UI with Fade In Text.
</FadeIn>
```

#### Body Styling Example (Grouping by Lines)

```jsx
<FadeIn linear lines>
  Fade in text animations can greatly improve user engagement.
</FadeIn>
<FadeIn linear lines>
  Implement them easily with this component.
</FadeIn>
```

## Props

The FadeIn component accepts the following props:

- `lines`: boolean (optional)
  - If present, the text will fade in together.
  - Default: false (text is split by words).
- `linear`: boolean (optional)
  - If present, applies predefined styling to the text.
  - Default: false (no additional styling applied).
- `className`: string (optional)
  - Additional custom class names for styling the container.
- `style`: object (optional)
  - Inline styles to apply to the container.

## Custom Styling

You can still apply custom styles using the className and style props:

```jsx
<FadeIn className="custom-fade-in" style={{ color: 'blue' }}>
  Custom styled text.
</FadeIn>
```

Note: Custom styles provided via style or className will override the default styles applied by the linear prop.

## Dependencies

- React: ^17.0.0 or ^18.0.0
- react-dom: ^17.0.0 or ^18.0.0

These are specified as peer dependencies, so ensure your project has a compatible version of React installed.

## License

This project is licensed under the MIT License.

## Support

If you encounter any issues or have questions, feel free to open an issue on the GitHub repository.

Happy coding! Enhance your applications with smooth and engaging fadein text animations using fadein.