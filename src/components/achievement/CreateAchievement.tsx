import Dialog from "@mui/material/Dialog";
import { useDispatch, useSelector } from "react-redux";
import { IList } from "../../models/interfaces/IList";
import { RootState } from '../../state/store';
import './styled/CreateAchievement.scss';
import * as yup from 'yup';
import { Formik, FormikHelpers } from "formik";
import { addItem, cancelRecord } from "../../state/list/listSlice";

function CreateAchievement() {
    const dispatch = useDispatch();
    const open = useSelector((state: RootState) => state.list.newRecord);
    const id = useSelector((state: RootState) => Math.max(...state.list.list.map(item => item.id)));


    const validationSchema = yup.object({
        title: yup
            .string()
            .required("Titel is verplicht"),
        img: yup
            .string()
            .required("Link is verplicht")
            .test(
                "link-check",
                "Link moet van unsplash zijn",
                (img) => img !== undefined && img.includes("https://images.unsplash.com/photo-")
            )
    });

    const formikProps = {
        initialValues: {
            id: 0,
            title: "",
            img: "",

        },
        validationSchema: validationSchema,
        onSubmit: (values: IList, actions: FormikHelpers<IList>) => {
            values.id = id + 1;
            values.title = values.title.toLowerCase();

            if (values.img.includes('?')) {
                values.img = values.img.split('?')[0];
            }

            dispatch(addItem(values));

            actions.resetForm({
                values: formikProps.initialValues
            });
        },
    };

    // @ts-ignore
    const handleCloseCreate = (resetForm) => {
        resetForm();
        dispatch(cancelRecord());
    };

    return (
        <Dialog
            open={open}
            keepMounted
            aria-describedby="alert-dialog-slide-description"
            className="Card-Dialog"
        >
            <Formik {...formikProps}>
                {({
                    values,
                    handleChange,
                    errors,
                    handleSubmit,
                    touched,
                    resetForm
                }) => {
                    const titleValue = values.title !== "" && true;
                    const imgValue = values.img !== "" && true;

                    return (
                        <form className="Card-Form" onSubmit={handleSubmit}>
                            <div className="Input">
                                <input
                                    type="text"
                                    className="Input-Field"
                                    name="title"
                                    id="title"
                                    onChange={handleChange}
                                    value={values.title}
                                />
                                <label className={titleValue ? "Input-Label-Focus" : "Input-Label"}>Titel</label>
                            </div>
                            {errors.title && touched.title ? (<div className="Input-Error">{errors.title}</div>) : null}
                            <div className="Input">
                                <input
                                    type="text"
                                    className="Input-Field"
                                    name="img"
                                    id="img"
                                    onChange={handleChange}
                                    value={values.img} />
                                <label className={imgValue ? "Input-Label-Focus" : "Input-Label"}>Unsplash link</label>
                            </div>
                            {errors.img && touched.img ? (<div className="Input-Error">{errors.img}</div>) : null}
                            <div className="Action">
                                <button type="submit" className="Action-Button">Zet erbij</button>
                            </div>
                            <div className="Cancel">
                                <button type="reset" className="Cancel-Button" onClick={(event) => handleCloseCreate(resetForm)}>Cancel</button>
                            </div>
                        </form>
                    )
                }}
            </Formik>
        </Dialog >
    );
}

export default CreateAchievement;