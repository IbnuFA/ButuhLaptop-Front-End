import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export const getOrderStatus = (statusCode) => {
  switch(parseInt(statusCode)) {
    case 0:
      return (
        <>
          <Button size="sm" variant="info" disabled>
            Pengecekan Admin
          </Button>
        </>
      );
    case 1:
      return (
        <>
          <Button size="sm" variant="outline-success" disabled>
            Disetujui
          </Button>
        </>
      );
    case 2:
      return (
        <>
          <Button size="sm" variant="outline-warning" disabled>
            Menunggu Pembayaran
          </Button>
        </>
      );
    case 3:
      return (
        <>
          <Button size="sm" variant="outline-primary" disabled>
            Pengecekan oleh Admin
          </Button>
        </>
      );
    case 4:
      return (
        <>
          <Button size="sm" variant="info" disabled>
            Barang telah Dikirim
          </Button>
        </>
      );
    case 6:
      return (
        <>
          <Button size="sm" variant="success" disabled>
            Pesanan Selesai
          </Button>
        </>
      );
    case 9:
      return (
        <>
          <Button size="sm" variant="danger" disabled>
            Batal
          </Button>
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
