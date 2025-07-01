import HeadingWithTags, { HeadingWithTagsProps } from '../HeadingWithTags';

export type PageSubsectionProps = HeadingWithTagsProps & {
  description?: string[];
  bullets?: string[];
}

export default function IconHeading({
  label,
  headingLevel,
  heading1,
  heading1Icon: Heading1Icon,
  heading2,
  heading2Icon: Heading2Icon,
  tags = [],
  description,
  bullets = [],
}: PageSubsectionProps) {
  return (
    <section className="mb-6">
      <div className="mb-4">
        <HeadingWithTags
          label={label}
          headingLevel={headingLevel}
          heading1={heading1}
          heading1Icon={Heading1Icon}
          heading2={heading2}
          heading2Icon={Heading2Icon}
          tags={tags}
        />
      </div>
      <div>
        {description?.map((paragraph, index) => (
          <p key={index} className="text-sm mt-8 italic text-foreground-bright">{paragraph}</p>
        ))}  
        
        {bullets.length > 0 && (
          <ul className="list-disc pl-5 space-y-1">
            {bullets.map((bullets, index) => (
              <li key={index} className="text-sm">{bullets}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
