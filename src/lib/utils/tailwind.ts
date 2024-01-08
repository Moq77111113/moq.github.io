export const tw = (...classes: (string | boolean | undefined)[]) =>
  classes.filter(Boolean).join(' ')
