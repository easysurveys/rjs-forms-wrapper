import Form from '@rjsf/chakra-ui';
import { FormProps } from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import React from 'react';

const FormWrapper = (props: React.JSX.IntrinsicAttributes & FormProps<any, any, any>) => {
    return (<Form {...props} validator={validator} />);
};

export default FormWrapper;
