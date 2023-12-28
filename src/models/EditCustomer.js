import { CloseOutlined } from "@ant-design/icons";
import Maskgroup from "../assets/images/Maskgroup.png";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer } from "../redux/reducers/customers";

const EditCustomer = ({setEditModel}) => {
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customer);
 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState(null);
  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
  
    if (file) {
      const imgname = file.name;
      const reader = new FileReader();
  
      reader.onloadend = () => {
        const img = new Image();
        img.src = reader.result;
  
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const maxSize = Math.max(img.width, img.height);
          canvas.width = maxSize;
          canvas.height = maxSize;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(
            img,
            (maxSize - img.width) / 2,
            (maxSize - img.height) / 2
          );
          canvas.toBlob(
            (blob) => {
              const url = URL.createObjectURL(blob);
              setAvatar(url);
            },
            file.type,
            0.8
          );
        };
      };
  
      reader.readAsDataURL(file);
    }
  };
  

  const handleSubmit = (e) => {
    
    e.preventDefault();
    if (customer && customer.customer.length > 0) {
      const newId = customer.customer[customer.customer.length - 1].id + 1;
      const newCustomer = { id: newId, name, email, avatar };
      dispatch(addCustomer(newCustomer));
      // Optionally, you might want to reset the form fields after submission
      setName("");
      setEmail("");
      setAvatar(null);
    } else {
      // Handle the case when the customer array is empty
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
          <div  onClick={() => setEditModel(false)}>
            <span className=" absolute top-5 right-5 h-[20px] w-[20px] text-white">
              <CloseOutlined />
            </span>
          </div>
          <span className="absolute bottom-5 right-28 font-Recoleta font-semibold text-[#FFFFFF] text-[40px] flex justify-center">
            Edit Customer
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
              onChange={handleImageChange}
            />
          </div>

          <Link className="flex justify-center items-center mt-4" to="/">
            <button
              className="bg-gradient-to-r from-[#57BC90] to-[#004B40] w-[300px] h-[50px]
             text-white rounded-[10px] flex items-center justify-center text-[16px] cursor-pointer"
            >
              <span>EDIT CUSTOMER</span>
            </button>
          </Link>
        </form>
      </div>

  );
};

export default EditCustomer;
