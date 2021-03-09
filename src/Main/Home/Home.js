import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
min-height: 75vh;
`
function Home() {
    return (
        <StyledContainer>
            <h2>Home</h2>
            <p>
                Welcome to the react project page.
                we are working with the page to serve
                you with the best user experience. Let
                us know what you like to see and if there is
                som specific you want to share with us.
                Hope to hear from you. Have a nice day.
                <br/>
                <br/>
                Best regards FENNO-team React Project. 
            </p>
        </StyledContainer>
    )
}

export default Home
