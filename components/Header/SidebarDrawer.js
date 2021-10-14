import Image from "next/image";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function SidebarDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem className="click transform transition duration-200">
          <ListItemText>NEW RELEASES</ListItemText>
          <ListItemIcon>
            <ArrowForwardIosIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemText>NEW RELEASES</ListItemText>
          <ListItemIcon>
            <ArrowForwardIosIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemText>NEW RELEASES</ListItemText>
          <ListItemIcon>
            <ArrowForwardIosIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemText>NEW RELEASES</ListItemText>
          <ListItemIcon>
            <ArrowForwardIosIcon />
          </ListItemIcon>
        </ListItem>
      </List>
      <List>
        <a href="https://guntaro.blog/">
          <ListItem className="hover:bg-gray-200 cursor-pointer active:scale-90 transition duration-200">
            <ListItemIcon>
              <Image
                src={"https://guntaro.blog/wp-content/uploads/2021/09/dog-3-1-1.png"}
                width={40}
                height={40}
                objectFit
              />
            </ListItemIcon>
            <ListItemText>ぐんたろ！</ListItemText>
          </ListItem>
        </a>

        <ListItem>
          <ListItemText>
            <p className="text-gray-400">
              最高の商品、耳寄りなヒント、感動のストーリー。ぐんたろ
              メンバーになって一緒に絵文字を作成してみよう
            </p>
            <a className="link" target="_blank" href="https://guntaro.blog">
              詳しく見る
            </a>
          </ListItemText>
        </ListItem>

        <ListItem>
          <ListItemText>
            <button className="bg-black p-3 rounded-full text-white shadow-md outline-none click hover:opacity-50">
              ここから始めよう
            </button>
          </ListItemText>
        </ListItem>

        <ListItem>
          <ListItemText>
            <button className="border p-3 px-4 rounded-full shadow-md outline-none click hover:opacity-50">
              ログイン
            </button>
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="inline-block">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)}>
            <DehazeIcon className="click" />
          </IconButton>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
export default SidebarDrawer;
