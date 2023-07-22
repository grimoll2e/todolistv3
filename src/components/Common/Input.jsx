import { TextField } from "@mui/material";

export function Input(props) {
    return (
    <TextField
        fullWidth
        label={props.label&&<h1>{props.label}</h1>}
        variant={props.varian || 'outlined'}
        name={props.name}
        type={props.type || 'text'}
        error={props.error}
        color={props.color || 'secondary'}
        {...props}
    />
    )
}

