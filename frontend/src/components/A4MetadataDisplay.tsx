import type { A4FormYupValues } from "./A4FormYup";

interface A4MetadataDisplayProps { 
    data: A4FormYupValues | null;
}

const A4MetadataDisplay = ( { data }: A4MetadataDisplayProps ) => {
    return (
        <div className="component fill">
            <pre>{ JSON.stringify( data, null, 2 ) }</pre>
        </div>
    );
};

export default A4MetadataDisplay;