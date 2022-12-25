import React, { RefObject, useCallback, useRef } from 'react';

type Props = {
  behavior?: ScrollBehavior | undefined;
  block?: ScrollLogicalPosition | undefined;
  inline?: ScrollLogicalPosition | undefined;
};

export const useScroll = (
  props: Props,
): [RefObject<HTMLDivElement>, () => void] => {
  const { behavior = 'smooth', block = 'nearest', inline = 'center' } = props;
  const ref = useRef<HTMLDivElement>(null);
  const moveTo = useCallback(() => {
    ref?.current?.scrollIntoView({
      behavior,
      block,
      inline,
    });
  }, []);
  return [ref, moveTo];
};
