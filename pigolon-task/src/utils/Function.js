import firebaseApp from "./firebase";
import { useEffect, useState } from "react";

// app.js de set ettiğimiz card'ları firebase'e gönderiyoruz
export const addCard = (card) => {
  const contactRef = firebaseApp.database().ref("cards");
  contactRef.push(card);
};

//custom hook

export const useFetch = () => {
  const [cardList, setCardList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const contactRef = firebaseApp.database().ref("cards");
    //firebase'deki dataları fetch ediyoruz
    contactRef.on("value", (snapshot) => {
      const firebaseCards = snapshot.val();

      const firebaseCardsList = [];
      for (let id in firebaseCards) {
        firebaseCardsList.push({ id, ...firebaseCards[id] });
      }
      setCardList(firebaseCardsList);
      setLoading(false);
    });
  }, []);
  return { cardList, loading };
};
