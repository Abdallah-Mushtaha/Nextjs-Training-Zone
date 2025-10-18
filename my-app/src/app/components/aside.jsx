import CourseCurriculum from "./CourseCurriculum";
import ProgressDemo from "./Progress";

export default function Aside() {
  return (
    <div className=" text-white w-50 h-auto mt-11 sm:mt-24 mb-3">
      <ProgressDemo />
      <CourseCurriculum />
    </div>
  );
}
