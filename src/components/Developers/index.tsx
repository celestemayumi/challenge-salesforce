import "./styles.css";
import DevCard from "./DevCard";

const Developers = () => {
    return(
        <>
        <div className="dev-box">
            <h1>Conheca nosso time!</h1>
            <DevCard
                img = '/celeste.svg'
                name = 'Celeste Tanaka'
                lkdn="https://www.linkedin.com/in/celestetanaka/"
                github="https://github.com/celestemayumi"
            ></DevCard>
            <DevCard
                img = '/livia.svg'
                name = 'Livia Mariana Lopes'
                lkdn="https://www.linkedin.com/in/liviamarianalopes/"
                github="https://github.com/LiviaMarianaLopes"
            ></DevCard>
            <DevCard
                img = '/luana.svg'
                name = 'Luana Vieira'
                lkdn="https://www.linkedin.com/in/luana-vieira-ds1506/"
                github="https://github.com/luanavss"
            ></DevCard>
        </div>
        </>
    )
}

export default Developers;