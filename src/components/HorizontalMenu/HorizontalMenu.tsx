import { CenteredLink } from '../CenteredLink/CenteredLink';

import classnames from 'classnames';
import React, { useCallback, useEffect, useState } from 'react';

export type ItemsBaseType = { id: number; label: string };

type Props = {
  defaultId?: number;
  items: ItemsBaseType[];
  // eslint-disable-next-line autofix/no-unused-vars
  onChange?: (id: number) => void;
  rtl?: boolean;
  scrollIntoViewConfig?: {
    behavior?: ScrollBehavior | undefined;
    block?: ScrollLogicalPosition | undefined;
    inline?: ScrollLogicalPosition | undefined;
  };
};

export function HorizontalMenu(props: Props) {
  const {
    items,
    onChange = (_id: number) => {},
    defaultId = 0,
    rtl = false,
    scrollIntoViewConfig = {
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    },
  } = props;

  const [selectedId, setSelectedId] = useState(defaultId);

  const onSelectedIdSet = useCallback((id: number) => {
    setSelectedId(id);
  }, []);

  useEffect(() => {
    onChange(selectedId);
  }, [selectedId]);

  return (
    <div>
      <div
        className={classnames(
          'react-simple-horizontal-menu-container',
          rtl ? 'react-simple-horizontal-menu-rtl' : null,
        )}
      >
        <div className={'react-simple-horizontal-menu-items-container'}>
          {items.map((item) => (
            <CenteredLink
              isSelected={selectedId === item.id}
              itemId={item.id}
              key={item.id}
              label={item.label}
              onSelectedIdSet={onSelectedIdSet}
              scrollIntoViewConfig={scrollIntoViewConfig}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
