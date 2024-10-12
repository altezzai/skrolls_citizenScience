import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/Components/ui/dialog';
import { NewGroupForm } from '../NewGroupForm/NewGroupForm';
import plus_icon from '../../assets/plus.svg';

export const CreateCommunityTrigger = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex cursor-pointer items-center justify-center gap-2 rounded-3xl bg-textarea px-6 py-2">
          <img src={plus_icon} className="w-5" alt="plus" draggable="false" />
          New
        </div>
      </DialogTrigger>

      <DialogContent className="flex flex-col items-center px-2 max-xl:w-[440px] max-xl:py-4">
        <DialogHeader className="self-start pl-4">
          <DialogTitle>Create a Community</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <NewGroupForm />
      </DialogContent>
    </Dialog>
  );
};
