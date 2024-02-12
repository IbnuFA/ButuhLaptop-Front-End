import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export const getOrderStatus = (statusCode) => {
  switch(parseInt(statusCode)) {
    case 0:
      return (
        <>
          <Button size="sm" variant="info" active>
            Pengecekan Admin
          </Button>
        </>
      );
    case 1:
      return (
        <>
          <Button size="sm" variant="outline-success" active>
            Disetujui
          </Button>
        </>
      );
    case 2:
      return (
        <>
          <Button size="sm" variant="outline-warning" active>
            Menunggu Pembayaran
          </Button>
        </>
      );
    case 3:
      return (
        <>
          <Button size="sm" variant="outline-primary" active>
            Pengecekan oleh Admin
          </Button>
        </>
      );
    case 4:
      return (
        <>
          <Button size="sm" variant="info" active>
            Barang telah Dikirim
          </Button>
        </>
      );
    case 6:
      return (
        <>
          <Button size="sm" variant="success" active>
            Pesanan Selesai
          </Button>
        </>
      );
    case 9:
      return (
        <>
          <Button size="sm" variant="danger" active>
            Batal
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
