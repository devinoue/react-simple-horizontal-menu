import { useScroll } from '../../hooks/useScroll';

import classnames from 'classnames';
import React, { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'div'> & {
  isSelected: boolean;
  itemId: number;
  label: string;
  onSelectedIdSet: (id: number) => void;
  scrollIntoViewConfig?: {
    behavior?: ScrollBehavior | undefined;
    block?: ScrollLogicalPosition | undefined;
    inline?: ScrollLogicalPosition | undefined;
  };
};

export function CenteredLink(props: Props) {
  const {
    label,
    onSelectedIdSet,
    itemId,
    className,
    isSelected,
    scrollIntoViewConfig,
    ...rest
  } = props;

  const [ref, moveTo] = useScroll(
    scrollIntoViewConfig ?? {
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    },
  );

  return (
    <div
      className={classnames(
        'react-simple-horizontal-menu-item-common',
        isSelected
          ? 'react-simple-horizontal-menu-item-selected'
          : 'react-simple-horizontal-menu-item-not-selected',
        className,
      )}
      onClick={() => {
        setTimeout(() => {
          onSelectedIdSet(itemId);
          moveTo();
        }, 0);
      }}
      ref={ref}
      {...rest}
    >
      {label}
    </div>
  );
}
