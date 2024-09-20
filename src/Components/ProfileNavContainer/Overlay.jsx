import React, { useState } from 'react';
import add_icon from '../../assets/plus.svg';
import work_img from '../../assets/overlay-panel.png';
import article_icon from '../../assets/article.svg';
import book_icon from '../../assets/book.svg';
import thesis_icon from '../../assets/thesis.svg';
import dissertation_icon from '../../assets/dissertation.svg';
import conf_icon from '../../assets/conference.svg';
import presentation_icon from '../../assets/presentation.svg';
import question_icon from '../../assets/question_paper.svg';
import others_icon from '../../assets/others.svg';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/Components/ui/dialog';
import { PublicationForm } from './PublicationForm';

export const Overlay = () => {
  const [selection, setSelection] = useState('');

  const SUBMISSION_TYPES = [
    'Article',
    'Book',
    'Thesis',
    'Dissertation',
    'Conference Proceedings',
    'Presentations',
    'Question Papers',
    'Others',
  ];

  const submissionIcons = {
    Article: article_icon,
    Book: book_icon,
    Thesis: thesis_icon,
    Dissertation: dissertation_icon,
    'Conference Proceedings': conf_icon,
    Presentations: presentation_icon,
    'Question Papers': question_icon,
    Others: others_icon,
  };

  return (
    <div className="h-fit w-full">
      <Dialog>
        <DialogTrigger className="w-full">
          {SUBMISSION_TYPES.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelection(item)}
              className="border-border-sec group box-border flex h-16 cursor-pointer items-center gap-4 border-b-[1px] from-white via-white to-primary px-2 py-1 transition-all hover:border-primary hover:bg-gradient-to-r"
            >
              <img
                src={submissionIcons[item]}
                className="h-11 rounded-sm bg-bg-muted p-2 group-hover:bg-red-100"
                alt={item}
                draggable="false"
              />
              <span className="font-medium text-text-hard group-hover:text-primary">
                {item}
              </span>
              <span className="invisible ml-auto flex items-center gap-2 text-sm text-white group-hover:visible">
                <img src={add_icon} alt="create" className="h-5 invert" />
                Create
              </span>
            </div>
          ))}
        </DialogTrigger>
        <DialogContent
          className="px-2 py-3"
          t
        >
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
            <PublicationForm selection={selection} />
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <div className="flex w-full items-center justify-center">
        <img
          src={work_img}
          alt="work image"
          draggable="false"
          className="w-60"
        />
      </div>
    </div>
  );
};
