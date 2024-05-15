"use client";
import nookies from "nookies";
import { tokenService } from "@/services/tokenService";
import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
function AuthPageSSR(props?: any) {
  // const handleClick = async () => {
  //   const response = await fetch("http://localhost:8080/users/"+ String(props.token));
  //   console.log(response.body);
  // }
  // console.log(props.token);
  return (
    <>
      <Header />
      <div>
        <h1>Auth Page Server Side Render</h1>
        {/* <button onClick={handleClick}>ok</button> */}
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </div>
      <Footer />
    </>
  );
}

export default AuthPageSSR;

export async function getServerSideProps(ctx: any) {
  try {
    const token = tokenService.get(ctx);
    console.log("cookies", token);
    return {
      props: {
        token,
      },
    };
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: "/cadastro",
      },
    };
  }
}
