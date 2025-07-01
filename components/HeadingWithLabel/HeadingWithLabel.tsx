import { HeadingTag } from '@/types/html';
import { ComponentType, useId } from 'react';
import { 
  headingLevelToTailwindTextSize, 
  headingLevelToTailwindHeightOrWidth 
} from '@/utils/headings';

export type HeadingWithLabelProps = {
  label?: string;
  headingLevel?: HeadingTag;
  heading1?: string;
  heading1Icon?: ComponentType<{ className?: string }>;
  heading2?: string;
  heading2Icon?: ComponentType<{ className?: string }>;
};

export default function HeadingWithSubheading({
  label,
  headingLevel = 'h2',
  heading1,
  heading1Icon: Heading1Icon,
  heading2,
  heading2Icon: Heading2Icon,
}: HeadingWithLabelProps) {
  const Heading = headingLevel;
  const id = useId();
  const iconSize = headingLevelToTailwindHeightOrWidth(headingLevel);

  return (
    <div>
      { label && (
        <label htmlFor={id} className="block text-sm font-medium text-foreground-bright mb-1">
          {label}
        </label>
      )}

      {(heading1 || heading2) && (
        <Heading id={id} className={`flex items-center mb-2 ${headingLevelToTailwindTextSize(headingLevel)}`}>
          {heading1 && (
            <span className="inline-flex items-center text-foreground-bright">
              {Heading1Icon && <Heading1Icon className={`flex-shrink-0 size-${iconSize} mr-1`} />}
              {heading1}
            </span>
          )}
          
          {heading1 && heading2 && <span className="mx-2">|</span>}

          {heading2 && (
            <span className="inline-flex items-center">
              {Heading2Icon && <Heading2Icon className={`flex-shrink-0 size-${iconSize} mr-1`} />}
              {heading2}
            </span>
          )}
        </Heading>
      )}
    </div>
  );
}
