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
  // if(cardList.length > 0) return;

  useEffect(() => {
    const contactRef = firebaseApp.database().ref("cards");
    //firebase'deki dataları fetch ediyoruz
    contactRef.on("value", (snapshot) => {
      const firebaseCards = snapshot.val();
      // console.log('firebaseCards :>> ', firebaseCards);

      const firebaseCardsList = [];
      for (let id in firebaseCards) {
        firebaseCardsList.push(firebaseCards[id]);
      }
      setCardList(firebaseCardsList[0]);
    });
  }, []);
  return { cardList };
};


// delete firebase

export const deleteHandler = (char_id)=>{
  const contactRef = firebaseApp.database().ref("cards").child().child(char_id)
  // contactRef.remove()
  console.log(contactRef)
}