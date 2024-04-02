import React from "react";
import { Header, Table } from "semantic-ui-react";
import Icon from "react-crud-icons";
export default function Tables({ sno, data, handleEdit, handleDelete }) {
  return (
    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header textAlign="center">{sno + 1}</Header>
        </Table.Cell>
        <Table.Cell>
          <Header textAlign="center">{data?.customerName}</Header>
        </Table.Cell>
        <Table.Cell singleLine>{data.billingAddress}</Table.Cell>
        <Table.Cell>{data.shippingAddress}</Table.Cell>
        <Table.Cell>{data.totalAmount}</Table.Cell>
        <Table.Cell>{data.Gst}</Table.Cell>
        <Table.Cell textAlign="right">
          {data?.items?.map((item, key) => (!key ? item : `  ,  ${item}`))}
          <br />
        </Table.Cell>
        <Table.Cell>{data.discountAmount}</Table.Cell>

        <Table.Cell>
          <Icon
            name="edit"
            tooltip="Edit"
            theme="dark"
            size="small"
            onClick={() => handleEdit(sno)}
          />
        </Table.Cell>
        <Table.Cell>
          <Icon
            name="delete"
            tooltip="delete"
            theme="dark"
            size="tiny"
            onClick={() => handleDelete(sno)}
          />
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  );
}
