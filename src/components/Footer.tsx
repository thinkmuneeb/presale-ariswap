import styled from "styled-components";

const FooterStyle = styled.div`
  margin-top: 120px;
  padding-bottom: 70px;
  font-size: 12px;
  color: ${(props) => props.theme.text.secondary};
`;

const Footer = () => {
  return <FooterStyle>COPYRIGHT © 2021 AMERIBUCKS PRESALE.</FooterStyle>;
};

export default Footer;
