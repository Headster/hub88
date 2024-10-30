import React from 'react';
import InputField from '../InputField';

interface SearchProps {
    onSearch: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
    return (
        <div>
            <InputField
                label="Search by Country Code:"
                placeholder="EE"
                onChange={onSearch}
            />
        </div>
    );
};

export default Search;
