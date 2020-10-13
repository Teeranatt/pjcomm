import React from "react";
import { CardTitle, CardText, Row, Col, Button, Card } from "reactstrap";
import "../App.css";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate();

    const nextPage = (page) => {
        navigate("/" + page);
    }

    return ( < div >
        <
        Button onClick = {
            () => { nextPage("BasicComputing") }

        }
        color = "success" >
        <
        h5 > 1. Basic Computing < /h5> </Button >
        <
        Button onClick = {
            () => { nextPage("LinearEquations") }
        }
        color = "secondary" >
        <
        h5 > 2. Linear Equations < /h5> </Button >
        <
        Button onClick = {
            () => { nextPage("Interpolation") }
        }
        color = "warning" >
        <
        h5 > 3. Interpolation < /h5> </Button >
        <
        Button onClick = {
            () => { nextPage("Differentiation") }
        }
        color = "danger" >
        <
        h5 > 4. Differentiation < /h5> </Button >
        <
        Button onClick = {
            () => { nextPage("Integration") }
        }
        color = "info" > < h5 > 5. Integration < /h5> </Button >
        <
        Button onClick = {
            () => { nextPage("Rootfinding") }
        }
        color = "success" > < h5 > 6. Root - finding < /h5> </Button >

        <
        /div>
    );
}

export default Home;