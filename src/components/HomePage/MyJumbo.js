import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const MyJumbo = props => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello, Everyone!</h1>
        <p className="lead">
          Welcom to a unique platform on which you can fulfill all your exam
          training needs.
        </p>
        <hr className="my-2" />
        <p>
          Please login using the word 'demo' as userid and password in the
          client login section
        </p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default MyJumbo;
