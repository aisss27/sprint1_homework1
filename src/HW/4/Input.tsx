import {ChangeEvent} from 'react';

type InputPropsType = {
	currentText: string// НУЖНО ПРОТИПИЗИРОВАТЬ
	setCurrentText: (value:string) => void // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = (props: InputPropsType) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		let newValue = event.currentTarget.value;
		props.setCurrentText(newValue);
	};

	return (
	  <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler} />
	);
};
