import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import Tables from "./Tables";
import { getPosts, createPost, updatePost, deletePost } from "../action/posts";
import { useDispatch, useSelector } from "react-redux";
export default function CreateUser() {
  const [data, setData] = useState({
    customerName: "",
    billingAddress: "",
    shippingAddress: "",
    totalAmount: "",
    Gst: "",
    items: [],
    discountAmount: "",
  });

  const dispatch = useDispatch();
  const [updateData, setUpdateData] = useState(false);
  const [currentKey, setCurrentKey] = useState(0);

  const resultData = useSelector((state) => state.posts);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (updateData) {
      //  renderData.splice(currentKey , 1 , data)
      dispatch(updatePost(currentKey, data));
      setUpdateData(false);
    }
    // renderData.push(data);
    else dispatch(createPost(data));

    // setRenderData(renderData)
    clearData();
  };

  const handleEdit = (key, data) => {
    setData({
      customerName: data.customerName,
      billingAddress: data.billingAddress,
      shippingAddress: data.shippingAddress,
      totalAmount: data.totalAmount,
      Gst: data.Gst,
      items: data.items,
      discountAmount: data.discountAmount,
    });
    setCurrentKey(key);
    setUpdateData(true);
  };

  const handleDelete = (key) => {
    // const modifiedAray = renderData.slice(key)
    // setRenderData(modifiedAray)
    dispatch(deletePost(key));
  };

  const clearData = () => {
    setData({
      customerName: "",
      billingAddress: "",
      shippingAddress: "",
      totalAmount: "",
      Gst: "",
      items: [],
      discountAmount: "",
    });
  };

  const showTable = () => {
    if (!resultData.length) return "No Data ";
    return resultData?.map((data, key) => (
      <Tables
        sno={key}
        data={data}
        handleEdit={(key) => handleEdit(key, data)}
        handleDelete={(key) => handleDelete(key)}
      />
    ));
  };

  const handleChange = (e) => {
    var options = e.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setData({ ...data, items: value });
  };

  return (
    <>
      <div className="container">
        <h2 style={{ textAlign: "center", color: "red" }}>Generate Invoice</h2>
        <form
          className="needs-validation"
          onSubmit={(e) => handleSubmit(e)}
          novalidate
        >
          <div className="form-group">
            <label for="uname">Customer Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={data.customerName}
              onChange={(e) =>
                setData({ ...data, customerName: e.target.value })
              }
              placeholder="Name"
              name="name"
              required
            />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <br />
          <div className="form-group">
            <label for="uname">BillingAddress:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={data.billingAddress}
              onChange={(e) =>
                setData({ ...data, billingAddress: e.target.value })
              }
              placeholder="Name"
              name="name"
              required
            />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <br />
          <div className="form-group">
            <label for="uname">Shipping address:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={data.shippingAddress}
              onChange={(e) =>
                setData({ ...data, shippingAddress: e.target.value })
              }
              placeholder="Name"
              name="name"
              required
            />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <br />
          <div className="form-group">
            <label for="uname">totalAmount:</label>
            <input
              type="number"
              className="form-control"
              id="name"
              value={data.totalAmount}
              onChange={(e) =>
                setData({ ...data, totalAmount: e.target.value })
              }
              placeholder="Amounnt"
              name="amounnt"
              required
            />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <br />

          <div className="form-group">
            <label for="pwd">GST:</label>
            <input
              type="number"
              className="form-control"
              id="pwd"
              placeholder="Enter GST no"
              name="pswd"
              value={data.mobile}
              onChange={(e) => setData({ ...data, Gst: e.target.value })}
              required
            />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <br />

          <br />

          <div className="form-group">
            <label>Select Items:</label>
            <select
              class="form-control"
              style={{ overflow: "hidden" }}
              multiple={true}
              onChange={(e) => handleChange(e)}
            >
              <option value="C">C</option>
              <option value="C++">C++</option>
              <option value="Java">Java</option>
              <option value="Python">Python</option>
              <option value="JavaScript">JavaScript</option>
            </select>
          </div>
          <br />
          <div class="form-group">
            <label for="sel1">Select discount Amount:</label>
            <select
              class="form-control"
              id="sel1"
              value={data.dis}
              onChange={(e) =>
                setData({ ...data, discountAmount: e.target.value })
              }
            >
              <option>Select</option>
              <option>50%</option>
              <option>40%</option>
              <option>30%</option>
              <option>20%</option>
            </select>
          </div>
          <br />
          {/* <button className="btn btn-primary" onClick={() => setModal(!modal)}>Preview</button>  */}
          <button type="submit" className="btn btn-primary">
            {updateData ? "Update" : "Submit"}
          </button>
        </form>
      </div>
      <div style={{ textAlign: "center", justifyContent: "center" }}>
        <hr />
        <h2 style={{ textAlign: "center", color: "red" }}>Table</h2>
        <Table
          celled
          padded
          className="container"
          style={{ borderStyle: "groove", borderColor: "black" }}
        >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell singleLine>ID</Table.HeaderCell>
              <Table.HeaderCell>CustomerName</Table.HeaderCell>
              <Table.HeaderCell>BillingAddress</Table.HeaderCell>
              <Table.HeaderCell>shippingAddress</Table.HeaderCell>
              <Table.HeaderCell>totalAmount</Table.HeaderCell>
              <Table.HeaderCell>GST</Table.HeaderCell>
              <Table.HeaderCell>items</Table.HeaderCell>
              <Table.HeaderCell>discountAmount</Table.HeaderCell>
              <Table.HeaderCell>Edit</Table.HeaderCell>
              <Table.HeaderCell>Delete</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          {showTable()}
        </Table>
      </div>
    </>
  );
}

// Id: string;
// Date: string;
// InvoiceNumber: number;
// CustomerName: string;
// BillingAddress: string;
// ShippingAddress: string;
// GSTIN: string;
// Items: InvoiceItem[];
// BillSundrys: InvoiceBillSundry[];
//             TotalAmount: number;
