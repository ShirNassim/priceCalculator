import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import DiamondCard from './DiamondCard';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function TransitionsModal(props) {
    const { open, handleClose, price, shape } = props;


    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500 }}>
                <Fade in={open}>
                   {shape!==''&& <Box sx={style}>
                        <div>{'More Suggestions For You :) '}</div>
                        {[1, 2, 3, 4].map((item) => {
                            return (
                                <div key={item}>
                                    <DiamondCard
                                        title={`$${price - item * 98}`}
                                        src={require(`../images/similarDiamonds/${shape}_${item}.jpeg`)}
                                    />
                                </div>

                            )
                        })}
                    </Box>}
                </Fade>
            </Modal>
        </div>
    );
}
