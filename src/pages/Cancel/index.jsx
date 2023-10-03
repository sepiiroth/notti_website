import styled from "styled-components";
import colors from "../../utils/style/colors";
import cancel from "../../assets/cancel.gif";
const CancelWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.secondary_text};
`;

const CancelTitle = styled.h1`
  font-weight: 300;
`;

const CancelSubtitle = styled.h2`
  font-weight: 300;
`;

const Illustration = styled.img`
  max-width: 800px;
`;

function Cancel() {
  return (
    <CancelWrapper>
      <CancelTitle>Une prochaine fois..</CancelTitle>
      <Illustration src={cancel} />
      <CancelSubtitle>Vous avez annulé votre paiement Stripe !</CancelSubtitle>
    </CancelWrapper>
  );
}

export default Cancel;
