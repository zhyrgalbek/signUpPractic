import './signUp.css';
import ValidInput from '../hooks/ValidInput';
import { useDispatch, useSelector } from 'react-redux';
import addUser from '../redux/actions/action';
import { useEffect, useState } from 'react';

function SignUp(props) {
    const dispatch = useDispatch();
    const store = useSelector((state) => state.users);

    console.log(store);
    const {
        value: nameValue,
        inputValue: nameInput,
        isValue: nameIsValue,
        inputBlur: nameBlur,
        resetValue: nameReset
    } = ValidInput((value) => {
        if (/^[a-zA-Z]+$/.test(value) || value.includes(Number) || value.trim() === '') {
            return true;
        } else {
            return false;
        }
    });

    const {
        value: emailValue,
        inputValue: emailInput,
        isValue: emailIsValue,
        inputBlur: gmailBlur,
        resetValue: gmailReset
    } = ValidInput((value) => {
        const validEmailRegex = RegExp(
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        );
        if (validEmailRegex.test(value)) {
            return false;
        } else {
            return true;
        }
    });

    const {
        value: passwordValue,
        inputValue: passwordInput,
        isValue: passwordIsValue,
        inputBlur: passwordBlur,
        resetValue: passwordReset
    } = ValidInput((value) => {
        if (value.trim().length > 5 || value.trim() === '') {
            return true;
        } else {
            return false;
        }
    });


    let nameClasses = nameIsValue ? 'form__inputs invalid' : 'form__inputs';
    let emailClasses = emailIsValue ? 'form__inputs invalid' : 'form__inputs';
    let passwordClasses = passwordIsValue ? 'form__inputs invalid' : 'form__inputs';


    const submitForm = (e) => {
        e.preventDefault();
        if (nameValue === '' || emailValue === '' || passwordValue === '') {
            nameBlur();
            gmailBlur();
            passwordBlur();
        }
        let [a, b] = passwordValue.split('');
        let newPassword = passwordValue.split('').reverse().join('');
        newPassword = [...newPassword, a, b].join('');

        if (nameIsValue || emailIsValue || passwordIsValue || nameValue === '' || emailValue === '' || passwordValue === '') {
            return;
        } else {
            dispatch(addUser({
                name: nameValue,
                gmail: emailValue,
                password: newPassword
            }))
            nameReset();
            gmailReset();
            passwordReset();
        }
        // console.log(store)
    }

    return (
        <form className='form' onSubmit={submitForm}>
            <div className="form__inputs">
                <h2>Sign up</h2>
            </div>
            <div className={nameClasses}>
                <label htmlFor="userName">Username</label>
                <input name="userName" type="text" value={nameValue} onChange={nameInput} onBlur={nameBlur} />
                {nameIsValue && <p>username must have digits</p>}
            </div>
            <div className={emailClasses}>
                <label htmlFor="gmail">gmail</label>
                <input name="gmail" type="gmail" value={emailValue} onChange={emailInput} onBlur={gmailBlur} />
                {emailIsValue && <p>gmail is not valid</p>}
            </div>
            <div className={passwordClasses}>
                <label htmlFor="password">password</label>
                <input name="password" type="password" value={passwordValue} onChange={passwordInput} onBlur={passwordBlur} />
                {passwordIsValue && <p>write the password</p>}
            </div>
            <button className='form__submit'>sign up</button>
        </form>
    )
}

export default SignUp;