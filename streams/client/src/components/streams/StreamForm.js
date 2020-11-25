import React from 'react'
import { Field } from 'redux-form'


const StreamForm = ({onSubmit}) => {
    const renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? "error" : ""}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        )
    }

    return (
        <form onSubmit={this.props.handleSubmit(onSubmit)} className="ui form error">
            <Field name="title" component={renderInput} label="Enter Title" />
            <Field name="description" component={renderInput} label="Enter Description" />
        <button className="ui button primary">Submit</button>
        </form>
    )
}

export default StreamForm;


