import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
    background: #F1F0F5 ${props => `url(${props.image})`} bottom center no-repeat;
    width: 100vw;
    height: 100vh;
`