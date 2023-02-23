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


const Course = ({ name, id, imgURL, price }) => {




  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //   const a = useSelector(ShowCart1);

  //   var value2 = a;
  //   console.log(JSON.parse(value2) === true);

  // const loggedIn = window.localStorage.getItem("isLoggedIn");
  //   const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  //   const dispatch = useDispatch();


  // const addToCart = () => {
  // if (!isLoggedIn === false) {
  // setWarn(false);
  // dispatch(
  //   cartActions.addToCart({
  //     name,
  //     id,
  //     price
  //   }))
  // } else {
  //   setWarn(true);
  // };
  // }
  return (
    <>
      <Card sx={{ maxWidth: "80vw", boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}>
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
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
              aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
              medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
              occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
              large plate and set aside, leaving chicken and chorizo in the pan. Add
              pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
              stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and
              peppers, and cook without stirring, until most of the liquid is absorbed,
              15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
              mussels, tucking them down into the rice, and cook again without
              stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse>

      </Card>
    </>
  );
};

export default Course;





