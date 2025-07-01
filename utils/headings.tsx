import { HeadingTag } from '@/types/html';

const nextLevels: Record<HeadingTag, HeadingTag> = {
  'h1': 'h2',
  'h2': 'h3',
  'h3': 'h4',
  'h4': 'h5',
  'h5': 'h6',
  'h6': 'h6',
};

const headingLevelToTextSize: Record<HeadingTag, string> = {
  'h1': 'text-2xl',
  'h2': 'text-xl',
  'h3': 'text-lg',
  'h4': 'text-base',
  'h5': 'text-sm',
  'h6': 'text-xs',
};

const headingLevelToHeightOrWidth: Record<HeadingTag, string> = {
  'h1': '10',
  'h2': '8',
  'h3': '6',
  'h4': '5',
  'h5': '4',
  'h6': '3',
};

export const getNextHeadingLevel = (currentLevel: HeadingTag): HeadingTag =>
  nextLevels[currentLevel] || 'h6';

export const headingLevelToTailwindTextSize = (headingLevel: HeadingTag): string =>
  headingLevelToTextSize[headingLevel] || 'text-base';

export const headingLevelToTailwindHeightOrWidth = (headingLevel: HeadingTag): string => 
  headingLevelToHeightOrWidth[headingLevel] || '3';
