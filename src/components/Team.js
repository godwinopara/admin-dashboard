import { useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";

const Team = () => {
  const [teams, setteams] = useState([]);

  useEffect(() => {
    const teamData = async () => {
      const request = await axios.get("https://fakerapi.it/api/v1/persons?_quantity=10");
      const response = request.data.data;
      setteams(response);
    };

    teamData();
  }, []);

  return (
    <div>
      <div>
        app
        {teams.map((team) => {
          return (
            <Table
              key={team.id}
              image={team.image}
              firstname={team.firstname}
              lastname={team.lastname}
              gender={team.gender}
              email={team.email}
              phoneNumber={team.phone}
              city={team.address.city}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Team;

