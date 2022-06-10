import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Header = () => {
  return (
    <Head>
    <div>
      
      <Title>
        <Link to="/" style={{textDecoration:"none", color:"black"}}>
        라떼는 말이야...
        </Link>
      </Title>
      
      {/* <Login></Login> */}
      </div>
    </Head>
  )
}


const Head = styled.div`
position: fixed;
top:0;left:0;width:100%; height:100px;background-color:#ED5B3A;
border-bottom:1px solid #DDD;
`
const Title = styled.h2`
 font-size:1.8rem;
  line-height:49px;
  text-align:center;
`

export default Header