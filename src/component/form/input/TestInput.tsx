import { TextField } from "@mui/material"
import { Field } from "react-final-form"

const TestInput = () => {
    const validate = (val: any): boolean => {
        return val ? true : false
    }

    return (
        <Field name="test1" validate={validate}>
            {({ input, meta }) => (
                <div>
                    <TextField {...input} id="outlined-basic" label="Input Component" variant="outlined" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
            )}
        </Field>
    )
}

export default TestInput