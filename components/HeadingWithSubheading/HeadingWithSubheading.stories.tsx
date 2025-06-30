import React from 'react';
import { MapPin, Laptop } from "lucide-react";
import HeadingWithSubheading from './HeadingWithSubheading';

export default {
  title: 'HeadingWithSubheading',
  component: HeadingWithSubheading,
};

const heading1 = 'Main Heading';
const headingLevel = 'h2';
const subheading1 = 'This is a subheading';
const Icon1 = MapPin;
const subheading2 = 'This is another subheading';
const Icon2 = Laptop;

export const Default = () => 
  <HeadingWithSubheading 
    heading={heading1} 
    headingLevel={headingLevel}
    subheading1={subheading1}
    subheading1Icon={Icon1}
    subheading2={subheading2}
    subheading2Icon={Icon2}
  />;

export const NoSubheading = () => 
  <HeadingWithSubheading 
    heading={heading1} 
    headingLevel={headingLevel} 
  />;

export const OneSubheading = () => 
  <HeadingWithSubheading 
    heading={heading1} 
    headingLevel={headingLevel} 
    subheading1={subheading1} 
    subheading1Icon={Icon1}
  />;

export const NoIcons = () => 
  <HeadingWithSubheading 
    heading={heading1} 
    headingLevel={headingLevel} 
    subheading1={subheading1} 
    subheading2={subheading2}
  />;
