    import { ChangeEventHandler } from "react";

    export type InputProps = {
    value: string;
    className?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    };

    export default function Input(props: InputProps) {
    return (
        <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder || ""}
        className={`
            w-full 
            px-4 py-2 
            rounded-lg 
            bg-blue-950 
            border border-white/10 
            text-white 
            placeholder-white/30 
            text-base 
            focus:outline-none 
            focus:ring-2 
            focus:ring-blue-500 
            transition 
            duration-200 
            ${props.className || ""}
        `}
        />
    );
    }
