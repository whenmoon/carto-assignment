[![Netlify Status](https://api.netlify.com/api/v1/badges/d15bf119-2bcb-45df-abeb-166c5b6e9a65/deploy-status)](https://app.netlify.com/sites/compassionate-leavitt-917108/deploys)
# Tom Belton Carto Assignment
Carto assignment using deck.gl and the Carto module
## Screenshots:
<img width="1680" alt="Screenshot 2024-04-26 at 13 28 32" src="https://github.com/whenmoon/carto-assignment/assets/33122888/f806885e-253f-486f-afb2-1b49db192361">

<img width="1678" alt="Screenshot 2024-04-26 at 13 36 34" src="https://github.com/whenmoon/carto-assignment/assets/33122888/4b237eae-c877-4ef7-b7c8-5ce382c47d8b">

<img width="1679" alt="Screenshot 2024-04-26 at 13 38 57" src="https://github.com/whenmoon/carto-assignment/assets/33122888/6758819e-801d-4d53-9af6-c952b07c93bf">

<img width="1678" alt="Screenshot 2024-04-26 at 13 41 46" src="https://github.com/whenmoon/carto-assignment/assets/33122888/aa0c9104-4978-4d6a-b49d-c524cf68b3d8">

## Public app:
The publicly available app is running on Netlify [here](https://main--compassionate-leavitt-917108.netlify.app/).
## App features:
- Layer editor:
  - Layer visibility toggle
  - Color pickers for layer fill and outline colors
  - Point and outline size controllers (if available for layer)
- Tootltip
- Togglable editor
- Programmatic map zoom
## Instructions:
The app utilizes a Sidebar component which serves as the controller for the variable UI parameters. Toggle the button on the bottom left of the screen to open and close the Sidebar. Each layer is can be shown or hidden independently and has its own set of expandable controls inside the Sidebar.
## Areas for improvement:
- There is currently a bug whereby changes to the zoom level made by the user (using the mouse scroll wheel, for example, or double-clicking on the map) are not reflected in the state of the application. This is visible when using one of these methods and then the zoom buttons in the bottom left of the UI. An improvement should be that all zoom state is maintained as a single source of truth.
- I would like to redesign the structure of the state in the application. Ideally, it is more granular and made scalable with dynamic keys for layer-related properties.
- Tooltip performance seems to be an issue that should be investigated and improved.
- I would like to improve the way the theme is created and shared throughout the app - currently, the Material Design theme does not allow for control over every use of `font-size`, for example. This means there are a number of places in the app where there are overrides of certain CSS properties.
- A feature improvement could be the implementation of a select that allows the user to toggle the Basemap.
