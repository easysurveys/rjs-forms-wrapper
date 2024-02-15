import Form from '@rjsf/chakra-ui';
import validator from '@rjsf/validator-ajv8';

const FormWrapper = (props) => {
    return <Form {...props} validator={validator} />;
};

export default FormWrapper;
