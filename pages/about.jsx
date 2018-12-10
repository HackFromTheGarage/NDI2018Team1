import Layout from '../layouts/default';
import Link from 'next/link';

export default () => (
    <Layout title="A propos | HackFromTheGarage1">
       <p>Notre projet est de créer le plus beau site du monde</p>
       <Link href={{ pathname: '/' }}><a>Retour à l'acueil</a></Link>
    </Layout>
)