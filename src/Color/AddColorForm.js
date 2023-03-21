import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AddColorForm = ({ addColor }) => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: "", hex: "#ffffff" })

    const { hex, name } = form;

    const handleChange = (e) => {
        e.persist();
        setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)
        addColor({ [form.name]: form.hex });
        navigate('/colors');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Color Name</label>
                    <input
                        name="name"
                        id="name"
                        placeholder="Enter color Name"
                        onChange={handleChange}
                        value={name}
                    />
                </div>
                <div>
                    <label htmlFor="hex">Hex Code</label>
                    <input
                        // type=color will allow colorwheel selection
                        type="color"
                        name="hex"
                        id="hex"
                        onChange={handleChange}
                        value={hex}
                    />
                </div>
                <button>Add Color</button>
            </form>
        </div>
    )
}


export default AddColorForm;