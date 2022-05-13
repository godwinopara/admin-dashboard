import { useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";

const Client = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const clientData = async () => {
      const request = await axios.get("https://fakerapi.it/api/v1/companies?_quantity=10");
      const response = request.data.data;
      setClients(response);
    };
    clientData();
  }, []);

  return (
    <div>
      {clients.map((client) => {
        return (
          <Table
            key={client.id}
            image={client.image}
            firstname={client.contact.firstname}
            lastname={client.contact.lastname}
            gender={client.contact.gender}
            phoneNumber={client.phone}
            email={client.contact.email}
            city={client.addresses[0].city}
          />
        );
      })}
    </div>
  );
};

export default Client;
// address: {id: 0, street: '313 Magdalena Spurs Apt. 684', streetName: 'Erich Brook', buildingNumber: '2993', city: 'Estellashire', …}
// birthday: "1967-08-30"
// email: "schultz.eleazar@gmail.com"
// firstname: "Abby"
// gender: "female"
// id: 1
// image: "http://placeimg.com/640/480/people"
// lastname: "Toy"
// phone: "+6435933421705"
// website: "http://kohler.com"

