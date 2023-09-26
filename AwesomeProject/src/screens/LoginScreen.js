
import { Button } from "../components/Button"
import { Title } from "../components/Title"
import { FormInput } from "../components/FormInput"
import { Container } from "../components/Container"

export const LoginScreen = () => {
    return <Container>
        <Title text='Увійти' />
        <FormInput placeholder='Адреса електронної пошти' />
        <FormInput placeholder='Пароль' />
        <Button text='Увійти' />
    </Container>
}