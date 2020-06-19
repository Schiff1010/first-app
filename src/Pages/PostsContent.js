import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import TextField from '@material-ui/core/TextField';

// API
import Api from '../Services/Api';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    paddingTable: {
        paddingBottom: '2%',
        textAlign: 'right',
    },
    paddingRight: {
        paddingRight: 10,
    },
    formControl: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    fullWidthDialog: {
        width: '100%',
    },
}));

export default function PostsContent() {
    const classes = useStyles();
    // State
    const [open, setOpen] = React.useState(false);
    const [deleteDialog, setDeleteDialog] = React.useState(false);
    const [contents, setContents] = useState([]);
    const [selectedid, setSelectedid] = useState('');
    const [action, setAction] = useState('');
    // state new form
    const [postsAuthor, setPostsAuthor] = useState('');
    const [postsTitle, setPostsTitle] = useState('');
    const [postsContents, setPostsContents] = useState('');
    const [postsDate] = useState(new Date());

    // add modal
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    // delete modal
    const handleClickDeleteOpen = () => {
        setDeleteDialog(true);
    };
    const handleClickDeleteClose = () => {
        setDeleteDialog(false);
    };

    // Button Add & Edit
    const hanldeAction = () => {
        var dataContent = {
            postsAuthor,
            postsDate,
            postsTitle,
            postsContents,
        };
        console.log('dataContent', dataContent);
        console.log('action', action);

        if (action === 'Add') {
            Api.postContents(dataContent).then((res) => {
                setContents([...contents, res.data]);
                setOpen(false);
                console.log('Add Content', res.data);
            });
        } else {
            Api.putContents(selectedid, dataContent).then((res) => {
                var data = contents.map((x) => {
                    if (x._id === res.data._id) {
                        return res.data;
                    } else {
                        return x;
                    }
                });
                setContents(data);
                setOpen(false);
                console.log('Edit Content', res.data);
            });
        }
    };

    // API
    // get data posts
    useEffect(() => {
        Api.getPosts().then((res) => setContents(res.data));
    }, []);

    return (
        <div>
            <div className={classes.paddingTable}>
                <Button
                    variant='outlined'
                    color='primary'
                    onClick={() => {
                        handleClickOpen();
                        setAction('Add');
                    }}
                >
                    Add New Posts
                </Button>
            </div>
            <div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label='simple table'>
                        <TableHead style={{ backgroundColor: '#92A8D1' }}>
                            <TableRow>
                                <TableCell style={{ fontWeight: 'bold' }}>
                                    Action
                                </TableCell>
                                <TableCell
                                    align='right'
                                    style={{ fontWeight: 'bold' }}
                                >
                                    Author
                                </TableCell>
                                <TableCell
                                    align='right'
                                    style={{ fontWeight: 'bold' }}
                                >
                                    Title
                                </TableCell>
                                <TableCell
                                    align='right'
                                    style={{ fontWeight: 'bold' }}
                                >
                                    Content
                                </TableCell>
                                <TableCell
                                    align='right'
                                    style={{ fontWeight: 'bold' }}
                                >
                                    Date
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {contents.map((row) => (
                                <TableRow>
                                    <TableCell component='th' scope='row'>
                                        <Grid
                                            item
                                            // xs={8}
                                            // justify='space-between'
                                        >
                                            <Button>
                                                <DeleteOutlinedIcon
                                                    color='secondary'
                                                    onClick={() => {
                                                        setSelectedid(row._id);
                                                        handleClickDeleteOpen();
                                                    }}
                                                />
                                            </Button>
                                            <Button>
                                                <EditOutlinedIcon
                                                    onClick={() => {
                                                        setSelectedid(row._id);
                                                        setAction('Edit');
                                                        handleClickOpen();
                                                        setPostsAuthor(
                                                            row.postsAuthor
                                                        );
                                                        setPostsTitle(
                                                            row.postsTitle
                                                        );
                                                        setPostsContents(
                                                            row.postsContents
                                                        );
                                                    }}
                                                />
                                            </Button>
                                        </Grid>
                                    </TableCell>
                                    <TableCell align='right'>
                                        {row.postsAuthor}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {row.postsTitle}
                                    </TableCell>
                                    <TableCell align='right' size='medium'>
                                        {row.postsContents}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {row.postsDate}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            {/* dialog add posts */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby='form-dialog-title'
            >
                <DialogTitle id='form-dialog-title'>Add New Posts</DialogTitle>
                <DialogContent>
                    <DialogContentText>Fill the form!!</DialogContentText>
                    <TextField
                        margin='dense'
                        id='name'
                        label='Author Name'
                        fullWidth
                        variant='outlined'
                        value={postsAuthor}
                        onChange={(e) => setPostsAuthor(e.target.value)}
                    />
                    <TextField
                        margin='dense'
                        id='title'
                        label='Title Content'
                        fullWidth
                        variant='outlined'
                        value={postsTitle}
                        onChange={(e) => setPostsTitle(e.target.value)}
                    />
                    <TextField
                        margin='dense'
                        id='content'
                        label='Content Description'
                        fullWidth
                        variant='outlined'
                        rows={4}
                        rowsMax={6}
                        multiline
                        value={postsContents}
                        onChange={(e) => setPostsContents(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        color='secondary'
                        variant='outlined'
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={() => {
                            hanldeAction();
                        }}
                        color='primary'
                        variant='outlined'
                    >
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
            {/* dialog delete item */}
            <Dialog
                open={deleteDialog}
                onClose={handleClickDeleteClose}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'
            >
                <DialogTitle id='alert-dialog-title'>
                    {'Confirmation Delete'}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id='alert-dialog-description'>
                        Are you sure to delete?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClickDeleteClose}
                        variant='outlined'
                        color='primary'
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={() =>
                            Api.deleteContents(selectedid).then((res) => {
                                var data = contents.filter(
                                    (item) => item._id !== selectedid
                                );
                                setContents(data);
                                handleClickDeleteClose();
                            })
                        }
                        variant='outlined'
                        color='secondary'
                        autoFocus
                    >
                        Yes, Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
