import CourseCurriculum from "./CourseCurriculum";
import ProgressDemo from "./Progress";

export default function Aside() {
  return (
    <div className=" text-white w-50 h-screen mt-11 sm:mt-24">
      <ProgressDemo />
      <CourseCurriculum />
    </div>
  );
}
