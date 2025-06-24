import { useState } from "react";
import A2InputBox from "../components/A2InputBox";
import A2Textiewer from "../components/A2TextViewer";

const A2 = () => {

    const [ text, setText ] = useState('');

    return (
        <div className="page">
            <A2InputBox value={text} onChange={setText}/>
            <A2Textiewer value={text} />
        </div>
    )
};;

export default A2;