"use client";
import { tokenService } from "@/services/tokenService";
import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Logged from "@/components/Logged";

function AuthPageSSR(props?: any) {
  return (
    <main>
      <Header />
      <Logged id={props.token} />
      <Footer />
    </main>
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
        destination: "/login",
      },
    };
  }
}
