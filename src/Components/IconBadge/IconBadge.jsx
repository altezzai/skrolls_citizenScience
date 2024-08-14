import React from 'react';
import { cn } from '../../utils/utils';

const IconBadge = ({ children, flag = false, notifyCount = 0, className }) => {
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, { draggable: false })
  );
  return (
    <div className={cn('relative grid place-items-center', className)}>
      {childrenWithProps}
      {flag && (
        <div
          className={cn(
            'right-0 top-0 bg-primary text-white',
            {
              '-top-1 left-3 h-4 w-4': !!notifyCount,
              'w-fit': notifyCount > 9,
            },
            'absolute inline-flex items-center justify-center rounded-full border-2 border-white p-[3px] text-[10px] leading-none dark:border-gray-900'
          )}
        >
          {!!notifyCount && (notifyCount >= 100 ? '99+' : notifyCount)}
        </div>
      )}
    </div>
  );
};

export default IconBadge;
