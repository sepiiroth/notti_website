import styled from "styled-components";
import colors from "../../utils/style/colors";
import success from "../../assets/success.gif";
const SuccessWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.secondary_text};
`;

const SuccessTitle = styled.h1`
  font-weight: 300;
`;

const SuccessSubtitle = styled.h2`
  font-weight: 300;
`;

const Illustration = styled.img`
  max-width: 800px;
`;

function Success() {
  return (
    <SuccessWrapper>
      <SuccessTitle>Merci pour votre achat!</SuccessTitle>
      <Illustration src={success} />
      <SuccessSubtitle>
        Un e-mail de confirmation va vous être envoyé.
      </SuccessSubtitle>
    </SuccessWrapper>
  );
}

export default Success;
