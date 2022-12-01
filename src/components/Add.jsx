import React, { useState } from 'react'
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Avatar, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import { Box } from '@mui/system'

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})
const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap:"10px",
    marginBottom:"20px"
})

const Add = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
        <Tooltip onClick={(e)=>setOpen(true)} title="Add Post" sx={{position:"fixed", bottom:20, left:{xs:"calc(50% - 25px)", md:30}}}>
            <Fab color="primary" area-aria-label='add'>
                <AddIcon/>
            </Fab>
        </Tooltip>
        <StyledModal
    open={open}
    onClose={(e)=>setOpen(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
    <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
        <Typography variant='h6' color="gray" textAlign="center">
            Create a new post
        </Typography>
        <UserBox>
            <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQEM0oqo9guF9Q/profile-displayphoto-shrink_800_800/0/1627032325561?e=2147483647&v=beta&t=QaHU4xXDmZ2hkxQlH6v6KDw05sjLII8GOqWkZpxIcHM" sx={{width: 30 , height: 30 }}/>
            <Typography fontWeight={500} variant="span">
                Atul Tingre
            </Typography>
        </UserBox>
        <TextField placeholder='Write your Post Here' variant='standard' rows={3} multiline fullWidth/>
        <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color='primary'/>
            <Image color='secondary'/>
            <VideoCameraBack color='success'/>
            <PersonAdd color='error'/>
        </Stack>
        <ButtonGroup variant='conatined' aria-label="outlined primary button group" fullWidth>
            <Button variant="contained" color="primary" >
                Post
            </Button>
            <Button variant="contained" color="primary" sx={{width: '100px'}} >
                <DateRange/>
            </Button>
        </ButtonGroup>
    </Box>
    </StyledModal>
        </>
    )
}

export default Add