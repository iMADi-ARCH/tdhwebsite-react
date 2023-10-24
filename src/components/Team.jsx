import React, { useState } from "react";
import Card from "./ui/Card";

const teams = ["core", "tech", "events", "research", "advisors"];

const teamData = [
  {
    name: "Person 1",
    team: "tech",
    imgPath: "/assets/person.jpg",
  },
  {
    name: "Person 2",
    team: "tech",
    imgPath: "/assets/person.jpg",
  },
  {
    name: "Person 3",
    team: "tech",
    imgPath: "/assets/person.jpg",
  },
  {
    name: "Person 4",
    team: "core",
    imgPath: "/assets/person.jpg",
  },
  {
    name: "Person 5",
    team: "events",
    imgPath: "/assets/person.jpg",
  },
  {
    name: "Person 6",
    team: "research",
    imgPath: "/assets/person.jpg",
  },
  {
    name: "Person 7",
    team: "advisors",
    imgPath: "/assets/person.jpg",
  },
  {
    name: "Person 8",
    team: "core",
    imgPath: "/assets/person.jpg",
  },
];

const Team = () => {
  const [activeTeam, setActiveTeam] = useState("core");
  return (
    <section className="px-5 bg-black text-white flex flex-col items-center justify-center text-left py-32 gap-5">
      <div className="max-w-screen-xl w-full mx-auto flex flex-col gap-10 items-start justify-center">
        <h1 className="relative text-4xl font-semibold">
          The Team
          <div className="bg-[#D7FF65] h-1 absolute left-0 right-0"></div>
        </h1>
        <div className="flex flex-wrap gap-2 text-xl">
          {teams.map((team) => (
            <button
              key={team}
              onClick={() => setActiveTeam(team)}
              className="capitalize relative px-3 py-1"
            >
              {team}
              {team === activeTeam && (
                <span className="w-full bg-[#D7FF65] h-1 absolute left-0 top-full"></span>
              )}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {teamData.map(
            (person) =>
              person.team === activeTeam && (
                <Card
                  key={person.name + person.team}
                  imgPath={person.imgPath}
                  title={person.name}
                />
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Team;
