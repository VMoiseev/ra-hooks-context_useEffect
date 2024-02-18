import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import axios from "axios";

function List(props) {
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setInterval(() => {
      axios.get('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
        .then(response => {
          setNames(response.data);
          setLoading(false);
        })
        .catch((err) => console.log(err))
    }, 3000)
  }, []);


  const getClassName = (id) => id === props.selectedUser ? 'list-item selected' : 'list-item'
  return (
    <div className="namesList">
      {loading && (
        <Oval
          color="#000000"
          width={50}
          height={50}
        />
      )}
      {names && (
        <ul>
          {names.map((item) => (
            <li key={item.id}
              className={getClassName(item.id)}
              onClick={() => props.changeSelected(item.id)}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default List;
