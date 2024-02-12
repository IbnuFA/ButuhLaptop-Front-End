import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export const getUserRank = (statusCode) => {
  switch(parseInt(statusCode)) {
    case 0:
      return (
        <>
          <Button className="btn-bronze" size="sm">
            Bronze
          </Button>
        </>
      );
    case 1:
      return (
        <>
          <Button size="sm" variant="outline-success">
            Silver
          </Button>
        </>
      );
      case 3:
      return (
        <>
          <Button size="sm" variant="outline-success">
            Gold
          </Button>
        </>
      );
      case 4:
        return (
          <>
            <Button size="sm" variant="outline-success">
              Platinum
            </Button>
          </>
        );
    default:
      return (
        <>
          <Button size="sm" variant="outline-danger">
            Invalid
          </Button>
        </>
      );
  }
};
