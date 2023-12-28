
import { Layout } from "antd";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

const { Header} = Layout;

function Home() {
    
  return (
    <div>
          <Layout
      style={{
        minHeight: "100vh",
      }}
    >
   <Sidebar/>
      <Layout>
      
      <Header
          style={{
            padding: 0,
            height:"100px",
            alignItems: "center",
            display: "flex",
            backgroundColor:"white"
            
          }}
        >
          <span className="font-[Lato] ml-14 sm:text-[20px] md:[30px] lg:text-[35px] font-extrabold ">CUSTOMERS</span>
        </Header>
        <MainContent/>
      </Layout>
    </Layout>
    </div>
  )
}

export default Home
