import React, { useState } from 'react';

export const Modal = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <button 
                onClick={toggleModal} 
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
            >
                Open
            </button>
            {modal && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={toggleModal}
                >
                    <div 
                        className="bg-white p-6 rounded shadow-lg w-1/2"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-2xl font-bold mb-4">Hello</h2>
                        <p className="mb-4">
                            Elit sint esse adipisicing do ipsum reprehenderit veniam et ea voluptate deserunt in aute. Consequat amet anim nulla cupidatat eiusmod sit eu ullamco aliqua ad excepteur aute voluptate sit. Velit dolor excepteur ipsum cupidatat cupidatat exercitation reprehenderit.
                        </p>
                        <button 
                            onClick={toggleModal} 
                            className="bg-red-500 text-white font-bold py-2 px-4 rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
