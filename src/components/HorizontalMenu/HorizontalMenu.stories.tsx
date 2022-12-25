import { HorizontalMenu } from './HorizontalMenu';
import dayjs from 'dayjs';
import { ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';

export default {
  component: HorizontalMenu,
  render: (args) => <ExampleRender {...args} />,
} as ComponentMeta<typeof HorizontalMenu>;

export const Default = {
  args: {
    defaultId: 0,
    rtl: true,
    scrollIntoViewConfig: {
      inline: 'center',
    },
  },
};

type HorizontalMenuProps = React.ComponentPropsWithRef<typeof HorizontalMenu>;

const defaultMonthSpanNum = 100;

const items = [...Array(defaultMonthSpanNum)]
  .map((_, i) => i)
  .reverse()
  .map((num) => {
    return {
      id: num,
      label: dayjs(new Date()).subtract(num, 'M').format('YYYY/MM'),
    };
  });

function ExampleRender(props: HorizontalMenuProps) {
  const { defaultId, rtl, scrollIntoViewConfig } = props;

  const [yearMonthId, setYearMonthId] = useState(0);

  const onChange = (id: number) => {
    setYearMonthId(id);
  };

  const getYearMonth =
    items.find(({ id }) => id === yearMonthId)?.label ?? null;

  return (
    <div>
      <HorizontalMenu
        defaultId={defaultId}
        items={items}
        onChange={onChange}
        rtl={rtl}
        scrollIntoViewConfig={scrollIntoViewConfig}
      />

      <div
        style={{
          marginTop: '16px',
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        Selected value: {getYearMonth}
      </div>
    </div>
  );
}
