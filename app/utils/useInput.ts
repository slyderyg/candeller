import { useState, ChangeEvent } from "react"

export const useInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue);

    const handleInput = (e:ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    }

    return {
        value,
        handleInput
    }
}