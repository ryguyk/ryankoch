import React from 'react';
import { MapPin, Laptop, Medal } from "lucide-react";
import IconHeading from './IconHeading';

export default {
  title: 'IconHeading',
  component: IconHeading,
};

const heading1 = 'Main Heading';
const MainIcon = Medal;
const headingLevel = 'h2';
const subheading1 = 'This is a subheading';
const Icon1 = MapPin;
const subheading2 = 'This is another subheading';
const Icon2 = Laptop;

export const Default = () => 
  <IconHeading
    icon={MainIcon}
    heading={heading1} 
    headingLevel={headingLevel}
    subheading1={subheading1}
    subheading1Icon={Icon1}
    subheading2={subheading2}
    subheading2Icon={Icon2}
  />;

export const NoSubheading = () => 
  <IconHeading
    icon={MainIcon}
    heading={heading1} 
    headingLevel={headingLevel} 
  />;

export const Subheading1 = () => 
  <IconHeading
    icon={MainIcon}
    heading={heading1} 
    headingLevel={headingLevel} 
    subheading1={subheading1} 
    subheading1Icon={Icon1}
  />;

export const Subheading2 = () => 
  <IconHeading
    icon={MainIcon}
    heading={heading1} 
    headingLevel={headingLevel} 
    subheading2={subheading2} 
    subheading2Icon={Icon2}
  />;

export const NoIcons = () => 
  <IconHeading
    icon={MainIcon}
    heading={heading1} 
    headingLevel={headingLevel} 
    subheading1={subheading1} 
    subheading2={subheading2}
  />;
