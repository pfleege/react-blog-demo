import icsLogo from "../images/iCeeqSolutionsLogo.png";
const Footnote = () => {
  return (
    <div className="footnoteContainer">
      <div className="ics-container">
        <p className="ics-p">React blog demo by:</p>
        <a href="https://iceeqsolutions.fi" target="_blank">
          <img src={icsLogo} alt="Company logo" className="icsLogo" />
        </a>
      </div>
    </div>
  );
};

export default Footnote;
