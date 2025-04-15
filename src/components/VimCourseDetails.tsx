import { useState } from "react";


type SectionKeys = "intro" | "prelude" | "core";

const VimCourseDetails: React.FC = () => {
  const [openSections, setOpenSections] = useState<Record<SectionKeys, boolean>>({
    intro: true,
    prelude: false,
    core: false,
  });

  const toggleSection = (section: SectionKeys) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="p-6 space-y-6">
      {/* Subscription banner */}
      <div className="flex justify-between items-center bg-cyan-300 p-4 rounded-lg">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🎒</span>
          <p className="text-lg">
            This study material is part of the{" "}
            <span className="font-bold">ExamPro Supporters Subscription</span>
          </p>
        </div>
        <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-400">
          View Details
        </button>
      </div>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left side */}
        <div className="flex-1 space-y-6">
          {/* FAQ */}
          <div className="border rounded-lg overflow-hidden">
            <div className="p-4 font-semibold text-lg border-b flex justify-between">
              <span>Frequently Asked Questions</span>
              <button className="text-teal-600 font-medium">Toggle All</button>
            </div>
            <div className="p-4 border-b cursor-pointer hover:bg-gray-50">
              ❯ Where can I purchase this course as a standalone item?
            </div>
            <div className="p-4 text-purple-600 underline cursor-pointer">
              View all questions and answers
            </div>
          </div>

          {/* Course Outline */}
          <div className="border rounded-lg overflow-hidden">
            <div className="p-4 font-semibold text-lg border-b flex justify-between">
              <span>Course Outline</span>
              <button className="text-teal-600 font-medium">Expand All</button>
            </div>

            {/* Section: Introduction */}
            <div>
              <div
                className="bg-gray-100 px-4 py-3 font-semibold flex justify-between cursor-pointer"
                onClick={() => toggleSection("intro")}
              >
                <span>{openSections.intro ? "▾" : "▸"} Introduction</span>
                <span className="text-sm text-gray-500">8m 22s</span>
              </div>
              {openSections.intro && (
                <>
                  <div className="px-6 py-2 flex justify-between border-b">
                    <span>Why Learn VIM</span>
                    <span className="text-sm flex items-center gap-2">
                      4m 12s{" "}
                      <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                        Lecture
                      </span>
                    </span>
                  </div>
                  <div className="px-6 py-2 flex justify-between border-b">
                    <span>Learning Expectations and Goals</span>
                    <span className="text-sm flex items-center gap-2">
                      2m 39s{" "}
                      <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                        Lecture
                      </span>
                    </span>
                  </div>
                  <div className="px-6 py-2 flex justify-between border-b">
                    <span>Do People Hate VIM</span>
                    <span className="text-sm flex items-center gap-2">
                      1m 31s{" "}
                      <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                        Lecture
                      </span>
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* Section: VIM Prelude */}
            <div>
              <div
                className="px-4 py-3 font-semibold border-t flex justify-between cursor-pointer hover:bg-gray-50"
                onClick={() => toggleSection("prelude")}
              >
                <span>
                  {openSections.prelude ? "▾" : "▸"} VIM Prelude
                </span>
                <span className="text-sm text-gray-700">2h 3m 17s</span>
              </div>
              {openSections.intro && (
                <>
                  <div className="px-6 py-2 flex justify-between border-b">
                    <span>Why Learn VIM</span>
                    <span className="text-sm flex items-center gap-2">
                      4m 12s{" "}
                      <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                        Lecture
                      </span>
                    </span>
                  </div>
                  <div className="px-6 py-2 flex justify-between border-b">
                    <span>Learning Expectations and Goals</span>
                    <span className="text-sm flex items-center gap-2">
                      2m 39s{" "}
                      <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                        Lecture
                      </span>
                    </span>
                  </div>
                  <div className="px-6 py-2 flex justify-between border-b">
                    <span>Do People Hate VIM</span>
                    <span className="text-sm flex items-center gap-2">
                      1m 31s{" "}
                      <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                        Lecture
                      </span>
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* Section: VIM Core Commands */}
            <div>
              <div
                className="px-4 py-3 font-semibold border-t flex justify-between cursor-pointer hover:bg-gray-50"
                onClick={() => toggleSection("core")}
              >
                <span>
                  {openSections.core ? "▾" : "▸"} VIM Core Commands
                </span>
                <span className="text-sm text-gray-600">1h 23m 58s</span>
              </div>
              {openSections.intro && (
                <>
                  <div className="px-6 py-2 flex justify-between border-b">
                    <span>Why Learn VIM</span>
                    <span className="text-sm flex items-center gap-2">
                      4m 12s{" "}
                      <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                        Lecture
                      </span>
                    </span>
                  </div>
                  <div className="px-6 py-2 flex justify-between border-b">
                    <span>Learning Expectations and Goals</span>
                    <span className="text-sm flex items-center gap-2">
                      2m 39s{" "}
                      <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                        Lecture
                      </span>
                    </span>
                  </div>
                  <div className="px-6 py-2 flex justify-between border-b">
                    <span>Do People Hate VIM</span>
                    <span className="text-sm flex items-center gap-2">
                      1m 31s{" "}
                      <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                        Lecture
                      </span>
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="w-full lg:w-80 border rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-4">This Course Includes:</h3>
          <ul className="space-y-3 text-gray-800">
            <li>📅 1 Year Access</li>
            <li>⏱️ 3.5 Hours of Video</li>
            <li>🎓 43 Lectures</li>
            <li>📝 34 Follow Alongs</li>
            <li>🧠 40 Flashcards</li>
            <li>🧪 1 Practice Exams</li>
            <li>🧩 Individual Video Quizlets</li>
            <li>🏅 Certificate of Completion</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VimCourseDetails;
