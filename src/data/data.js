import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

// Function to create React elements
const createIconElement = (IconComponent) => React.createElement(IconComponent);

// Features Data
export const featuresData = [
  {
    id: 1,
    icon: createIconElement(FaHtml5),
    title: "HTML"
  },
  {
    id: 2,
    icon: createIconElement(FaCss3),
    title: "CSS"
  },
  {
    id: 3,
    icon: createIconElement(IoLogoJavascript),
    title: "JAVASCRIPT"
  },
  {
    id: 4,
    icon: createIconElement(FaReact),
    title: "React"
  },
  {
    id: 5,
    icon: createIconElement(SiRedux),
    title: "REDUX"
  },
  {
    id: 6,
    icon: createIconElement(SiExpress),
    title: "EXPRESS"
  },
  {
    id: 7,
    icon: createIconElement(DiMongodb),
    title: "MONGODB"
  },
  {
    id: 8,
    icon: createIconElement(FaNodeJs),
    title: "NODEJS"
  },
  {
    id: 9,
    icon: createIconElement(FaPython),
    title: "PYTHON"
  }
];
