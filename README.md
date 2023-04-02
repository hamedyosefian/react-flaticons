react-flaticons
===============

[](https://badge.fury.io/js/react-flaticons)

react-flaticons is a React library that allows you to easily add Flaticon icons to your React projects.

Installation
------------

You can install react-flaticons via npm:

`npm install react-flaticons`

Usage
-----

To use a Flaticon icon in your React component, import the desired icon from the react-flaticons package and use it like this:

jsx

```jsx
import { ShoppingCart } from 'react-flaticons';

function MyComponent() {
  return <ShoppingCart />;
}
```

You can also customize the size and color of the icon by passing in `color` and `size` props:

jsx

```jsx
import { ShoppingCart } from 'react-flaticons';

function MyComponent() {
  return <ShoppingCart color='red' size='32px' />;
}
```

Additionally, you can use the `IconContext` component from react-flaticons to set custom icon styles for all icons in your app:

jsx

```jsx
import { IconContext } from 'react-flaticons';

function App() {
  return (
    <IconContext.Provider value={{ color: 'red', size: '32px' }}>
      <div>
        <ShoppingCart />
        <OtherComponent />
      </div>
    </IconContext.Provider>
  );
}
```

Available Icons
---------------

react-flaticons currently includes all the free Uicons Regular Rounded icons, which you can browse and search on the [Uicons website](https://www.flaticon.com/uicons/interface-icons). Simply search for the icon you want, click on it to view its details page, and copy the icon name (e.g. "Shopping Cart") to use it in your React component.

We're planning to add support for other Uicons weights soon, as well as additional icon sets in the future. This project is constantly evolving and we appreciate your feedback and contributions.

License
-------

react-flaticons is licensed under the [MIT License](https://opensource.org/licenses/MIT).

Contributing
------------

If you find a bug or have a feature request, please [create an issue](https://github.com/hamedyosefian/react-flaticons/issues/new) on GitHub. Pull requests are also welcome!

Credits
-------

This library is based on the excellent [Flaticon](https://www.flaticon.com/) website, which provides a wide variety of free vector icons. Thank you to Flaticon and its contributors for making these icons available to the public.

Keywords
--------

react, react-component, react-icons, uicons, icons, flaticon

