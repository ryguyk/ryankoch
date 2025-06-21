import { ComponentType, JSX } from 'react';

export default function IconHeading({
  Icon,
  title,
  headingLevel: Heading = 'h2',
  SubtitleIcon,
  subtitle,
}: {
  Icon: ComponentType<{ className?: string }>;
  title: string,
  headingLevel?: keyof JSX.IntrinsicElements,
  SubtitleIcon?: ComponentType<{ className?: string }>;
  subtitle?: string,
}) {
  return (
    <div className="flex items-start mb-4">
      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
        <Icon className="h-6 w-6 text-white" />
      </div>
      
      <div className="flex-1">
        <Heading className="text-lg font-bold mb-1 text-foreground-bright">{title}</Heading>
        {subtitle && (
          <div className="flex items-center text-sm mb-2">
            {SubtitleIcon && <SubtitleIcon className="h-4 w-4 mr-1" />}
            <span>{subtitle}</span>
          </div>
        )}
      </div>
    </div>
  );
}
