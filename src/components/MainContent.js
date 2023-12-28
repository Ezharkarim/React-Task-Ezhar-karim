import { Layout } from "antd";
import CustomerList from "./customer/CustomerList";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import AddCustomer from "../models/AddCustomer";

const { Content } = Layout;

const MainContent = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="m-[0px] lg:m-[40px]">
      <Content
       
      >
        <div
          style={{
            padding: 24,
            minHeight: 360,
            borderRadius: "20px",
          }}
        >
          <div>
            <>
              <div
                onClick={() => setShowModal(true)}
                className="bg-gradient-to-r from-[#57BC90] to-[#004B40] w-[250px] lg:w-[300px] h-[40px] lg:h-[50px]
             text-white rounded-[10px] flex items-center justify-center text-[12px] lg:text-[16px] cursor-pointer"
              >
                <div className=" mr-[20px]">
                  <PlusOutlined />
                </div>

                <span>ADD NEW CUSTOMER</span>
              </div>
              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <AddCustomer setShowModal={setShowModal} />
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </>

            <CustomerList />
          </div>
        </div>
      </Content>
    </div>
  );
};

export default MainContent;
