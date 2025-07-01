import HeadingWithLabel, { HeadingWithLabelProps } from '../HeadingWithLabel';
import Pills from '../Pills/Pills';

export type HeadingWithTagsProps = HeadingWithLabelProps & {
  tags?: string[];
}

export default function HeadingWithTags({
  label,
  headingLevel,
  heading1,
  heading1Icon: Heading1Icon,
  heading2,
  heading2Icon: Heading2Icon,
  tags = [],
}: HeadingWithTagsProps) {
  return (
    <>
      <div className="mb-4">
        <HeadingWithLabel
          label={label}
          headingLevel={headingLevel}
          heading1={heading1}
          heading1Icon={Heading1Icon}
          heading2={heading2}
          heading2Icon={Heading2Icon}
        />
      </div>
      { tags && (
        <div className="mb-4">
          <Pills labels={tags} />
        </div>
      )}
    </>
  );
}
