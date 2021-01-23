// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isLastIndexInArray = (array: any[], index: number): boolean => {
  return array[index + 1] === undefined;
};
