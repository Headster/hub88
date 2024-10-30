import React, { useState } from 'react';
import Table from '../components/Table';
import FetchData from '../utils/FetchData';
import Search from '../components/Search';
import { Column } from '../types/types';
import { useDebounce } from '../hooks/useDebounce';

const COUNTRIES_QUERY = `
    query {
        countries {
            code
            name
        }
    }
`;

const CountriesPage: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const debouncedSearchValue = useDebounce(searchValue, 300);

    const columns: Column[] = [
        { header: 'Country name', accessor: 'name' },
        { header: 'Country code', accessor: 'code' },
    ];

    const handleSearch = (value: string) => {
        setSearchValue(value.toUpperCase());
    };

    return (
        <div className="countries-wrapper">
            <h1>Countries</h1>
            <Search onSearch={handleSearch} />
            <FetchData
                url="https://countries.trevorblades.com/"
                query={COUNTRIES_QUERY}
            >
                {(data, loading, error) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error: {error}</p>;

                    const filteredCountries = data?.filter((country) =>
                        country.code.includes(debouncedSearchValue)
                    );

                    return <Table columns={columns} data={filteredCountries || []} />;
                }}
            </FetchData>
        </div>
    );
};

export default CountriesPage;
