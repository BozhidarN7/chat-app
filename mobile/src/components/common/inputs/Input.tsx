import React, { useState } from 'react';
import tw from 'twrnc';
import { TextInput } from 'react-native';

type Props = {
    placeholder: string;
};

const Input = ({ placeholder }: Props) => {
    const [focus, setFocus] = useState(false);
    return (
        <TextInput
            style={tw.style(
                'border text-base w-4/5 my-2 pl-2 rounded-2xl',
                focus && ' border-blue-500'
            )}
            placeholder={placeholder}
            onFocus={() => setFocus((prev) => !prev)}
            onBlur={() => setFocus((prev) => !prev)}
        />
    );
};

export default Input;
