import styled from "@emotion/styled";


const NavContainer = styled.div`
width: 1140px;
max-width: 100%;
margin: 3rem auto 0 auto;
padding: 0px 0px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: white;
height: 90px;

nav {
display: flex;
justify-content: space-between;
align-items: center;
gap: 4rem;


}

a.active {
    color: blueviolet;
}

a {
    color: black;
    font-size: 1.1rem;
    text-decoration: none;
    font-weight: 400;
    transition: all ease-in-out .3s;

    :hover {
        text-decoration: underline;
    }

}
`;

export default NavContainer;