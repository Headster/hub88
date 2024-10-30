export interface Country {
    name: string;
    code: string;
}

export interface Column {
    header: string;
    accessor: string;
}

export interface TableProps {
    columns: Column[];
    data: Country[];
}

export interface FetchDataProps {
    url: string;
    query: string;
    children: (data: Country[] | null, loading: boolean, error: string | null) => React.ReactNode;
}
