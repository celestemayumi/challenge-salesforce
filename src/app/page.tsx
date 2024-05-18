'use client'
import React, { useEffect, useState } from 'react';
import Carrossel from "@/components/Carrossel";
import Customers from "@/components/Customers";
import Products from "@/components/Products";
import Plans from "@/components/Plans";


export default function Home() {
  return (
    <main>
      <Carrossel
        title={
          <>
            Entregue sucesso agora com o <br /> Salesforce Customer 360
          </>
        }
        desc={
          <>
            O Customer 360 é a nossa suíte de produtos e<br /> serviços que
            ajuda 98% dos clientes a alcançar ou
            <br /> superar suas metas de ROI.
          </>
        }
        image="/Image.svg"
        btn="Teste Gratis"
      ></Carrossel>
      <Products />
      <Customers />
      <Plans />
    </main>
  );
}
