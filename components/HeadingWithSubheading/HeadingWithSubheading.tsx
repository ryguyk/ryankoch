import { HeadingTag } from '@/types/html';
import { ComponentType } from 'react';
import { headingLevelToTailwindTextSize } from '@/utils/headings';

export type HeadingWithSubheadingProps = {
  heading: string;
  headingLevel?: HeadingTag;
  subheading1?: string;
  subheading1Icon?: ComponentType<{ className?: string }>;
  subheading2?: string;
  subheading2Icon?: ComponentType<{ className?: string }>;
};

export default function HeadingWithSubheading({
  heading,
  headingLevel = 'h2',
  subheading1,
  subheading1Icon: Subheading1Icon,
  subheading2,
  subheading2Icon: Subheading2Icon,
}: HeadingWithSubheadingProps) {
  const Heading = headingLevel;
  
  return (
    <div>
      { heading && (
        <div className={`${headingLevelToTailwindTextSize(headingLevel)} font-semibold text-foreground-bright`}>
          <Heading>{heading}</Heading>
        </div>
      )}

      {(subheading1 || subheading2) && (
        <div className="flex items-center text-sm mb-2">
          {subheading1 && (
            <div className="flex items-center text-foreground-bright">
              {Subheading1Icon && <Subheading1Icon className="h-4 w-4 mr-1" />}
              <span>{subheading1}</span>
            </div>
          )}
          
          {subheading1 && subheading2 && <span className="mx-2">|</span>}

          {subheading2 && (
            <div className="flex items-center">
              <div className="flex items-center">
                {Subheading2Icon && <Subheading2Icon className="h-4 w-4 mr-1" />}
                <span>{subheading2}</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
