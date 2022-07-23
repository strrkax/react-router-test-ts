import styled from 'styled-components';

type Props = {
    className?: string;
    display?: string;
    flexDirection?: string;
    alignItems?: string;
    maxWidth?: string;
    margin?: string;
}

const SignIn = (props: Props) => {
    return (
        <div className={props.className}>
            SignIn
        </div>
    )
}

const StyledSignIn = styled(SignIn)`
    display: flex;
    position: relative;
    top: 7rem;
    margin: auto;
    background-color:	hsl(235, 22%, 41%);
    width: 70%;
    height: 50vh;
`

export default StyledSignIn;