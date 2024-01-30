import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export const getOrderStatus = (statusCode) => {
  switch(parseInt(statusCode)) {
    case 0:
      return (
        <>
          <Button size="sm" variant="outline-primary" disabled>
            Menunggu Persetujuan Admin
          </Button>
        </>
      );
    case 1:
      // return 'approved';
    case 2:
      return 'waiting customer payment';
    case 3:
      return 'waiting payment approval from admin';
    case 4:
      return 'sent';
    case 6:
      return 'Done';
    case 9:
      return 'expired or canceled';
    default:
      return 'Invalid';
  }
};
