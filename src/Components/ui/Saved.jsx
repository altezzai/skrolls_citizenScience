import { cn } from '@/lib/utils';
import { BookMarkIcon } from '../../assets/component/BookMarkIcon';
import React, { useState } from 'react';

export const Saved = () => {
  const [saved, setSaved] = useState(false);

  const handleSaveClick = () => {
    setSaved(!saved);
  };
  return (
    <div
      className="flex cursor-pointer items-center rounded-full p-1 hover:bg-red-50"
      onClick={() => handleSaveClick()}
    >
      <BookMarkIcon
        className={cn('w-6 text-black', {
          'fill-black': saved,
          'fill-none': !saved,
        })}
      />
    </div>
  );
};
