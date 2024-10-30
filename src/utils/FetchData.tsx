import React, { useEffect, useState } from 'react';
import { Country, FetchDataProps } from '../types/types';


const FetchData: React.FC<FetchDataProps> = ({ url, query, children }) => {
    const [data, setData] = useState<Country[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ query }),
                });

                const result = await response.json();

                if (result.errors) {
                    setError(result.errors[0].message);
                } else {
                    setData(result.data.countries);
                }
            } catch (err) {
                setError('Error fetching data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, query]);

    return <>{children(data, loading, error)}</>;
};

export default FetchData;
