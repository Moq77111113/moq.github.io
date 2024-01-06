export const tw = (...classes: (string | boolean)[]) =>
  classes.filter(Boolean).join(' ')
