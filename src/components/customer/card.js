import { useEffect, useState } from "react";
import EditCustomer from "../../models/EditCustomer";
import RemoveCustomer from "../../models/RemoveCustomer";
import CardHeader from "../../common/cardHeader";

const Card = ({ isloading, customer }) => {
  const [showModal, setShowModal] = useState(false);
  const [editModel, setEditModel] = useState(false);
  const [id, setID] = useState(null);
  const [sortBy, setSortBy] = useState("id");

  useEffect(() => {
    console.log("ID", id);
  }, [id]);

  const handleRemove = (data) => {
    setShowModal(true);
    setID(data.id);
    console.log("ID", id);
  };
  const handleEdit = (data) => {
    setEditModel(true);
    setID(data.id);
    console.log("ID", id);
  };

  const sortedCustomer = customer.slice().sort((a, b) => {
    if (a[sortBy] !== b[sortBy]) {
      if (sortBy === "id") {
        return a[sortBy] - b[sortBy];
      } else {
        return a[sortBy].localeCompare(b[sortBy]);
      }
    }
    return 0;
  });

  return (
    <>
      {isloading ? (
        <h1>Loading.....</h1>
      ) : (
        <>
          <CardHeader setSortBy={setSortBy} />
          {sortedCustomer?.map((data) => {
            return (

              <div
                key={data.id}
                className=" flex flex-wrap md:flex-grow justify-around mx-1  md:justify-between px-2 items-center bg-white h-[200px] md:h-[124px] rounded-[10px] my-8"
              >
                <div className=" rounded-[20px] h-[112px]  overflow-hidden ">
                  <img src={data.avatar} alt="img here" />
                </div>
                <div>
                  <span className=" text-[14px] lg:text-[18px] mx-1 font-normal">
                    {`00${data.id}`}
                  </span>
                </div>
                <div>
                  <span className=" text-[#57BC90] text-[14px] mx-1 lg:text-[18px] font-semibold">
                    {`${data.first_name}`}
                  </span>
                </div>
                <div>
                  <span className=" text-[14px] lg:text-[18px] mx-1 font-normal">{data.email}</span>
                </div>
                <div className="flex">
                  <div
                    onClick={() => handleEdit(data)}
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
                          <EditCustomer setEditModel={setEditModel} id={id} />
                        </div>
                      </div>
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                  ) : null}

                  <div
                    onClick={() => handleRemove(data)}
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
                          <RemoveCustomer setShowModal={setShowModal} id={id} />
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
