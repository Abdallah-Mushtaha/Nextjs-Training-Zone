import React from "react";
import { BreadcrumbWithCustomSeparator } from "./BreadcrumbDemo";

import Videos from "./Video";
import CourseMaterial from "./CourseMaterial";
import Comments from "./Comments";

export default function Basic() {
  return (
    <div className="text-gray-500 flex-col justify-start items-center  ">
      <div id="profile"></div>
      <div id="faq"> </div>
      <BreadcrumbWithCustomSeparator />
      <Videos />
      <div id="courseMaterial">
        <CourseMaterial />
      </div>
      <div id="comments">
        <Comments />
      </div>
    </div>
  );
}
