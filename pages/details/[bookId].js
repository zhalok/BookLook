import BookCard from "../../components/Cards/BookCard";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import BookDetailsCard from "../../components/Cards/BookDetailsCard";
import Appbar from "../../components/Decoration/Appbar";
import CommentSection from "../../components/Comments/CommentSection";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";
export default function BookDetails() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const router = useRouter();
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    if (!userToken) {
      router.push("/login");
      return;
    } else {
      const decoded = jwt.decode(userToken);
      setUser(decoded.userId);
    }
  }, []);

  return (
    <div>
      <Appbar />
      <Box sx={{ width: 1, padding: "100px" }}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 4">
            <BookDetailsCard user={user} />
          </Box>
          <Box gridColumn="span 8">
            <CommentSection user={user} />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
