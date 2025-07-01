import IconHeading, { IconHeadingProps } from '../IconHeading';
import PageSubsection, { PageSubsectionProps } from '../PageSubsection';
import { getNextHeadingLevel } from '../../utils/headings';

export default function PageSection({
  icon: Icon,
  heading,
  headingLevel,
  subheading1,
  subheading1Icon: Subheading1Icon,
  subheading2,
  subheading2Icon: Subheading2Icon,
  pageSubsections = [],
}: IconHeadingProps & {
  pageSubsections: PageSubsectionProps[]
}) {
  return (
    <section className="border-b-1 last:border-b-0 text-foreground p-6 pb-10 mb-6">
      <IconHeading
        icon={Icon}
        heading={heading}
        headingLevel={headingLevel}
        subheading1={subheading1}
        subheading1Icon={Subheading1Icon}
        subheading2={subheading2}
        subheading2Icon={Subheading2Icon}
      />      
      {pageSubsections.map((pageSubsection, index) => (
        <PageSubsection
          key={index}
          label={pageSubsection.label}
          headingLevel={getNextHeadingLevel(headingLevel || 'h2')}
          heading1={pageSubsection.heading1}
          heading1Icon={pageSubsection.heading1Icon}
          heading2={pageSubsection.heading2}
          heading2Icon={pageSubsection.heading2Icon}
          tags={pageSubsection.tags}
          description={pageSubsection.description}
          bullets={pageSubsection.bullets}
        />
      ))}
    </section>
  );
}
