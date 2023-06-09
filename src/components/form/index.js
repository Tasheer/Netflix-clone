import React from 'react';
import { Container, Base, Error, Title, Text, TextSmall, Link, Input, Submit } from './styles/form'


export default function Form({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}
Form.Base = function FormBase({ children, ...restprops }) {
    return <Base {...restprops}>{children}</Base>
}


Form.Error = function FormError({ children, ...restprops }) {
    return <Error {...restprops}>{children}</Error>
}


Form.Title = function FormTitle({ children, ...restprops }) {
    return <Title {...restprops}>{children}</Title>
}


Form.Text = function FormText({ children, ...restprops }) {
    return <Text {...restprops}>{children}</Text>
}


Form.TextSmall = function FormTextSmall({ children, ...restprops }) {
    return <TextSmall {...restprops}>{children}</TextSmall>
}


Form.Link = function FormLink({ children, ...restprops }) {
    return <Link {...restprops}>{children}</Link>
}


Form.Input = function FormInput({ children, ...restprops }) {
    return <Input {...restprops}>{children}</Input>
}


Form.Submit = function FormSubmit({ children, ...restprops }) {
    return <Submit {...restprops} >{children}</Submit>
}

