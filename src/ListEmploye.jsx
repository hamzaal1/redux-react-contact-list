import { useSelector } from "react-redux";
import Employer from './Employer';
import "./ListEmployers.css";
function ListEmploye() {
    const { Employers } = useSelector((state) => state.employeReducer)
    return (
        <div className="container list_Employers">
            {
                Employers.map((employe) => <Employer key={employe.name} name={employe.name} image={employe.image} />)
            }
        </div>
    )
}

export default ListEmploye;