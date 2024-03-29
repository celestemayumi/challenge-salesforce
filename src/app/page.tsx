'use client'
import React, { useEffect, useState } from 'react';
import { CSVLink } from 'react-csv';
import Carrossel from "@/components/Carrossel";
import Customers from "@/components/Customers";
import Products from "@/components/Products";
import Plans from "@/components/Plans";

export default function Home() {
  const [clicks, setClicks] = useState([]);
 const [csvLink, setCsvLink] = useState(null);

 useEffect(() => {
    const handleClick = (e) => {
      setClicks(prevClicks => [...prevClicks, { x: e.pageX, y: e.pageY }]);
    };

    document.addEventListener('click', handleClick);

    const handleBeforeUnload = () => {
      if (csvLink) {
        csvLink.link.click();
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
 }, [csvLink]);
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
      <CSVLink
        data={clicks}
        filename="clicks.csv"
        ref={(r) => setCsvLink(r)}
        target="_blank"
        style={{ display: 'none' }}
      />
    </main>
  );
}
