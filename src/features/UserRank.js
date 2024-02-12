import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export const getUserRank = (statusCode) => {
  switch(parseInt(statusCode)) {
    case 0:
      return (
        <>
          <Button className="btn-bronze" size="sm" active>
            Bronze
          </Button>
        </>
      );
    case 1:
      return (
        <>
          <Button size="sm" variant="outline-success" active>
            Silver
          </Button>
        </>
      );
      case 2:
      return (
        <>
          <Button size="sm" variant="outline-success" active>
            Gold
          </Button>
        </>
      );
      case 2:
        return (
          <>
            <Button size="sm" variant="outline-success" active>
              Platinum
            </Button>
          </>
        );
    default:
      return (
        <>
          <Button size="sm" variant="outline-danger" active>
            Invalid
          </Button>
        </>
      );

  }
};
