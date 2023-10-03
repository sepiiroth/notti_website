import styled from "styled-components";
import colors from "../../utils/style/colors";
import err from "../../assets/error.gif";
const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.secondary_text};
`;

const ErrorTitle = styled.h1`
  font-weight: 300;
`;

const ErrorSubtitle = styled.h2`
  font-weight: 300;
`;

const Illustration = styled.img`
  max-width: 800px;
`;

function Error() {
  return (
    <ErrorWrapper>
      <ErrorTitle>Oups...</ErrorTitle>
      <Illustration src={err} />
      <ErrorSubtitle>
        Il semblerait que la page que vous cherchez n’existe pas
      </ErrorSubtitle>
    </ErrorWrapper>
  );
}

export default Error;
