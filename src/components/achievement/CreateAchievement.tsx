import Dialog from "@mui/material/Dialog";
import { useSelector } from "react-redux";
import { RootState } from '../../state/store';
import './styled/CreateAchievement.scss';


function CreateAchievement() {
    const open = useSelector((state: RootState) => state.list.newRecord);

    return (
        <Dialog
            open={open}
            keepMounted
            aria-describedby="alert-dialog-slide-description"
            className="Card-Dialog"
        >
            <form className="card-form">
                <div className="input">
                    <input type="text" className="input-field" />
                    <label className="input-label">Full name</label>
                </div>
                <div className="input">
                    <input type="text" className="input-field" />
                    <label className="input-label">Email</label>
                </div>
                <div className="input">
                    <input type="password" className="input-field" />
                    <label className="input-label">Password</label>
                </div>
                <div className="action">
                    <button className="action-button">Get started</button>
                </div>
            </form>
        </Dialog >
    );
}

export default CreateAchievement;