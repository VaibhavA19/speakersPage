import Speakers from "./Speakers";
import Header from "./Header";
import Layout from "./Layout";

function App() {
    return (
        <Layout initialTheme="dark" >
            <Header />
            <Speakers />
        </Layout>
    )
}

export default App;