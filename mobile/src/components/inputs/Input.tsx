import React, { useState } from 'react';
import tw from 'twrnc';
import { TextInput } from 'react-native';

type Props = {
    placeholder: string;
    value: string;
    secure: boolean;
    setValue: React.Dispatch<React.SetStateAction<string>>;
};

const Input = ({ placeholder, value, secure, setValue }: Props) => {
    const [focus, setFocus] = useState(false);
    return (
        <TextInput
            style={tw.style(
                'border text-base w-4/5 my-2 pl-2 rounded-2xl',
                focus && ' border-blue-500'
            )}
            placeholder={placeholder}
            value={value}
            secureTextEntry={secure}
            onChangeText={setValue}
            onFocus={() => setFocus((prev) => !prev)}
            onBlur={() => setFocus((prev) => !prev)}
        />
    );
};

export default Input;
