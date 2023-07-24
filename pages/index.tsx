import styled from 'styled-components'

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <div className="wrapper">
        {/* <img src="img.jpg" width="500" height="600"/> */}
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome to wmpp
            </h1>
          </div>
        </div>
      </div>
    </StyledPage>
  );
}

export default Index;
