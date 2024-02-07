import type { PageLoad } from "./$types";

export const load: PageLoad = () => {
  return {
    date: new Date(2024, 1, 28, 18, 30, 0),
  };
};
