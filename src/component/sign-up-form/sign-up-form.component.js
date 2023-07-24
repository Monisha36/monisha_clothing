import { useState } from "react";

import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'


const defaultformFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultformFields)
    const { displayName, email, password, confirmPassword } = formFields;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password != confirmPassword) {
            alert("Password do not match");
            return;
        }

        try {
            const response = await createAuthUserWithEmailAndPassword(email, password);
            console.log(response);
        } catch (error) {
            console.log('user creation encountered an error', error)
        }

    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    };
    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <lable>Display Name</lable>
                <input type="text" required onChange={handleChange} name="displayName" value={displayName} />
                <lable>Email</lable>
                <input type="email" required onChange={handleChange} name="email" value={email} />
                <lable>Password</lable>
                <input type="password" required onChange={handleChange} name="password" value={password} />
                <lable>Confirm Password</lable>
                <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;