# React-simple-horizontal-menu

Simplest React horizontal menu library.

## Features

- React menu components for easy and fast web development.
- Support Right-To-Left smooth scrool.
- Low bundle size with fantastic performance.
- Flexible menu positioning.
- Easy styling and customisation.

## Install

with npm

```bash
npm i react-simple-horizontal-menu
```

with yarn

```bash
yarn add react-simple-horizontal-menu
```

## usage

```tsx
import React, { useState } from 'react';
import { HorizontalMenu } from 'react-simple-horizontal-menu';
import '../../node_modules/react-simple-horizontal-menu/dist/styles/core.css';

const items = [...Array(100)].map((_, i) => {
  return {
    id: i,
    label: `No. ${i}`,
  };
});

export default function Test() {
  const [id, setId] = useState(0);

  const onChange = (_id: number) => {
    setId(_id);
  };

  const getLabel = items.find((item) => item.id === id)?.label ?? null;

  return (
    <div>
      dd
      <HorizontalMenu items={items} onChange={onChange} rtl={true} />
      <div
        style={{
          marginTop: '16px',
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        Selected value: {getLabel}
      </div>
    </div>
  );
}
```

## API

## Licence

MIT @ devinoue
