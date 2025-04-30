import React from "react";

type EventProps = {
  title: string;
  customLink: string;
  department: string;
};

const events: EventProps[] = [
  { title: "SUDOKU", customLink: "https://example.com/sudoku", department: "bsh" },
  { title: "CODE – 2 – DUO", customLink: "https://example.com/code-2-duo", department: "cse" },
  { title: "INSTANT CIRCUIT MAKING", customLink: "https://example.com/instant-circuit", department: "ee" },
  { title: "ROBO SOCCER", customLink: "https://example.com/robo-soccer", department: "ece" },
  { title: "BRIDGE THE GAP", customLink: "https://example.com/bridge-the-gap", department: "ce" },
  { title: "CADMANIA", customLink: "https://example.com/cadmania", department: "me" },
  { title: "USER INTERFACE – USER EXPERIENCE (UI – UX)", customLink: "https://example.com/ui-ux", department: "cse" },
  { title: "HUNT FOR FUN", customLink: "https://example.com/hunt-for-fun", department: "bsh" },
  { title: "LINE FOLLOWER ROBOT", customLink: "https://example.com/line-follower", department: "ece" },
  { title: "ELECTROMAT", customLink: "https://example.com/electromat", department: "ee" },
  { title: "INSTA-PLAN", customLink: "https://example.com/insta-plan", department: "ce" },
  { title: "BATTLE GROUNDS MOBILE INDIA (BGMI)", customLink: "https://example.com/bgmi", department: "cse" },
  { title: "QUIZZARD", customLink: "https://example.com/quizzard", department: "general" },
];

const departmentColors: Record<string, string> = {
  bsh: "border-pink-500",
  cse: "border-blue-500",
  ee: "border-yellow-400",
  ece: "border-purple-500",
  ce: "border-green-500",
  me: "border-red-500",
  general: "border-gray-500",
};

const AdminPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Panel</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {events.map((event) => (
          <button
            key={event.title}
            onClick={() => window.open(event.customLink, "_blank")}
            className={`w-full text-left px-4 py-3 rounded-xl shadow-md transition hover:scale-105 hover:shadow-lg border-2 ${
              departmentColors[event.department] || "border-white"
            } bg-gray-800`}
          >
            <span className="font-semibold text-lg">{event.title}</span>
            <p className="text-sm mt-1 text-gray-400">{event.customLink}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
