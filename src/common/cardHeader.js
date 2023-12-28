import {
    CaretUpOutlined,
    CaretDownOutlined,
  } from "@ant-design/icons";
  
const CardHeader = () => {
  return (
    <div className="flex items-center h-[50px] bg-[#57BC90] bg-opacity-[30%] rounded-[10px] my-8">
    <div className="text-[18px] font-bold flex justify-evenly ml-8  w-[70%] items-center text-[#015249]">
     
      <div className=" flex flex-row items-center">
        <span>Customer ID </span>
        <div className="flex flex-col text-[12px] ml-1 mt-1">
          <CaretUpOutlined /> <CaretDownOutlined />
        </div>
      </div>
      <div className=" flex flex-row items-center">
        <span>Customer Name </span>
        <div className="flex flex-col text-[12px] ml-1 mt-1">
          <CaretUpOutlined /> <CaretDownOutlined />
        </div>
      </div>
      <div className=" flex flex-row items-center">
        <span>Email </span>{" "}
        <div className="flex flex-col text-[12px] ml-1 mt-1">
          <CaretUpOutlined /> <CaretDownOutlined />
        </div>
      </div>
    </div>
  </div>
  )
}

export default CardHeader
