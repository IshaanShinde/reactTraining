import { useEffect, useState } from 'react';
import { useReactTable, getCoreRowModel  } from '@tanstack/react-table';
import type { ColumnDef } from '@tanstack/react-table';

type Bike = {
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
};

const columns: ColumnDef<Bike>[] = [
    { accessorKey: 'make',          header: 'Make'          },
    { accessorKey: 'model',         header: 'Model'         },
    { accessorKey: 'cc',            header: 'CC'            },
    { accessorKey: 'engineType',    header: 'Engine Type'   },
    { accessorKey: 'horsepower',    header: 'Horsepower'    },
    { accessorKey: 'topSpeed',      header: 'Top Speed'     },
    // { accessorKey: 'torque',        header: 'Torque'        },
    // { accessorKey: 'weight',        header: 'Weight'        },
    // { accessorKey: 'year',          header: 'Year'          },
    // { accessorKey: 'category',      header: 'Category'      },
];

const A5Table = () => {
    const [data, setData] = useState<Bike[]>([]);

    useEffect(() => {
        fetch('/bikes.json')
        .then((res) => res.json())
        .then((data: { sportsBikes: Bike[] }) => setData(data.sportsBikes))
        .catch(console.error);
    }, []);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className='component table-container'>
        <table>
        <thead>
            {table.getHeaderGroups().map((headerGroup) => (

                <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (

                        <th key={header.id}>
                            {header.column.columnDef.header as string}
                        </th>
                    ))}
                </tr>
            ))}
        </thead>

        <tbody>
            {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                        <td key={cell.id}>
                            {cell.getValue() as string}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
        </table>
        </div>
    );
};

export default A5Table;