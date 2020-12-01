import React from 'react'
import { Field, reduxForm} from 'redux-form'


const StreamForm = (props) => {
    const renderError = ({error, touched}) => {
        if (touched && error){
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            )
        }
    }

    const renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? "error" : ""}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {renderError(meta)}
            </div>
        )
    }

    return (
        <form onSubmit={props.handleSubmit(props.onSubmit)} className="ui form error">
            <Field name="title" component={renderInput} label="Enter Title" />
            <Field name="description" component={renderInput} label="Enter Description" />
            <button className="ui button primary">Submit</button>
        </form>
    )
}

const validate = ({title, description}) => {
    const errors = {}
    
    if (!title){
        errors.title = "Title can not be emtpy"
    }
    
    if (!description) {
        errors.description = "Description can't be empty"
    }

    return errors
}

export default reduxForm({
    form: "streamForm",
    validate,
})(StreamForm);


