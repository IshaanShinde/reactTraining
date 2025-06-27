import { useState } from "react";

import A4FormYup from "../components/A4FormYup";
import A4MetadataDisplay from "../components/A4MetadataDisplay";

import type { A4FormYupValues } from "../components/A4FormYup";

const A4Yup = () => {

    const [ formData, setFormData ] = useState<A4FormYupValues | null>(null);

    const handleSubmit = (values: A4FormYupValues) => {
        setFormData(values);
    }

    return (
        <>
            <A4FormYup onSubmit={handleSubmit}/>
            <A4MetadataDisplay data={formData}/>
        </>
    );
};

export default A4Yup;