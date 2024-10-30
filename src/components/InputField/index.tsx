import React, { ChangeEvent } from 'react';
import { Input } from './InputField.styles';

interface TextInputProps {
    label: string;
    placeholder?: string;
    value?: string;
    onChange: (value: string) => void;
}

const InputField: React.FC<TextInputProps> = ({ label, placeholder, value, onChange }) => {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <div>
            <label>
                {label}
                <Input
                    type="text"
                    value={value}
                    placeholder={placeholder}
                    onChange={handleInputChange}
                />
            </label>
        </div>
    );
};

export default InputField;
