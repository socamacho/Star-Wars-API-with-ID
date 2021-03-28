import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characterdetails = () => {
	const { store, actions } = useContext(Context);
	const { index1 } = useParams();

	return <div>{store.peoples[index1].name} </div>;
};
