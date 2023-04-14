# react-infinite-scroll-with-intersection-observer-component

A React component for infinite scroll implemented with Intersection Observer

## Install

```
npm add react-infinite-scroll-with-intersection-observer-component

or

yarn add react-infinite-scroll-with-intersection-observer-component
```

## Props

| name                    | required     | description
|------------------------ |--------------|--------------------------------------------
| **items**               | Yes          | List of zero or more React Elements.
| **onLoadMore**          | No           | Function. The function that gets called when the element being observed comes into view.
| **enabled**             | No           | Boolean. The onLoadMore callback function will only be called if enabled is **true**.
| **threshold**           | No           | Number. Forwarded to threshold option of the Intersection Observer. Defaults to 1 if not provided.
| **observeIndex**        | No           | Number. Index of the item to be observed by the Intersection Observer. Defaults to the last item in the list if not provided or if the provided value is invalid.
| **itemParentType**      | No           | String (Any valid html tag name). Type of html tag which wraps over each element in the **items** list. Defaults to **\<li\>** if not provided.

## Usage Example

```jsx
import React, { useState } from 'react';
import { InfiniteScroll } from 'react-infinite-scroll-with-intersection-observer-component';

function App() {
  const getInitial = () => {
    const items = [];

    // Add 10 items initially
    for (let i = 0; i < 10; i++) {
      items.push(<div key={i}>{i}</div>)
    }

    return items
  }

  const [items, setItems] = useState(getInitial());
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="App">
      <div style={{
        height: "500px",
        overflow: "scroll"
      }}>
      <InfiniteScroll
        enabled={enabled}
        onLoadMore={() => {
          setEnabled(false);

          setTimeout(() => {
            // Add 10 more items once the observed element becomes visible on
            setItems((items) => {
              const newItems  = [...items];

              for (let i = items.length; i < items.length + 10; i++) {
                newItems.push(<div key={i}>{i}</div>);
              }

              return newItems
  
            })
            setEnabled(true);
          }, 2000)
        }} 
        itemParentType="h1"
        items={items}
      />
      {enabled ? null : "Loading..."}
      </div>
    </div>
  );
}

export default App;
```