'use client';

import * as React from 'react';

export const useToggle = (initial = false) => {
  const [isOpen, setIsOpen] = React.useState(initial);

  const handleOpen = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleToggle = React.useCallback(() => {
    setIsOpen((v) => !v);
  }, []);

  return { isOpen, setIsOpen, handleClose, handleOpen, handleToggle };
};
