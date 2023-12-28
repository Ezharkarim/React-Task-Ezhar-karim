import { useState } from "react";
import EditCustomer from "../../models/EditCustomer";
import RemoveCustomer from "../../models/RemoveCustomer";

const Card = ({ isloading, customer}) => {
  const [showModal, setShowModal] = useState(false);
  const [editModel, setEditModel] = useState(false);
  return (
    <>
      {isloading ? (
        <h1>Loading.....</h1>
      ) : (
        <>
          {customer?.map((data) => {
            return (
              <div
                key={data.id}
                className="flex flex-wrap overflow-hidden justify-between px-2 items-center bg-white  h-[124px] rounded-[10px] my-8"
              >
                <div className=" rounded-[20px] h-[112px]  overflow-hidden ">
                  <img src={data.avatar} alt="img here" />
                  
                </div>
                <div>
                  <span className=" text-[18px] font-normal">
                    {`00${data.id}`}
                  </span>
                </div>
                <div>
                  <span className=" text-[#57BC90] text-[18px] font-semibold">
                    {`${data.first_name}`}
                  </span>
                </div>
                <div>
                  <span className=" text-[18px] font-normal">{data.email}</span>
                </div>
                <div className="flex">
                  <div
                    onClick={() => setEditModel(true)}
                    className="flex justify-center items-center mx-4 bg-[#39B54A] bg-opacity-[40%] h-[33px] w-[106px] text-[18px] cursor-pointer"
                  >
                    <span className="  text-[#008212] rounded-[5px]  font-semibold">
                      Edit
                    </span>
                  </div>
                  {editModel ? (
                    <>
                      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                          {/*content*/}
                          <EditCustomer setEditModel={setEditModel}/>
                        </div>
                      </div>
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                  ) : null}

          
                    <div
                    onClick={() => {setShowModal(true) } }
                   
                    className="flex justify-center items-center mr-4 bg-[#D80000] bg-opacity-[40%] h-[33px] w-[106px] text-[18px] cursor-pointer"
                  >
                    <span className="  text-[#D80000] rounded-[5px]  font-semibold">
                      Delete
                    </span>
                  </div>
             
                 

                  {showModal ? (
                    <>
                      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                          <RemoveCustomer setShowModal={setShowModal}/>
                        </div>
                      </div>
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                  ) : null}
                </div>
              </div>
            );
          })} 
        </>
      )}
    </>
  );
};

export default Card;
