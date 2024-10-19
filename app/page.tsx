// import { Button } from "@/components/ui/button";
// import Image from "next/image";

import { SignedOut } from "@clerk/nextjs";
import LandingPage from "./dashboard/_components/LandingPage";

// export default function Home() {
//   return (
//     <div>
//       <h2>Hello world</h2>
//       <Button>Subscribe</Button>
//     </div>
//   );
// }


export default function Home() {
  return (
  <LandingPage/>
  );
}
