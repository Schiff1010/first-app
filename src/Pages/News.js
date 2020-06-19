import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import { IconButton, Typography, Grid, Button } from '@material-ui/core';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    iconStyles: {
        fontSize: 24,
    },
    posisi: { textAlign: 'right' },
    dialogStyle: {
        marginBotton: 10,
    },
});

export default function SimpleTable() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [dialogDelete, setDialogDelete] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDialogDelete = () => {
        setDialogDelete(true);
    };
    const handleCloseDialogDelete = () => {
        setDialogDelete(false);
    };

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            <TableCell colSpan={6}>
                                <Grid container xs={12}>
                                    <Grid md={9}>
                                        <Typography>Daftar Buku</Typography>
                                    </Grid>
                                    <Grid md={3} className={classes.posisi}>
                                        <Button onClick={handleClickOpen}>
                                            <AddBoxIcon /> Tambah
                                        </Button>
                                    </Grid>
                                </Grid>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>No</TableCell>
                            <TableCell>Penulis</TableCell>
                            <TableCell>Judul</TableCell>
                            <TableCell>Konten</TableCell>
                            <TableCell>Tanggal</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>Misna</TableCell>
                            <TableCell>Herry Potter</TableCell>
                            <TableCell>Fantasi</TableCell>
                            <TableCell>12 Juni 2020 08:00</TableCell>
                            <TableCell>
                                <IconButton>
                                    <CreateIcon
                                        onClick={handleClickOpen}
                                        className={classes.iconStyles}
                                    />
                                </IconButton>
                                <IconButton>
                                    <DeleteIcon
                                        onClick={handleDialogDelete}
                                        className={classes.iconStyles}
                                    />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby='form-dialog-title'
            >
                <DialogTitle id='form-dialog-title'>Tambah Buku</DialogTitle>
                <DialogContent>
                    <Grid container>
                        <Grid md={12} className={classes.dialogStyle}>
                            <TextField
                                id='outlined-basic'
                                label='Penulis'
                                variant='outlined'
                                fullWidth
                            />
                        </Grid>
                        <Grid md={12} className={classes.dialogStyle}>
                            <TextField
                                id='outlined-basic'
                                label='Judul Buku'
                                variant='outlined'
                                fullWidth
                            />
                        </Grid>
                        <Grid md={12} className={classes.dialogStyle}>
                            <TextField
                                id='outlined-basic'
                                label='Konten'
                                variant='outlined'
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color='primary'>
                        Cancel
                    </Button>
                    <Button color='primary'>Submit</Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={dialogDelete}
                onClose={handleCloseDialogDelete}
                aria-labelledby='form-dialog-title'
            >
                <DialogTitle id='form-dialog-title'>Hapus Buku</DialogTitle>
                <DialogContent>
                    <Typography>
                        Apakah Anda Yakin Ingin Menghapus Data Ini?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialogDelete} color='primary'>
                        Cancel
                    </Button>
                    <Button color='primary'>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
