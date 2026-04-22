import React, { useEffect, useState } from "react";
import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton,
  Paper, Stack, TextField, Typography
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PageHeader from "../components/PageHeader";
import ConfirmDialog from "../components/ConfirmDialog";
import adminApi from "../services/adminApi";

const initialForm = {
  title: "",
  genre: "",
  language: "",
  duration: "",
  rating: "",
  posterUrl: "",
};

export default function MoviesPage() {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [form, setForm] = useState(initialForm);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const res = await adminApi.get("/movies");
    setRows(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (editing) {
      await adminApi.put(`/movies/${selectedId}`, form);
    } else {
      await adminApi.post("/movies", form);
    }
    setOpen(false);
    setForm(initialForm);
    setEditing(false);
    setSelectedId(null);
    fetchMovies();
  };

  const handleEdit = (row) => {
    setForm(row);
    setSelectedId(row.id);
    setEditing(true);
    setOpen(true);
  };

  const handleDelete = async () => {
    await adminApi.delete(`/movies/${selectedId}`);
    setDeleteOpen(false);
    setSelectedId(null);
    fetchMovies();
  };

  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "title", headerName: "Title", flex: 1 },
    { field: "genre", headerName: "Genre", flex: 1 },
    { field: "language", headerName: "Language", flex: 1 },
    { field: "duration", headerName: "Duration", flex: 1 },
    { field: "rating", headerName: "Rating", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      width: 140,
      renderCell: (params) => (
        <>
          <IconButton onClick={() => handleEdit(params.row)}><EditIcon /></IconButton>
          <IconButton color="error" onClick={() => { setSelectedId(params.row.id); setDeleteOpen(true); }}><DeleteIcon /></IconButton>
        </>
      ),
    },
  ];

  return (
    <>
      <PageHeader title="Movies" subtitle="Manage all movies" />
      <Stack direction="row" justifyContent="space-between" sx={{ mb: 2 }}>
        <Typography variant="h6">Movies List</Typography>
        <Button variant="contained" onClick={() => setOpen(true)}>Add Movie</Button>
      </Stack>
      <Paper sx={{ height: 500, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} pageSizeOptions={[5, 10, 20]} />
      </Paper>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="md">
        <DialogTitle>{editing ? "Edit Movie" : "Add Movie"}</DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}><TextField fullWidth label="Title" name="title" value={form.title} onChange={handleChange} /></Grid>
              <Grid item xs={12} md={6}><TextField fullWidth label="Genre" name="genre" value={form.genre} onChange={handleChange} /></Grid>
              <Grid item xs={12} md={6}><TextField fullWidth label="Language" name="language" value={form.language} onChange={handleChange} /></Grid>
              <Grid item xs={12} md={6}><TextField fullWidth label="Duration" name="duration" value={form.duration} onChange={handleChange} /></Grid>
              <Grid item xs={12} md={6}><TextField fullWidth label="Rating" name="rating" value={form.rating} onChange={handleChange} /></Grid>
              <Grid item xs={12} md={6}><TextField fullWidth label="Poster URL" name="posterUrl" value={form.posterUrl} onChange={handleChange} /></Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>

      <ConfirmDialog
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={handleDelete}
        title="Delete Movie"
        message="Are you sure you want to delete this movie?"
      />
    </>
  );
}