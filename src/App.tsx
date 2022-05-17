import { Form, Field } from 'react-final-form'
import TestInput from './component/form/input/TestInput'
import { TextField } from "@mui/material"
import './App.css'

const testValidator = (val?: string) => {
  return true
}

const App = () => (
  <Form
    onSubmit={() => { }}
    render={({ handleSubmit, form, submitting, pristine, values }) => (
      <form onSubmit={handleSubmit}>
        <TestInput />
        <Field name="test2" validate={testValidator}>
          {({ input, meta }) => (
            <div>
              <TextField {...input} type="text" label="Input" />
              {meta.error && meta.touched && <span>{meta.error}</span>}
            </div>
          )}
        </Field>
        <pre>{JSON.stringify(values)}</pre>
      </form>
    )}
  />
)

export default App