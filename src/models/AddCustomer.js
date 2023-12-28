import { CloseOutlined } from "@ant-design/icons";
import Maskgroup from "../assets/images/Maskgroup.png";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer } from "../redux/reducers/customers";
import { useNavigate } from "react-router-dom";

const AddCustomer = ({setShowModal, showModal}) => {
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customer);

  const [first_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (customer && customer.customer.length > 0) {
      const newId = customer.customer[customer.customer.length - 1].id + 1;
      const newCustomer = { id: newId, first_name, email, image };
      console.log("EEE",newCustomer);
      dispatch(addCustomer(newCustomer));
      
      setName("");
      setEmail("");
      setImage(null);
      setShowModal(false)
    } else {
  
    }
  };

  const imageRef = useRef(null);
  const handleImageClick = () => {
    imageRef.current.click();
  };
  
  return (

      <div className="flex flex-col h-[530px] w-[527px] bg-[#FBFCFC] rounded-[20px]">
        <div
          className="relative h-[144px] w-full"
          style={{
            backgroundImage: `url(${Maskgroup})`,
          }}
        >
          <div onClick={() => {setShowModal(false)}}>
            <span className=" absolute top-5 right-5 h-[20px] w-[20px] text-white">
              <CloseOutlined />
            </span>
          </div>
          <span className="absolute bottom-5 right-20 font-Recoleta font-semibold text-[#FFFFFF] text-[40px] flex justify-center">
            Add New Customer
          </span>
        </div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            className="h-[56] w-[455] m-6 p-2 bg-white border-[1px]"
            placeholder="Company Name"
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            className="h-[56] w-[455] m-6 p-2 bg-white border-[1px]"
            placeholder="Email"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="flex ">
            <span
              className="z-10 m-6 text-[#57BC90] bg-[#FBFCFC] h-10 cursor-pointer"
              onClick={handleImageClick}
            >
              <u>Upload Photo</u>
            </span>
            <input
              className="m-6 absolute"
              type="file"
              ref={imageRef}
              onChange={(e) =>
                setImage(e.target.files ? e.target.files[0] : null)
              }
            />
          </div>

          <div className="flex justify-center items-center mt-4">
            <button
              className="bg-gradient-to-r from-[#57BC90] to-[#004B40] w-[300px] h-[50px]
             text-white rounded-[10px] flex items-center justify-center text-[16px] cursor-pointer"
            >
              <span>ADD CUSTOMER</span>
            </button>
          </div>
        </form>
      </div>

  );
};

export default AddCustomer;
