import React from 'react';
import { MapPin, Laptop } from "lucide-react";
import PageSection from './PageSection';

export default {
  title: 'PageSection',
  component: PageSection,
};

const PageSectionIcon = Laptop;
const heading1 = 'Page Section Heading';
const headingLevel = 'h2';
const pageSectionSubheading = 'Page Section Subheading';
const pageSectionSubheadingIcon = MapPin;
const subsectionLabel = 'Page Subsection Label';
const subsectionHeading1 = 'Page Subsection Heading1';
const subsectionIcon1 = MapPin;
const subsectionHeading2 = 'Page Section Heading 2';
const tags = ['Tag1', 'Tag2', 'Tag3'];
const description = ['This is a description for the page subsection. It provides additional context and information about the content that follows.'];
const bullets = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget facilisis quam felis id mauris.',
  'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.',
  'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
];
const subsection = {
  label: subsectionLabel,
  heading1: subsectionHeading1,
  heading1Icon: subsectionIcon1,
  heading2: subsectionHeading2,
  tags,
  description,
  bullets
};
const pageSubsections = [
  subsection, subsection, subsection,
];

export const Default = () => 
  <PageSection
    icon={PageSectionIcon}
    heading={heading1} 
    headingLevel={headingLevel}
    subheading2={pageSectionSubheading}
    subheading2Icon={pageSectionSubheadingIcon}
    pageSubsections={pageSubsections}
  />;
