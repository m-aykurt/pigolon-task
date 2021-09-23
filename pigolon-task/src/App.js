import CardComp from "./components/card/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Button } from "reactstrap";
import { addCard } from "./utils/Function";
import { useFetch } from "./utils/Function";

function App() {
  const [cards, setCards] = useState([]);
  const { cardList } = useFetch();

  useEffect(() => {
    myApi();
  }, []);

  //axios ile api'den bilgi cekildi
  const myApi = async () => {
    let url = "https://www.breakingbadapi.com/api/characters";
    await axios
      .get(url)
      .then((response) => setCards(response.data))
      .catch((err) => console.error(err));
  };

  const handlePushFirebase = () => {
    addCard(cards);
  };

  return (
    <div className="App">
      {(cardList.length > 0) ? null : (
        <Button onClick={handlePushFirebase} color="primary">
          Start Data Fetch
        </Button>
      )}
      {cardList.map((card) => (
        <CardComp card={card} key={card.char_id} />
      ))}
    </div>
  );
}

export default App;
