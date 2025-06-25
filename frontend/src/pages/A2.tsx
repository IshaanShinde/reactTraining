import { useState } from "react";
import A2InputBox from "../components/A2InputBox";
import A2Textiewer from "../components/A2TextViewer";

const A2 = () => {

    const [ text, setText ] = useState('');

    return (
        <>
            <A2InputBox value={text} onChange={setText}/>
            <A2Textiewer value={text} />
        </>
    )
};;

export default A2;