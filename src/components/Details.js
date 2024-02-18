import axios from "axios";
import { useEffect, useState } from "react";

function Details(props) {
  const [details, setDetails] = useState({ details: {} });

  useEffect(() => {
    if (props.info) {
      axios.get(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${props.info}.json`)
        .then(response => {
          setDetails(response.data);
        })
        .catch((err) => console.log(err));
    }
  }, [props.info]);

  return (
    props.info !== 0 && (
      <div className="userDetails">
        <img src={details.avatar + `${'?img=' + props.info}`} alt={details.name} />
        <h1>{details.name}</h1>
        <ul>
          <li>City: {details.details.city}</li>
          <li>Company: {details.details.company}</li>
          <li>Position: {details.details.position}</li>
        </ul>
      </div>
    )
  )
}

export default Details;
