- Step by Step

- Delete every from `index.html` and `index.js`
- Inside `index.html` create a div `<div id="root"></div>`
- Inside `index.js` write the following

  - import `React` and `ReactDOM`

  ```
  import React from 'react'
  import ReactDOM from 'react-dom/client'

  ```

  - Select the `#root`

  ```
  const root = ReactDOM.createRoot(document.querySelector('#root'))
  ```

  - create a component / function

  ```
  const App = function(){
    return <h1>Hello World!!!</h1>
  }

  ```

  - Render the `App` component inside `root`

  ```
  root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  );
  ```
