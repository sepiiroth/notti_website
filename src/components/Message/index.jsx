import styled from "styled-components";
import colors from "../../utils/style/colors";
import PropTypes from "prop-types";

const Container = styled.div`
  height: 40px;
  background-color: ${colors.background};
  color: ${colors.secondary_text};
  text-align: center;
  position: relative;

  h1 {
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media screen and (max-width: 550px) {
      font-size: 0.8rem;
    }
  }
`;
function Message({ message }) {
  return (
    <Container>
      <h1>{message}</h1>
    </Container>
  );
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
