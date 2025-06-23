import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import defaultUserIcon from '../../images/default_user_icon.png';
import { MdEdit, MdDelete } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { toast } from 'react-toastify';
import {
    Box,
    Typography,
    Avatar,
    Modal,
    Button,
    IconButton,
    Stack,
    createTheme,
    ThemeProvider,
    CircularProgress,
    TextField,
    Grid
} from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: 'Calibri, Arial, sans-serif',
    },
});


function Profile({ token }) {
    const [profile, setProfile] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const fileInputRef = useRef(null);
    const [isEditing, setIsEditing] = useState(false); 
    const [editedProfile, setEditedProfile] = useState({}); 


    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setProfile(res?.data);
                setEditedProfile(res?.data); 
            } catch (err) {
                console?.error('Error fetching profile:', err);
                setProfile({
                    username: '',
                    email: '',
                    mobile_number: '',
                    location: '',
                    profile_pic: null,
                });
                setEditedProfile({
                    username: '',
                    email: '',
                    mobile_number: '',
                    location: '',
                });

            }
        };

        if (token) {
            fetchProfile();
        }
    }, [token]);

    const handleEditClick = () => {
        setIsEditing(true); 
    };

    const handleUpdateClick = async () => {
        if (
        !editedProfile.username ||
        !editedProfile.email ||
        !editedProfile.mobile_number ||
        !editedProfile.location
    ) {
        toast.error('All fields are required!');
        return;
    }
        try {
            await axios.put(
                `http://localhost:5000/update-profile`,
                editedProfile,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setProfile(editedProfile); 
            setIsEditing(false);
            toast.success('Profile updated successfully!');
        } catch (err) {
            toast.error('Error updating profile:', err);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedProfile((prev) => ({ ...prev, [name]: value })); 
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleUpload = async () => {
        if (!selectedFile) return;

        const formData = new FormData();
        formData.append('profile_pic', selectedFile);

        try {
            const res = await axios.post(
                `http://localhost:5000/update-profile/upload`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setProfile((prev) => ({ ...prev, profile_pic: res?.data?.profile_pic }));
            setSelectedFile(null);
            setShowModal(false);
            toast.success('Profile picture uploaded successfully!');
        } catch (err) {
            toast?.error('Error uploading profile picture:', err);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/update-profile/delete`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setProfile((prev) => ({ ...prev, profile_pic: null }));
            setSelectedFile(null);
            setShowModal(false);
            toast.success('Profile picture deleted successfully!');
        } catch (err) {
            toast.error('Error deleting profile picture:', err);
        }
    };

    const handleImageClick = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedFile(null);
    };

    if (!profile) {
        return (
            <Box className="loading">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ padding: 3, fontFamily: 'Calibri', textAlign: 'center' }}>
                <Typography variant="h5" gutterBottom>
                    User Profile
                </Typography>
                <Box
                    sx={{ position: 'relative', display: 'inline-block' }}
                    onClick={handleImageClick}
                >
                    <Avatar
                        sx={{
                            width: 150,
                            height: 150,
                            cursor: 'pointer',
                        }}
                        src={
                            profile.profile_pic
                                ? `http://localhost:5000/uploads/${profile.profile_pic}`
                                : defaultUserIcon
                        }
                        alt="Profile"
                    />
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                </Box>
                {/* <Typography variant="body1">
                <strong>Name:</strong> {profile.username}
            </Typography>
            <Typography variant="body1">
                <strong>Email:</strong> {profile.email}
            </Typography>
            <Typography variant="body1">
                <strong>Mobile Number:</strong> {profile.mobile_number}
            </Typography>
            <Typography variant="body1">
                <strong>Location:</strong> {profile.location}
            </Typography> */}
                <Grid container>
                    <Grid size={{ xs: 12, md: 12 }}>
                        <TextField
                            label="Name"
                            name = "username"
                            value={editedProfile.username}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            InputProps={{
                                readOnly: !isEditing,
                            }}
                            size="small"
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 12 }}>
                        <TextField
                            label="Email"
                            name = "email"
                            value={editedProfile.email}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            InputProps={{
                                readOnly: !isEditing,
                            }}
                            size="small"
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 12 }}>
                        <TextField
                            label="Mobile Number"
                            name = "mobile_number"
                            value={editedProfile.mobile_number}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            InputProps={{
                                readOnly: !isEditing,
                            }}
                            size="small"
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 12 }}>
                        <TextField
                            label="Location"
                            name = "location"
                            value={editedProfile.location}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            InputProps={{
                                readOnly: !isEditing,
                            }}
                            size="small"
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Button
                        variant="contained"
                    onClick={isEditing ? handleUpdateClick : handleEditClick} 
                        sx={{ marginTop: 20, margin: "auto", backgroundColor: "#127d8e" }}
                    >
                        {isEditing ? 'Update' : 'Edit'}

                    </Button>
                </Grid>

                <Modal open={showModal} onClose={closeModal}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            p: 4,
                            borderRadius: 2,
                            textAlign: 'center',
                        }}
                    >
                        <IconButton
                            onClick={closeModal}
                            sx={{
                                position: 'absolute',
                                top: 8,
                                right: 8,
                                color: 'grey.500',
                            }}
                        >
                            <IoMdClose />
                        </IconButton>
                        <Avatar
                            sx={{
                                width: '90%',
                                height: 'auto',
                                maxHeight: '70%',
                                borderRadius: 2,
                                marginBottom: 2,
                            }}
                            src={
                                selectedFile
                                    ? URL.createObjectURL(selectedFile)
                                    : profile.profile_pic
                                        ? `http://localhost:5000/uploads/${profile.profile_pic}`
                                        : defaultUserIcon
                            }
                            alt="Profile Preview"
                        />
                        <Stack direction="row" spacing={2} justifyContent="center">
                            <IconButton
                                onClick={() => fileInputRef.current.click()}
                                sx={{
                                    bgcolor: 'primary.main',
                                    color: 'white',
                                    '&:hover': { bgcolor: 'primary.dark' },
                                }}
                            >
                                <MdEdit />
                            </IconButton>
                            <IconButton
                                onClick={handleDelete}
                                sx={{
                                    bgcolor: 'error.main',
                                    color: 'white',
                                    '&:hover': { bgcolor: 'error.dark' },
                                }}
                            >
                                <MdDelete />
                            </IconButton>
                        </Stack>
                        {selectedFile && (
                            <Button
                                onClick={handleUpload}
                                variant="contained"
                                color="success"
                                sx={{ mt: 2 }}
                            >
                                Done
                            </Button>
                        )}
                    </Box>
                </Modal>
            </Box>
        </ThemeProvider>
    );
}

export default Profile;
