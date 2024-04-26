# Tom Belton Carto Assignment
Carto assignment using deck.gl and the Carto module
## Screenshots:

## Public app:
The publicly available app is running on Netlify [here](https://main--compassionate-leavitt-917108.netlify.app/).
## App features:
- Layer editor:
  - Layer visibility toggle
  - Color pickers for layer fill and outline colors
  - Point and outline size controllers (if available for layer)
  - Togglable editor
  - Programmatic map zoom
## Instructions:
The app utilizes a Sidebar component which serves as the controller for the variable UI parameters. Toggle the button on the bottom left of the screen to open and close the Sidebar. Each layer is toggleable and has its own set of expandable controls inside the Sidebar.
## Areas for improvement:
- There is currently a bug whereby changes to the zoom level made by the user (using the mouse scroll wheel, for example, or double-clicking on the map) are not reflected in the state of the application. This is visible when using one of these methods and then the zoom buttons in the bottom left of the UI. An improvement should be that all zoom state is maintained as a single source of truth.
- I would like to redesign the structure of the state in the application. Ideally, it is more granular and made scalable with dynamic keys for layer-related properties.
- Tooltip performance seems to be an issue that should be investigated and improved.
- I would like to improve the way the theme is created and shared throughout the app - currently, the Material Design theme does not allow for control over every use of `font-size`, for example. This means there are a number of places in the app where there are overrides of certain CSS properties.
- A feature improvement could be the implementation of a select that allows the user to toggle the Basemap.
