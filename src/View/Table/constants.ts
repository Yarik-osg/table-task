export const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        sorter: (a: { name: string; height: number; mass: number; birth_year: string; }, b: { name: string; height: number; mass: number; birth_year: string; }) => a.name.localeCompare(b.name)

    },
    {
        title: 'Birth year',
        dataIndex: 'birth_year',
        sorter: (a: { birth_year: string; }, b: { birth_year: string; }) => Number(a.birth_year.split('BBY')[0]) - Number(b.birth_year.split('BBY')[0]),
    },
    {
        title: 'Height',
        dataIndex: 'height',
        sorter: (a: { height: number; mass: number; }, b: { height: number; mass: number; }) => a.height - b.height,
    },
    {
        title: 'Mass',
        dataIndex: 'mass',
        sorter: (a: { mass: number; }, b: { mass: number; }) => a.mass - b.mass,
    },
];