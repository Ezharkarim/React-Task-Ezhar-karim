import React from "react";
import Card from "./card";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomer } from "../../redux/reducers/customers";
import { useEffect, useState } from "react";

const CustomerList = () => {
  const dispatch = useDispatch();
  const [fetchCalled, setFetchCalled] = useState(false);
  const { customer, isloading } = useSelector((state) => state.customer);

  useEffect(() => {
    if (!fetchCalled) {
      dispatch(fetchCustomer());
      setFetchCalled(true);
    }
  }, [fetchCalled, dispatch]);

  console.log("UU", customer);
  return (
    <div>
      <Card loading={isloading} customer={customer} />
    </div>
  );
};

export default CustomerList;
