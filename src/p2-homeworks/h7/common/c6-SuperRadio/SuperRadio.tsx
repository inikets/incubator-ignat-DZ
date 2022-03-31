import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>, o: string) => {
        if (o === 'x') {
            onChangeOption('x')
        } else if (o === 'y') {
            onChangeOption('y')
        } else if (o === 'z') {
            onChangeOption('z')
        }
    }


    const mappedOptions: any[] = options ? options.map((o, i) => {

        return(
    <label key={name + '-' + i}>
            <input
                type={'radio'}
                onChange={(e) => onChangeCallback(e, o)}
                checked={o === value ? true : false}
                value={value}
                // name, checked, value, onChange
            />
            {o}
        </label>
)}) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
