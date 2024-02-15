import Form from '@rjsf/chakra-ui';
import validator from '@rjsf/validator-ajv8';
import React from 'react';

const FormWrapper = (props) => {
    return (<Form {...props} validator={validator} />);
};

export default FormWrapper;
