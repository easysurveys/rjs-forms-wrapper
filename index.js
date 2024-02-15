import Form from '@rjsf/chakra-ui';
import validator from '@rjsf/validator-ajv6';

const FormWrapper = props => <Form {...props} validator={validator} />;

export default FormWrapper;
