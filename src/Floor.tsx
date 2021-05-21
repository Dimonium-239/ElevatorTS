import {ElevContext} from "./elevState";
import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

interface FloorState{
    isElevOnFloor: boolean;
}
function floor(FloorState: props) : JSX.Element {
    const [state, dispatch] = useContext(ElevContext);
    const [currentFloor, setCurrentFloor] = useState("");
    const [targetFloor, setTargetFloor] = useState("");

    return(
        <>
            <h1 className={"class" + floorIndicator}>*</h1>
         </>
    )
}

