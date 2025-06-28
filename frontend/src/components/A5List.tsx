import { useEffect, useState } from 'react';

interface Bike {
    id: string;
    make: string;
    model: string;
    cc: number;
    engineType: string;
    horsepower: number;
    torque: number;
    topSpeed: number;
    weight: number;
    year: number;
    category: string;
}

interface JsonData {
    sportsBikes: Bike[];
}

const A5List = () => {
    // const [ bikes, setBikes ] = useState<Bike[]>([]);

    const [ uniqueMake, setUniqueMake ] = useState<string[]>([]);

    useEffect(() => {
        fetch('/bikes.json')
        .then((response) => response.json())

        .then((data: JsonData) => {
            // setBikes(data.sportsBikes);

            const allMakes = data.sportsBikes.map(bike => bike.make);
            const uniqueMake = [...new Set(allMakes)];
            setUniqueMake(uniqueMake);
        })

        .catch((error) => {
            console.error('Error loading the JSON file:', error);
        });
    }, []);

    return (
        <ul className='component'>
        {/* {bikes.map((bike) => (
            <li key={bike.id}>
                {bike.make} {bike.model}
            </li>
        ))} */}
        {uniqueMake.map((make, index) => (
            <li key={make + index}>{make}</li>
        ))}
        </ul>
    );
};

export default A5List;
