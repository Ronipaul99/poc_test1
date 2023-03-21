import { Box } from '@mui/system';
import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { cartActions } from "../store/Cart-slice";
import Button from '@mui/material/Button';
// import { ShowCart1 } from '../store/addToCart-slice';
import { Card, CardActions, Collapse, IconButton, Typography } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const Course = ({ name, id, imgURL, price, details }) => {




  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //   const dispatch = useDispatch();


  // const addToCart = () => {

  // dispatch(
  //   cartActions.addToCart({
  //     name,
  //     id,
  //     price
  //   }))
  // }
  return (
    <>
      <Card sx={{ maxWidth: "80vw", boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}>
        <Link style={{ textDecoration: 'none', color: 'white' }} to={`/CourseDetails/${id}`}>
          <CardContent>
            <Box sx={{
              minHeight: "25vh",
              display: "flex",
              justifyContent: "center"
            }}>
              <Card sx={{
                height: "25vh",
                width: "80vw",
                backgroundColor: "#fff",
                position: "relative",
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
              }}>
                <Box sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                }}>

                  <Box sx={{
                    width: "50%",
                    backgroundColor: "#fff",
                    height: "100%",
                    overflow: "hidden"
                  }}>
                    <img style={{
                      boxSizing: "border-box",
                      objectFit: "cover",
                      height: "100%",
                      width: "100%"
                    }} src={imgURL} alt="pic here" />
                  </Box>
                  <Box sx={{
                    width: "70%",
                    backgroundColor: "#eee",
                    height: "100%",
                    padding: "20px"
                  }}>
                    {/* product heading details */}
                    <Typography variant="h5">{name}</Typography>
                    <Typography>$ {price}</Typography>
                    <Button variant="contained" >Add to cart</Button>
                  </Box>
                </Box>
              </Card>
            </Box>
          </CardContent>
        </Link>


        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            {!expanded && <Typography>Know more</Typography>}
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>


        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Legal Details:</Typography>
            <Typography paragraph>
              {details}
            </Typography>
            <Typography paragraph>
            {details}
            </Typography>
            <Typography paragraph>
            {details}
            </Typography>
            <Typography>
            {details}
            </Typography>
          </CardContent>
        </Collapse>

      </Card>
    </>
  );
};

export default Course;





