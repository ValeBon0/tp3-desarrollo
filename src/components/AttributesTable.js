import React from 'react';

const AttributesTable = ({ attributes }) => (
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Valor</th>
            </tr>
        </thead>
        <tbody>
            {attributes.map((attr) => (
                <tr key={attr.id}>
                    <td>{attr.name}</td>
                    <td>{attr.value_name}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default AttributesTable;
