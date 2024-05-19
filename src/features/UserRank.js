import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

// export const getUserRank = (statusCode) => {
//   switch(parseInt(statusCode)) {
//     case 0:
//       return (
//         <>
//           <Button className="btn-bronze" size="sm">
//             Bronze
//           </Button>
//         </>
//       );
//     case 1:
//       return (
//         <>
//           <Button size="sm" variant="outline-success">
//             Silver
//           </Button>
//         </>
//       );
//       case 3:
// return (
//   <>
//     <Button size="sm" variant="outline-success">
//       Gold
//     </Button>
//   </>
// );
//       case 4:
//         return (
//           <>
//             <Button size="sm" variant="outline-success">
//               Platinum
//             </Button>
//           </>
//         );
//     default:
// return (
//   <>
//     <Button size="sm" variant="outline-danger">
//       Invalid
//     </Button>
//   </>
// );
//   }
// };

export const getUserRank = (score) => {
  if (score >= 8) {
    return (
      <>
        <Button className="btn-primary" size="sm" variant="outline-danger">
          Platinum
        </Button>
      </>
    );
  }

  if (score >= 5) {
    return (
      <>
        <Button className="btn-warning" size="sm" variant="outline-success">
          Gold
        </Button>
      </>
    );
  }

  if (score >= 2) {
    return (
      <>
        <Button className="btn-light" size="sm" variant="outline-success">
          Silver
        </Button>
      </>
    );
  }

  return (
    <>
      <Button className="btn-bronze" size="sm">
        Bronze
      </Button>
    </>
  );
};
