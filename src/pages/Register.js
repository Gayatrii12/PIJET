import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const Register = () => {
    const [filePreview, setFilePreview] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        // You can implement file validation logic here

        // Display file preview (for demonstration purposes)
        const reader = new FileReader();
        reader.onloadend = () => {
            setFilePreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="default-text-block main_box_papermsg">
            <h2 class="my-6 text-4xl tracking-tight font-extrabold text-pijet-blue py-10">
                Register your manuscript for publication:
            </h2>
        </div>
    );
};

export default Register;