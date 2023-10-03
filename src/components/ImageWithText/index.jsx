import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const Container = styled.div`
  color: ${colors.secondary_text};
  text-align: center;

  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
  p {
    font-size: 1.2rem;
  }
`;

function ImageWithText({ image, title, description, part }) {
  return (
    <Container className="container my-5">
      <div className={`row ${part === "right" ? "d-flex" : ""}`}>
        <div className={`col-lg-6 ${part === "right" ? "order-lg-2" : ""}`}>
          <img className="w-100 shadow" src={image} alt="T-Shirt" />
        </div>
        <div className="col-lg-6">
          <div className="p-5 mt-5">
            <h1 className="display-4">{title}</h1>
            <p className="lead">{description}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

ImageWithText.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  part: PropTypes.string.isRequired,
};

export default ImageWithText;
