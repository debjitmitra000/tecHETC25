import React from "react";

type EventProps = {
  title: string;
  customLink: string;
  department: string;
};

const events: EventProps[] = [
  { title: "SUDOKU", customLink: "https://docs.google.com/spreadsheets/d/1BGIZTGqrG5MMSQbccljK8BYhozY4FDtzSxLvX5Gj20M/edit?gid=1425751823#gid=1425751823", department: "bsh" },
  { title: "CODE – 2 – DUO", customLink: "https://docs.google.com/spreadsheets/d/1BGIZTGqrG5MMSQbccljK8BYhozY4FDtzSxLvX5Gj20M/edit?gid=1647719954#gid=1647719954", department: "cse" },
  { title: "INSTANT CIRCUIT MAKING", customLink: "https://docs.google.com/spreadsheets/d/1BGIZTGqrG5MMSQbccljK8BYhozY4FDtzSxLvX5Gj20M/edit?gid=782022369#gid=782022369", department: "ee" },
  { title: "ROBO SOCCER", customLink: "https://docs.google.com/spreadsheets/d/1BGIZTGqrG5MMSQbccljK8BYhozY4FDtzSxLvX5Gj20M/edit?gid=621376593#gid=621376593", department: "ece" },
  { title: "BRIDGE THE GAP", customLink: "https://docs.google.com/spreadsheets/d/1BGIZTGqrG5MMSQbccljK8BYhozY4FDtzSxLvX5Gj20M/edit?gid=1839840652#gid=1839840652", department: "ce" },
  { title: "CADMANIA", customLink: "https://docs.google.com/spreadsheets/d/1BGIZTGqrG5MMSQbccljK8BYhozY4FDtzSxLvX5Gj20M/edit?gid=1627694009#gid=1627694009", department: "me" },
  { title: "USER INTERFACE – USER EXPERIENCE (UI – UX)", customLink: "https://docs.google.com/spreadsheets/d/1BGIZTGqrG5MMSQbccljK8BYhozY4FDtzSxLvX5Gj20M/edit?gid=1408151784#gid=1408151784", department: "cse" },
  { title: "HUNT FOR FUN", customLink: "https://docs.google.com/spreadsheets/d/1BGIZTGqrG5MMSQbccljK8BYhozY4FDtzSxLvX5Gj20M/edit?gid=1172496601#gid=1172496601", department: "bsh" },
  { title: "LINE FOLLOWER ROBOT", customLink: "https://docs.google.com/spreadsheets/d/1BGIZTGqrG5MMSQbccljK8BYhozY4FDtzSxLvX5Gj20M/edit?gid=403359527#gid=403359527", department: "ece" },
  { title: "ELECTROMAT", customLink: "https://docs.google.com/spreadsheets/d/1BGIZTGqrG5MMSQbccljK8BYhozY4FDtzSxLvX5Gj20M/edit?gid=712761987#gid=712761987", department: "ee" },
  { title: "INSTA-PLAN", customLink: "https://docs.google.com/spreadsheets/d/1BGIZTGqrG5MMSQbccljK8BYhozY4FDtzSxLvX5Gj20M/edit?gid=180155482#gid=180155482", department: "ce" },
  { title: "BATTLE GROUNDS MOBILE INDIA (BGMI)", customLink: "https://docs.google.com/spreadsheets/d/1BGIZTGqrG5MMSQbccljK8BYhozY4FDtzSxLvX5Gj20M/edit?gid=1534992018#gid=1534992018", department: "cse" },
  { title: "QUIZZARD", customLink: "https://docs.google.com/spreadsheets/d/1BGIZTGqrG5MMSQbccljK8BYhozY4FDtzSxLvX5Gj20M/edit?gid=0#gid=0", department: "general" },
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
      <h1 className="text-3xl mt-10 font-bold mb-8 text-center">Admin Panel</h1>
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
            <p className="text-sm mt-1 overflow-hidden text-gray-400">{event.customLink}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
