/*

import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characterdetails = () => {
    const { store, actions } = useContext(Context);
    const ParamIndex1 = useParams();

    /*return (

        {
            store.peoples.map((item, index) => {

                if (ParamIndex1 == index) {

                    return <li key={index}>{item.name}</li>
             }})
        }

        < div >
        <Link to="/characters">
            <button className="btn btn-primary">Back home</button>
        </Link>
		</div >



    )

};
