import { CloseOutlined } from "@ant-design/icons";
import React from "react";
import recyclebin from "../assets/SVGS/recyclebin.svg";
import { useDispatch } from "react-redux";
import { removeCustomer } from "../redux/reducers/customers";

const RemoveCustomer = ({ setShowModal, id }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeCustomer(id));
    console.log("click work", id);
    setShowModal(false);
  };
  
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="flex flex-col h-[530px] w-[527px] bg-[#FBFCFC] rounded-[20px]">
          <div onClick={() => setShowModal(false)}>
            <span className=" float-right m-4 h-[20px] w-[20px] text-red">
              <CloseOutlined />
            </span>
          </div>
          <div className="flex items-center justify-center mt-8">
            <img src={recyclebin} alt="svg" />
          </div>
          <p className="flex items-center justify-center text-center mt-8 font-bold text-[30px]">
            Are you sure?
          </p>
          <p className="flex items-center justify-center text-center mt-4 text-[24px] font-normal">
            Do you really want to delete this customer? <br /> This process can
            not be undone.
          </p>
          <div className="flex flex-row justify-evenly items-center">
            <div>
              <div
                onClick={() => setShowModal(false)}
                className="flex items-center cursor-pointer justify-center  w-[210px] h-[56px] bg-[#A5A5AF] rounded-[10px] mt-20"
              >
                <span className="text-[18px] text-white">CANCEL</span>
              </div>
            </div>

            <div
              onClick={(e) => handleRemove()}
              className="flex items-center cursor-pointer justify-center  w-[210px] h-[56px] bg-[#D80000] rounded-[10px] mt-20"
            >
              <span className="text-[18px] text-white">DELETE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveCustomer;
