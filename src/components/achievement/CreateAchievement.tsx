import Dialog from "@mui/material/Dialog";
import { useSelector } from "react-redux";
import { RootState } from '../../state/store';


function CreateAchievement() {
    const open = useSelector((state: RootState) => state.list.newRecord);

    return (
        <Dialog
            open={open}
            keepMounted
            aria-describedby="alert-dialog-slide-description"
            className="Card-Dialog"
        >
            <p>Hello</p>
        </Dialog >
    );
}

export default CreateAchievement;