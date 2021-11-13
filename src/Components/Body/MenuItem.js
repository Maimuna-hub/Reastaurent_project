import React from "react";
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';

const MenuItem = props => {
    return (
        <div>
            <Card style={{ margin: "10px" }}>
                <CardBody>
                    <CardTitle
                        style={{
                            cursor: "pointer",
                            fontWeight: "bold",
                            fontSize: "22px"
                        }}
                        onClick={props.DishSelect}
                    >
                        {props.dish.name}
                    </CardTitle>
                    <CardImg
                        width="100%"
                        alt={props.dish.name}
                        src={props.dish.image}
                    />
                </CardBody>
            </Card>
        </div>
    )
}

export default MenuItem;