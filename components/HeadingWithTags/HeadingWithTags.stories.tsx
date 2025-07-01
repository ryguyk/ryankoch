import React from 'react';
import { MapPin, Laptop } from "lucide-react";
import HeadingWithTags from './HeadingWithTags';

export default {
  title: 'HeadingWithTags',
  component: HeadingWithTags,
};

const label = "Label";
const headingLevel = 'h3';
const heading1 = 'This is a subheading';
const Icon1 = MapPin;
const heading2 = 'This is another subheading';
const Icon2 = Laptop;
const tags = ['Tag1', 'Tag2', 'Tag3'];

export const Default = () => 
  <HeadingWithTags 
    label={label} 
    headingLevel={headingLevel}
    heading1={heading1}
    heading1Icon={Icon1}
    heading2={heading2}
    heading2Icon={Icon2}
    tags={tags}
  />;
