import React from 'react';
import { MapPin, Laptop } from "lucide-react";
import PageSubsection from './PageSubsection';

export default {
  title: 'PageSubsection',
  component: PageSubsection,
};

const label = 'Label';
const headingLevel = 'h2';
const heading1 = 'This is heading part 1';
const Icon1 = MapPin;
const heading2 = 'This is heading part 2';
const Icon2 = Laptop;
const tags = ['Tag1', 'Tag2', 'Tag3'];
const description = ['This is a description for the page subsection. It provides additional context and information about the content that follows.'];
const bullets = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget facilisis quam felis id mauris.',
  'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.',
  'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
];

export const Default = () => 
  <PageSubsection 
    label={label} 
    headingLevel={headingLevel}
    heading1={heading1}
    heading1Icon={Icon1}
    heading2={heading2}
    heading2Icon={Icon2}
    tags={tags}
    description={description}
    bullets={bullets}
  />;
