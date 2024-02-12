import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export const getProductStatus = (statusValue) => {
  switch(statusValue) {
    case "kerja":
      return (
        <>
          <a href="#kerja" className="white-text">Kerja</a>
        </>
      );
    case "daily":
      return (
        <>
          <a href="#daily" className="white-text">Belajar</a>
        </>
      );
    case "gaming":
      return (
        <>
          <a href="#gaming" className="white-text">Gaming</a>
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
