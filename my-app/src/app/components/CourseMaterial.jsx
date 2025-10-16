import { CiTimer } from "react-icons/ci";
import { RiBookShelfLine } from "react-icons/ri";
import { FaBookReader } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

export default function CourseMaterial() {
  const material = [
    { icon: <CiTimer />, title: "Durations : ", content: "3 Weeks" },
    { icon: <RiBookShelfLine />, title: "Lesson : ", content: "8" },
    { icon: <FaBookReader />, title: "Enrolled : ", content: "65 students" },
    { icon: <TbWorld />, title: "Language : ", content: "English" },
    { icon: <CiTimer />, title: "Durations : ", content: "3 Weeks" },
    { icon: <RiBookShelfLine />, title: "Lesson : ", content: "8" },
    { icon: <FaBookReader />, title: "Enrolled : ", content: "65 students" },
    { icon: <TbWorld />, title: "Language : ", content: "English" },
  ];

  const firstHalf = material.slice(0, 4);
  const secondHalf = material.slice(4, 8);

  return (
    <div className="mt-9">
      <h2 className="font-medium text-2xl mb-5 text-black">Course Materials</h2>

      <div className="flex flex-col md:flex-row shadow-lg bg-slate-50 p-5 justify-center items-start gap-5 rounded-lg">
        <div className="flex flex-col gap-2 sm:w-1/2 max-w-4xl w-full">
          {firstHalf.map((obj, index) => (
            <div
              key={index}
              className={`innerbox flex justify-between p-2 ${
                index !== firstHalf.length - 1 ? "border-b border-gray-300" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="text-sm">{obj.icon}</div>
                <p className="font-semibold">{obj.title}</p>
              </div>
              <small className="text-gray-600">{obj.content}</small>
            </div>
          ))}
        </div>

        <div className="hidden sm:flex flex-col gap-2 sm:w-1/2 ">
          {secondHalf.map((obj, index) => (
            <div
              key={index}
              className={`innerbox flex justify-between p-2 ${
                index !== secondHalf.length - 1
                  ? "border-b border-gray-300"
                  : ""
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="text-sm">{obj.icon}</div>
                <p className="font-semibold">{obj.title}</p>
              </div>
              <small className="text-gray-600">{obj.content}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
