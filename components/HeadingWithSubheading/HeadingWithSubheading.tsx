import { ComponentType, JSX } from 'react';

export default function HeadingWithSubheading({
  heading,
  headingLevel: Heading = 'h2',
  subheading1,
  subheading1Icon: Subheading1Icon,
  subheading2,
  subheading2Icon: Subheading2Icon,
}: {
  heading: string;
  headingLevel?: keyof JSX.IntrinsicElements;
  subheading1?: string;
  subheading1Icon?: ComponentType<{ className?: string }>;
  subheading2?: string;
  subheading2Icon?: ComponentType<{ className?: string }>;
}) {
  return (
    <>
      <div className="mb-4">
        { heading && (
          <div className="text-lg font-semibold text-foreground-bright">
            <Heading>{heading}</Heading>
          </div>
        )}

        {(subheading1 || subheading2) && (
          <div className="flex items-center text-sm mb-2">
            {subheading1 && (
              <div className="flex items-center">
                {Subheading1Icon && <Subheading1Icon className="h-4 w-4 mr-1" />}
                <span>{subheading1}</span>
              </div>
            )}
            
            {subheading2 && (
              <div className="flex items-center">
                <div className="mx-2">|</div>
                <div className="flex items-center">
                  {Subheading2Icon && <Subheading2Icon className="h-4 w-4 mr-1" />}
                  <span>{subheading2}</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
