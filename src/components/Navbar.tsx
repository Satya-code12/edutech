import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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

const Navbar = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <section className='h-max w-full flex justify-between'>
      <button><img src="https://static.vecteezy.com/system/resources/thumbnails/007/092/484/small/education-technology-logo-design-vector.jpg" alt="" width={70}/></button>
      <div>
      <Button 
      className="bg-blue-500 text-white py-2 px-6 rounded-lg transition duration-300"
      onClick={handleOpen}>Join for Free</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <input type="text" placeholder='email' className='border border-black' />
              <input type="password" placeholder='password' />
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
    </section>
  )
}

export default Navbar
