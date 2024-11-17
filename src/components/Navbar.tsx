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
  width: 500,
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
    <section className='h-max w-full flex justify-between shadow-lg'>
      <button><img src="https://static.vecteezy.com/system/resources/thumbnails/007/092/484/small/education-technology-logo-design-vector.jpg" alt="" width={70}/></button>
      <div className='p-4'>
      <Button 
      className="bg-blue-500 text-white font-extrabold py-2 px-6 rounded-lg transition duration-300"
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
            <Typography id="transition-modal-title" variant="h4" component="h2" className='flex flex-col justify-center items-center'>
            Sign up
            {/* <p>
            Learn on your own time from top universities and businesses.
            </p> */}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <form action="" className='flex flex-col p-2'>
                <label 
                htmlFor="fname" 
                className='text-base'>Full Name</label>
                <input 
                type="text" 
                placeholder='Enter your full name' required
                className='border border-slate-400 p-1  rounded-md mb-6 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400' />
                <label 
                htmlFor="email">Email</label>
                <input 
                type="email" 
                placeholder='name@email.com' required
                className='border border-slate-400 p-1  rounded-md mb-6 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400' />
                <label 
                htmlFor="passwd">Password</label>
                <input 
                type="password" 
                placeholder='Create password'  required
                className='border border-slate-400 p-1  rounded-md mb-8 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400' />
                <button 
                className='p-1 bg-blue-500 text-white text-lg rounded-md' >Join for Free</button>
              </form>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
    </section>
  )
}

export default Navbar
