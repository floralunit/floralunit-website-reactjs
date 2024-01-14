import React from 'react'
import '../styles/table.css';
import {NavLink} from "react-router-dom";

export function BandsTable() {
    return (
        <div className="table-view">
        <div className="table">
            <table>
                <tbody>
                <tr>
                    <td className="tdUp">
                        <p align="center"><b>Эмо 90-х</b></p></td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"bob-tilton"}>Bob Tilton</NavLink>
                    </td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"bob-tilton"}>I Hate Myself</NavLink>
                    </td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"bob-tilton"}>Mineral</NavLink>
                    </td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"bob-tilton"}>Kolya</NavLink>
                    </td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"bob-tilton"}>Sleeping for Sunrise</NavLink>
                    </td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"bob-tilton"}>Neil Perry</NavLink>
                    </td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"bob-tilton"}>You And I</NavLink>
                    </td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"bob-tilton"}>Yaphet Kotto</NavLink>
                    </td>
                </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                <tr>
                    <td className="tdUp">
                        <p align="center"><b>Мидвест-эмо</b></p></td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"bob-tilton"}>American Football</NavLink>
                    </td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"bob-tilton"}>Camping in Alaska</NavLink>
                    </td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"bob-tilton"}>Marietta</NavLink>
                    </td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"bob-tilton"}>Tiny Moving Parts</NavLink>
                    </td>
                </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                <tr>
                    <td className="tdUp">
                        <p align="center"><b>Русское эмо</b></p></td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"bob-tilton"}>Bird Bone</NavLink>
                    </td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"bob-tilton"}>botanichesky sad</NavLink>
                    </td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"bob-tilton"}>hay king</NavLink>
                    </td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"bob-tilton"}>состояние птиц</NavLink>
                    </td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"bob-tilton"}>это</NavLink>
                    </td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"bob-tilton"}>флорист</NavLink>
                    </td>
                </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                <tr>
                    <td className="tdUp">
                        <p align="center"><b>Остальное</b></p></td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"bob-tilton"}>Reasons</NavLink>
                    </td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"bob-tilton"}>Oakwood</NavLink>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        </div>
    );
}
