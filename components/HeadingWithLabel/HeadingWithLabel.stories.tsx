import React from 'react';
import { MapPin, Laptop } from "lucide-react";
import HeadingWithLabel from './HeadingWithLabel';

export default {
  title: 'HeadingWithLabel',
  component: HeadingWithLabel,
};

const label = 'Label';
const headingLevel = 'h3';
const heading1 = 'This is heading part 1';
const Icon1 = MapPin;
const heading2 = 'This is heading part 2';
const Icon2 = Laptop;

export const Default = () => 
  <HeadingWithLabel
    label={label}
    headingLevel={headingLevel}
    heading1={heading1}
    heading1Icon={Icon1}
    heading2={heading2}
    heading2Icon={Icon2}
  />;
