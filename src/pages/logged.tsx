"use client";
import { tokenService } from "@/services/tokenService";
import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Logged from "@/components/Logged";
import VLibras from "react-vlibras";

function AuthPageSSR(props?: any) {
  return (
    <main>
      <Header />
      <VLibras avatar="icaro" safeInit />
      <Logged id={props.token} />
      <Footer />
    </main>
  );
}

export default AuthPageSSR;

export async function getServerSideProps(ctx: any) {
  try {
    const token = tokenService.get(ctx);
    if (!token) {
      throw new Error("Token not found");
    }
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
