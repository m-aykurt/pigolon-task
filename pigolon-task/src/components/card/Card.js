import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { useFetch } from "../../utils/Function";

const CardComp = () => {
  const { cardList, loading } = useFetch();

  return (
    <div>
      {loading ? (
        <Card>
          <CardBody>
            <h2>Loading...</h2>
          </CardBody>
        </Card>
      ) : cardList?.length === 0 ? (
        <Card>
          <CardBody>
            <h2>Nothing Found...</h2>
          </CardBody>
        </Card>
      ) : (
        cardList.map((card) => (
          <Card className="cardMain" key={card?.id}>
            <CardBody>
              <CardTitle tag="h5">{card?.name}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {card?.nickname}
              </CardSubtitle>
            </CardBody>
            <img width="30%" src={card?.img} alt="Card image cap" />
            <CardBody>
              <CardText>
                <ul>
                  {/* <li>{card?.occupation[0]}</li> */}
                  <li>{card?.portrayed}</li>
                  <li>{card?.status}</li>
                </ul>
              </CardText>
              <CardLink href="#">
                <Button color="danger">Delete</Button>{" "}
              </CardLink>
              <CardLink href="#">
                {" "}
                <Button color="warning">Update</Button>{" "}
              </CardLink>
            </CardBody>
          </Card>
        ))
      )}
    </div>
  );
};

export default CardComp;
