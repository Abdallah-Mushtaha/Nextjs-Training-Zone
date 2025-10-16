import React from "react";
import { BreadcrumbWithCustomSeparator } from "./BreadcrumbDemo";

import Videos from "./Video";
import CourseMaterial from "./CourseMaterial";
import Comments from "./Comments";

export default function Basic() {
  return (
    <div className="text-gray-500 flex-col justify-start items-center  ">
      <BreadcrumbWithCustomSeparator />
      <Videos />
      <CourseMaterial />
      <Comments />
    </div>
  );
}
