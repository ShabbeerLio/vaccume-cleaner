import React from 'react';
import './Table.css';

const Table = ({ item, index }) => {
    return (
        <div className="list-table" key={item.id}>
            <table>
                <thead>
                    <tr>
                        {item.heading.map((j) => (
                            <th key={j.id}>{j.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {item.features.map((j) => (
                        <tr key={j.id}>
                            {j.side && <td>{j.side}</td>}
                            {j.detail1 && <td>{j.detail1}</td>}
                            {j.detail2 && <td>{j.detail2}</td>}
                            {j.detail3 && <td>{j.detail3}</td>}
                            {j.detail4 && <td>{j.detail4}</td>}
                            {j.detail5 && <td>{j.detail5}</td>}
                            {j.detail6 && <td>{j.detail6}</td>}
                            {j.detail7 && <td>{j.detail7}</td>}
                            {j.detail8 && <td>{j.detail8}</td>}
                            {j.detail9 && <td>{j.detail9}</td>}
                            {j.detail10 && <td>{j.detail10}</td>}
                        </tr>
                    ))}
                </tbody>
            </table>

            {item.heading2 && item.features2 && (
                <table>
                    <thead>
                        <tr>
                            {item.heading2.map((j) => (
                                <th key={`heading2-${j.id}`}>{j.title}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {item.features2.map((j) => (
                            <tr key={j.id}>
                                {j.side && <td>{j.side}</td>}
                                {j.detail1 && <td>{j.detail1}</td>}
                                {j.detail2 && <td>{j.detail2}</td>}
                                {j.detail3 && <td>{j.detail3}</td>}
                                {j.detail4 && <td>{j.detail4}</td>}
                                {j.detail5 && <td>{j.detail5}</td>}
                                {j.detail6 && <td>{j.detail6}</td>}
                                {j.detail7 && <td>{j.detail7}</td>}
                                {j.detail8 && <td>{j.detail8}</td>}
                                {j.detail9 && <td>{j.detail9}</td>}
                                {j.detail10 && <td>{j.detail10}</td>}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Table;
