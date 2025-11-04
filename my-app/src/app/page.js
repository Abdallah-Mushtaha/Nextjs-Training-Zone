import Aside from "./components/aside";
import Basic from "./components/Basic";

export default function Page() {
  return (
    <div className="w-full mx-auto min-h-screen bg-bg  overflow-hidden overflow-y-scroll  sm:overflow-y-auto flex justify-center py-5 sm:p-5">
      <div className="container">
        <div className="wrapper flex flex-col xl:flex-row justify-between items-start gap-5 px-3 sm:px-0 mb-3">
          <Basic />
          <div className="hidden sm:block">
            <Aside />
          </div>

        </div>
      </div>
    </div>
  );
}
