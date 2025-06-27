import { useState } from "react";

import A4Form from "../components/A4Form";
import A4MetadataDisplay from "../components/A4MetadataDisplay";

import type { A4FormValues } from "../components/A4Form";

const A4 = () => {

    const [ formData, setFormData ] = useState<A4FormValues | null>(null);

    const handleSubmit = (values: A4FormValues) => {
        setFormData(values);
    }

    return (
        <>
            <A4Form onSubmit={handleSubmit}/>
            <A4MetadataDisplay data={formData}/>
        </>
    );
};

export default A4;