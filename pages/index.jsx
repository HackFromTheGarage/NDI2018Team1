import Layout from '../layouts/default';
export default () => (
    <div style={{textAlign:"center"}}>
        <Layout title="Acueil | HackFromTheGarage1">
           <p>Projet de HackFromTheGarage1</p>
            <div>
                <div className="rectangle"></div>
                <div className="rectangle"></div>

            </div>
            <div>
                <div className="rectangle"></div>
                <div className="rectangle"></div>
            </div>

        </Layout>

        <style jsx>{`
            .rectangle{
                width:200px;
                height:200px;
                border-radius:5px;
                border: 1px solid black;
                margin:5px;
            }

        `}</style>
    </div>

)