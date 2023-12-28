import { CloseOutlined } from "@ant-design/icons";
import Maskgroup from "../assets/images/Maskgroup.png";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editCustomer } from "../redux/reducers/customers";

const EditCustomer = ({setEditModel, id}) => {
  const dispatch = useDispatch();
  const {customer} = useSelector((state) => state.customer);
  console.log("AAAAA", customer);

  const existingCustomer = customer?.filter((f) => f.id === id) || [];

  const [{ first_name, email, avator } = {}] = existingCustomer;
  
  const [uname, setName] = useState(first_name);
  const [uemail, setEmail] = useState(email);
  const [uavator, setAvatar] = useState(avator);
  
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
  
  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editCustomer({
      id: id,
      first_name: uname,
      email: uemail,
      avator: uavator
    }))
    setEditModel(false)
  }


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
        <form className="flex flex-col" onSubmit={handleEdit}>
          <input
            className="h-[56] w-[455] m-6 p-2 bg-white border-[1px]"
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder={first_name}
          />

          <input
            className="h-[56] w-[455] m-6 p-2 bg-white border-[1px]"
            placeholder={email}
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            
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

          <div  className="flex justify-center items-center mt-4" >
            <button
              className="bg-gradient-to-r from-[#57BC90] to-[#004B40] w-[300px] h-[50px]
             text-white rounded-[10px] flex items-center justify-center text-[16px] cursor-pointer"
            >
              <span>EDIT CUSTOMER</span>
            </button>
          </div>
        </form>
      </div>

  );
};

export default EditCustomer;
