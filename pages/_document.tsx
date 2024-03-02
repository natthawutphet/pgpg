import { Html, Head, Main, NextScript } from "next/document";
import Nav from "./home/nav";



export default function Document() {
  return (
<> 

    <Html lang="en">

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
      <Head />

      
    



      <body>
      <Nav />
        <Main />
        <NextScript />
      </body>
    </Html>


  
    </>
  );
}
