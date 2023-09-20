import { Button, Form } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useContext, useState } from 'react';
import UserContext from '../UserContext';

export default function Login() {

    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [ loginKey, setLoginKey ] = useState("");
    let globalData;
    console.log(globalData)

    function authenticateKey(e) {


        e.preventDefault();

        fetch('http://localhost:4000/visitors/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                loginKey: loginKey,
            })
            })
        .then(res => res.json())
        .then(data => {
            globalData = data;
            console.log(data);
            if (data.access) {
                localStorage.setItem("token", data.access);
                Swal.fire ({
                    title: "Login Successsful",
                    icon: "success",
                    text: "Welcome!!!"
                })
                navigate ("/views")
            } else {
                
                return false
                
            }
            
        })
    
    }

    console.log(user)
    console.log(user.access)
    console.log(localStorage)
    console.log(localStorage.token)

    return (

        (localStorage.token === null || localStorage.token === undefined) ? 

            <Form onSubmit={e => authenticateKey(e)}>
                <Form.Group controlId="Login Key">
                    <Form.Label></Form.Label>
                    <Form.Control
                        type="password"
                        placeholder=""
                        required
                        value={loginKey}
                        onChange={(e) => setLoginKey(e.target.value)} />
                </Form.Group>
            </Form>

            :

            <Navigate to="/views" /> 

    )
}