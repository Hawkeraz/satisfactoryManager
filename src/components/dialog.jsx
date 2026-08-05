import { motion } from "framer-motion";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
} from "@mui/material";

import * as MaterialIcons from "@mui/icons-material";

const DialogBox = ({ open, onClose, title, children }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xl">
      <Box display="flex" spaceBetween>
        <DialogTitle>{title}</DialogTitle>
        <IconButton onClick={onClose}> <MaterialIcons.Close /> </IconButton>
      </Box>
      <Divider />
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export { DialogBox };
