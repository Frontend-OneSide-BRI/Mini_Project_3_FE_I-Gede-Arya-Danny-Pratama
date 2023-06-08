import { useEffect } from "react";

function Page404() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1>INI PAGE 404</h1>
    </>
  );
}

export default Page404;
