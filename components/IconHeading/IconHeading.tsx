import { ComponentType } from 'react';
import HeadingWithSubheading, { HeadingWithSubheadingProps } from '../HeadingWithSubheading';

export type IconHeadingProps = {
  icon: ComponentType<{ className?: string }>;
} & HeadingWithSubheadingProps;

export default function IconHeading({
  icon: Icon,
  heading,
  headingLevel,
  subheading1,
  subheading1Icon: Subheading1Icon,
  subheading2,
  subheading2Icon: Subheading2Icon,
}: IconHeadingProps) {
  return (
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
        <Icon className="h-6 w-6 text-white" />
      </div>
      
      <div className="flex-1">
        <HeadingWithSubheading 
          heading={heading}
          headingLevel={headingLevel}
          subheading1={subheading1}
          subheading1Icon={Subheading1Icon}
          subheading2={subheading2}
          subheading2Icon={Subheading2Icon}
        />
      </div>
    </div>
  );
}
