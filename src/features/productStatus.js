import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export const getProductStatus = (statusValue) => {
  switch(statusValue) {
    case "kerja":
      return (
        <>
          <p>Kerja</p>
        </>
      );
    case "daily":
      return (
        <>
          <p>Belajar</p>
        </>
      );
    case "gaming":
      return (
        <>
          <p>Gaming</p>
        </>
      );
    default:
      return (
        <>
          <Button size="sm" variant="outline-danger" disabled>
            Invalid
          </Button>
        </>
      );

  }
};
