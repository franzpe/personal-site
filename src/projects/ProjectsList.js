import React from "react";

import classes from "./ProjectsList.module.scss";
import ProjectsListItem from "./ProjectsListItem";
import localization from "_utils/localization";

import approvalApp1 from "_assets/images/approval_app_1-min.png";
import approvalApp2 from "_assets/images/approval_app_2-min.png";
import approvalApp3 from "_assets/images/approval_app_3-min.png";
import approvalApp4 from "_assets/images/approval_app_4-min.png";
import bezhistaminovo1 from "_assets/images/bezhistaminovo1-min.png";
import bezhistaminovo2 from "_assets/images/bezhistaminovo2-min.png";
import dontEatYourBoogers from "_assets/images/DontEatYourBoogers-min.png";
import cbs from "_assets/images/cbs-en.png";
import proxenta1 from "_assets/images/proxenta1-min.png";
import proxenta2 from "_assets/images/proxenta2-min.png";
import proxenta3 from "_assets/images/proxenta3-min.png";

export const projects = [
  {
    name: localization.approvalAppName,
    personal: false,
    slug: "approval-app",
    url: "https://norderp.com",
    images: [
      { name: "Dashboard", src: approvalApp1 },
      { name: "Document details", src: approvalApp2 },
      { name: "Dashboard mobile", src: approvalApp3 },
      { name: "Search", src: approvalApp4 }
    ],
    Description: () => <p>{localization.approvalAppDesc}</p>,
    descText: localization.approvalAppDesc
  },
  {
    name: localization.proxentaAppName,
    personal: false,
    slug: "proxenta-questionnaire",
    url: "https://dotaznik.proxenta.sk",
    images: [
      { name: "Questionnaire", src: proxenta2 },
      { name: "Results", src: proxenta3 },
      { name: "Login", src: proxenta1 }
    ],
    Description: () => <p>{localization.proxentaAppDesc}</p>,
    descText: localization.proxentaAppDesc
  },
  {
    name: "Bezhistaminovo",
    personal: true,
    slug: "bezhistaminovo",
    url: "https://bezhistaminovo.sk",
    images: [
      { name: "Dashboard", src: bezhistaminovo1 },
      { name: "Recipe details", src: bezhistaminovo2 }
    ],
    Description: () => <p>{localization.bezhistaminovo}</p>,
    descText: localization.bezhistaminovo
  },
  {
    name: "Dont Eat Your Boogers",
    personal: false,
    slug: "dont-eat-your-boogers",
    url: "https://boogers.losporkos.com",
    images: [{ name: "apple-preview", src: dontEatYourBoogers }],
    Description: () => <p>{localization.dontEatYourBoogers}</p>,
    descText: localization.dontEatYourBoogers
  },
  {
    name: localization.cbsName,
    personal: false,
    slug: "credit-bureau-system",
    url: "https://www.crif.com/",
    images: [{ name: "cbs", src: cbs }],
    Description: () => <p>{localization.cbsDesc}</p>,
    descText: localization.cbsDesc
  }
];

function ProjectsList() {
  return (
    <ul className={classes.list}>
      {projects.map(project => (
        <ProjectsListItem key={project.name} project={project} />
      ))}
    </ul>
  );
}

export default ProjectsList;
