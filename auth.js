import {useCallback, useState} from "react";
import {FormControl, Input} from "@mui/material";
import axios from "axios";

const styles = {
    form: {
        width: 800,
        height: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 auto',
        marginTop: 200
    },
    input: {
        width: 500,
        height: 41,
        color: '#000'
    },
    button: {
        width: 250,
        height: 50,
        marginTop: 20,
        marginBottom: 20,
        fontWeight: 700,
        fontSize: 22,
        color: '#fff',
        backgroundColor: '#367010',
        border: '2px solid #367010',
        borderRadius: 5,
        boxShadow: '0px 0px 20px #4f4f4f'
    }
}

const APIForm = () => {
    const [apiKey, setApiKey] = useState('');
    const [secretKey, setSecretKey] = useState('');

    const handleSubmit = useCallback((e) => {
        e.preventDefault()

        sessionStorage.setItem(API_KEY, JSON.stringify(apiKey));
        sessionStorage.setItem(SECRET_KEY, JSON.stringify(secretKey));

        axios({
            method: 'post',
            url: '/api/orders',
            data: {apiKey, secretKey}
        }).then(res => console.log(res.data))

        setSecretKey('');
        setApiKey("")
    }, [apiKey, secretKey])

    const handleKey = (e) => {
        setApiKey(e.currentTarget.value)
    }

    const handleSecret = (e) => {
        setSecretKey(e.currentTarget.value)
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }

    return (
        <FormControl style={styles.form} method='post'>
            <Input style={styles.input} onChange={handleKey} onKeyDown={handleKeyPress}
                   type='text' value={apiKey} name='api_key' placeholder='Enter your API-Key...'/>
            <Input style={styles.input} onChange={handleSecret} onKeyDown={handleKeyPress}
                   type='text' value={secretKey} name='secret_key' placeholder='Enter your Secret-Key...'/>
            <button style={styles.button} type='submit' onClick={handleSubmit}>Login</button>
        </FormControl>
    )
}

export default APIForm