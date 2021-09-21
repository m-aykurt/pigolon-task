import CardComp from "./components/card/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Button } from "reactstrap";
import { addCard } from "./utils/Function";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    myApi();
  }, []);
  // console.log(cards);

  //axios ile api'den bilgi cekildi
  const myApi = async () => {
    let url = "https://www.breakingbadapi.com/api/characters";
    await axios
      .get(url)
      .then((response) => setCards(response.data))
      .catch((err) => console.error(err));
  };
  // cards state'ini map edip CardComp'a gönderiyoruz
  return (
    <div className="App">
      <Button onClick={() => addCard(cards)} color="primary">
        Start Data Fetch
      </Button>{" "}
      {cards.map((card) => (
        <CardComp key={card.id} card={card} />
      ))}
    </div>
  );
}

export default App;
